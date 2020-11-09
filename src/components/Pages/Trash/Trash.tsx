import React, {useEffect, useState, useContext} from 'react';
import './Trash.scss';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input/Input";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {langContext} from "../../Context";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Trash = () => {
    const [clicker, updClicker] = useState(0);
    const [inputVal, updInput] = useState('');
    const width = useWindowsWidth();

    const [data, setData] = useState(0);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&lang=en&units=metric&APPID=6e2b9099562f5a55a540f32121233cc6`)
            .then(res => res.json())
            .then(data => {
                console.log(data.cod)
                setData(data.cod);
            })
    }, [])

    const Context:any = useContext(langContext);
    // @ts-ignore
    console.log(Context.language);

    function handleInputChange(e:any) {
        updInput(e.target.value);
    }

    useEffect(() => {
        document.title =  inputVal;
    });

    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

    const loadProfile = async () => {
        await sleep(1700);
        console.log({ profileId: "1" });
        return { profileId: "1" };
    };
    const loadProducts = async () => {
        await sleep(1800);
        console.log([{ productId: "2" }]);
        return [{ productId: "2" }];
    };
    const loadBasket = async () => {
        await sleep(1900);
        console.log({ products: [{ productId: "2" }] });
        return { products: [{ productId: "2" }] };
    };

    async function sequential() {
        const profile = await loadProfile();
        const products = await loadProducts();
        const basket = await loadBasket();
        return console.log({ profile, products, basket });
    }
    
    async function parallelStupid() {
        let profilePromise = loadProfile();
        let productsPromise = loadProducts();
        let basketPromise = loadBasket();
        const profile = await profilePromise;
        const products = await productsPromise;
        const basket = await basketPromise;
        return console.log({ profile, products, basket });
    }

    async function AsyncAll() {
        let [profile, products, basket] = await Promise.all([
            loadProfile(),
            loadProducts(),
            loadBasket(),
        ]);
        return console.log({ profile, products, basket });
    }

    let dat = [
        'cat', 'act',
        'rome', 'more',
        'hello',
        'limes', 'slime', 'smile', '',
    ];


    function getAnagramCount(data:any) {
        let acc:any = {};

        data.forEach((item:any) => {
            let sorted = item.split('').sort().join('');
            let keys =  Object.keys(acc);

            if (keys.length) {
                let isAdded = false;

                keys.forEach((key, index) => {
                    if (!isAdded) {
                        if (key.split('').sort().join('') === sorted) {
                            acc[key] = acc[key] + 1;
                            isAdded = true;
                        } else if (index === keys.length - 1) {
                            acc[item] = 0;
                        }
                    }
                })

            } else {
                acc[item] = 0;
            }
        });

        return acc;
    }

    console.log(getAnagramCount(dat));

    const options = [
        'american', 'decimal',
    ];
    const [optionValue, setOptionValue] = useState(options[0]);

    const handleChangeDropdown = () => {

    }

    return <>
        <div className="rootHome">
            <h1>Welcome to Dmytro Yesin's Website!</h1>
        </div>

        <h2>{clicker}</h2>

        <div className="btn_block">
            <Button  onClick={() => updClicker(clicker - 1)} variant="outlined" color="primary">
                Minus
            </Button>

            <Button  onClick={() => updClicker(clicker + 1)} variant="outlined" color="primary">
                Plus
            </Button>
        </div>

        <div className="btn_block">
            <Button  onClick={() => sequential()} variant="outlined" color="primary">
                sequetial
            </Button>

            <Button  onClick={() => parallelStupid()} variant="outlined" color="primary">
                Parallel
            </Button>

            <Button  onClick={() => AsyncAll()} variant="outlined" color="primary">
                Async All
            </Button>
        </div>

        <h2>{inputVal}</h2>

        <div className="btn_block">
            <Input color="primary" onChange={handleInputChange} />
        </div>

        <h2>{width}</h2>
        <div className="btn_block">

            {Context.language}
            <Button  onClick={() => Context.setLanguage('en')} variant="outlined" color="primary">
                EN
            </Button>

            <Button  onClick={() => Context.setLanguage('he')} variant="outlined" color="primary">
                HE
            </Button>
        </div>
        <div className="btn_block">

            <Popup
                trigger={<Button  variant="outlined" color="primary">POP-UP</Button>}
                modal
                nested
            >
                { (close:any) => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Modal Title </div>
                        <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                        </div>
                        <div className="actions">
                            <Popup
                                trigger={<button className="button"> Trigger </button>}
                                position="top center"
                                nested
                            >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
                            </Popup>
                            <button
                                className="button"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                close modal
                            </button>
                        </div>
                    </div>
                )}
            </Popup>


        </div>

        <h2>Data: {data}</h2>

    </>
};

function useWindowsWidth() {                                      // this is a custom hook
    const [width, updWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => updWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);  // The same as componentWillUnmount
        };
    });
    return width;
}

export default Trash;