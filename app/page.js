import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/HomePage/Banner/Banner";
import Resturant from "@/components/HomePage/ResturantArea/Resturant";
import FoodArea from "@/components/HomePage/FoodArea/FoodArea";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
          <Banner></Banner>
          <Resturant></Resturant>
          <FoodArea></FoodArea>
      </main>
    </div>
  );
}
