import React, {useEffect, useState} from 'react';
import './Trash.scss';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input/Input";

const Trash = () => {
    const [clicker, updClicker] = useState(0);
    const [inputVal, updInput] = useState('');
    const width = useWindowsWidth();

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