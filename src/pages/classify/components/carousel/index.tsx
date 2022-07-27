import Carousel from '@/components/Carousel/index';
import { SwiperItem, View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

function Page() {
    const [data, setData] = useState<any>([]);

    async function getData() {
        const data = await new Promise((resolve, reject) => {
            resolve([{ name: 1 }, { name: 2 }, { name: 3 }]);
        });

        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <View className={styles.chunk1}>
                <Carousel>
                    {data.map((value, index) => {
                        return (
                            <SwiperItem key={index}>
                                <View>{value?.name}</View>
                            </SwiperItem>
                        );
                    })}
                </Carousel>
            </View>
        </>
    );
}

export default Page;
