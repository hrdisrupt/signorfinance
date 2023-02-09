import React, { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PersonInfo } from "./PersonInfo";
import { PostCard } from "./PostCard";
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from "./styles";

const postList = [
  {
    id: "6",
    title: "Financial crisis of 1929",
    body: `The financial crisis of 1929, also known as the Great Depression, was a catastrophic event that had a profound impact on the global economy. It was triggered by the stock market crash of 1929 and led to widespread unemployment, poverty, and homelessness. The crisis began in the United States and quickly spread to other countries, affecting economies around the world.
    The root cause of the financial crisis was a combination of factors, including a decade-long economic boom in the 1920s, speculation in the stock market, and a lack of regulation in the banking industry. The stock market had become heavily inflated, with many people investing in stocks on margin, meaning they borrowed money to purchase shares. This created a bubble that eventually burst, leading to the stock market crash of 1929.
    The effects of the financial crisis were devastating. The stock market lost nearly 90% of its value, and millions of people lost their savings and their homes. Unemployment rose dramatically, with nearly 25% of the workforce out of work by 1933. The crisis also had a significant impact on the global economy, with trade and production dropping dramatically.
    Governments around the world responded to the crisis with a range of policies, including increased regulation of the banking industry, public works programs, and unemployment insurance. These efforts helped to stabilize the global economy, but it took several decades for the world to fully recover from the Great Depression.
    The financial crisis of 1929 serves as a reminder of the importance of sound economic policies and effective regulation. It highlights the need for caution in the stock market and the importance of preparing for economic downturns. The lessons of the Great Depression continue to shape economic policy and inform our understanding of the global economy today.      
    `, 
    created_at: "2023-01-11T23:50:40Z"
  },
  {
    id: "5",
    title: "Differences between shares and obligations",
    body: `Shares and bonds are two important types of financial instruments that are widely used in the world of investing. Although both offer investors the opportunity to earn a return on their investment, they differ significantly in their structure, risk level, and return potential. 
    Shares, also known as stocks or equities, represent ownership in a company. When you purchase a share of stock, you become a part-owner of the company and have a right to share in its profits and growth. The value of your investment will increase if the company performs well, and it may decrease if the company performs poorly. Shares can be bought and sold on stock exchanges, and the price of a share is determined by supply and demand. 
    Bonds, on the other hand, are debt instruments that are issued by companies, municipalities, or governments. When you purchase a bond, you are lending money to the issuer and they agree to pay you a fixed rate of interest over a set period of time. At the end of the bond's term, the issuer will repay the original investment, known as the "principal." Unlike stocks, the value of a bond does not fluctuate based on the performance of the issuer. Instead, the price of a bond is determined by interest rates and the creditworthiness of the issuer. 
    One key difference between shares and bonds is risk. Shares are generally considered riskier investments because the value of your investment can fluctuate greatly, and there is no guarantee of a return. On the other hand, bonds are generally considered to be less risky because the return on your investment is more predictable. 
    Another difference between shares and bonds is return potential. Shares have the potential to provide higher returns over the long-term, especially if the company performs well. However, they also have the potential to lose value. Bonds, on the other hand, offer a more stable return, but the potential for higher returns is limited. 
    In conclusion, shares and bonds are both important investment options, but they are designed to meet different investment needs. Investors who are comfortable with risk and are looking for the potential for high returns may prefer shares, while those who prefer a more stable return may prefer bonds. Understanding the differences between shares and bonds can help investors make informed investment decisions.            
    `,
    created_at: "2022-08-31T10:31:21Z"
  },
  {
    id: "4",
    title: "What is the gross domestic product?",
    body: `Gross Domestic Product (GDP) is a measure of a country's economic output and the total value of all goods and services produced within a country's borders in a given time period, usually a year. It is considered to be one of the most widely used indicators of a country's economic health and is used to compare the economic performance of different countries.
    GDP is calculated by adding up consumption, investment, government spending, and net exports (exports minus imports). It is important to note that GDP only measures final output, meaning that it does not take into account intermediate stages of production, such as raw materials or components used in the production process.
    There are two ways to measure GDP: nominal GDP, which is the value of output measured in current prices, and real GDP, which is adjusted for inflation and provides a measure of output in constant prices.
    While GDP is a useful tool for measuring a country's economic performance, it is not a perfect indicator. For example, it does not take into account non-monetary transactions, such as bartering or sharing, and it does not necessarily reflect changes in a country's standard of living or its overall well-being.
    Overall, GDP is an important tool for policymakers, economists, and investors to understand the current state of a country's economy and to make informed decisions.
    `,  
    created_at: "2022-08-11T23:53:51Z"
  },
  {
    id: "3",
    title: "Ten financial management advices",
    body: `Set Financial Goals: Start by setting clear financial goals, such as paying off debt, saving for a down payment on a house, or building an emergency fund. This will help you stay focused and motivated.
    Create a Budget: A budget is a crucial tool for managing your finances. It will help you track your income and expenses, identify areas where you can cut costs, and ensure you are saving enough to reach your financial goals.
    Pay off Debt: High levels of debt can put a strain on your finances. Prioritize paying off high-interest debt, such as credit card balances, as soon as possible.
    Save Automatically: Make it easy to save by setting up automatic transfers from your checking account to your savings account.
    Invest for the Future: Start investing for your future as early as possible. Consider a diversified portfolio of stocks, bonds, and other investments.
    Build an Emergency Fund: Having a cushion of three to six months of living expenses can help protect you from financial shocks, such as a job loss or medical emergency.
    Be Mindful of Fees: Fees can add up quickly and eat into your returns. Be mindful of the fees associated with investments and bank accounts and look for low-cost options.
    Protect Your Finances: Protect your finances by having adequate insurance coverage and by being vigilant against financial scams and fraud.
    Live Within Your Means: Avoid overspending and living beyond your means. Focus on spending within your budget and saving for your financial goals.
    Stay Educated: Stay informed about financial matters and continuously educate yourself about different investment options and strategies. Consider working with a financial advisor if you need additional guidance.       
    `,  
    created_at: "2022-08-11T23:51:52Z"
  },
  {
    id: "2",
    title: "What are cryptos?",
    body: `Cryptocurrencies are a type of digital or virtual currency that use cryptography to secure and verify transactions, as well as to control the creation of new units. Cryptocurrencies operate independently of a central bank and are decentralized, meaning they are not subject to government or financial institution control.
    The first and most well-known cryptocurrency is Bitcoin, which was created in 2009. Since then, hundreds of cryptocurrencies have been created, each with their own unique features and uses.
    Cryptocurrencies are typically stored in a digital wallet and can be used for a variety of purposes, such as online purchases, peer-to-peer transactions, or as a store of value similar to traditional fiat currencies like the US dollar or Euro.
    One of the key features of cryptocurrencies is their use of blockchain technology. A blockchain is a decentralized digital ledger that records transactions across a network of computers. Transactions made using cryptocurrencies are verified and recorded on the blockchain, providing transparency and security.
    Cryptocurrencies have been a subject of much debate and speculation, with some experts hailing them as the future of money, while others are more cautious and view them as a speculative investment. Despite this, the use of cryptocurrencies continues to grow, with more businesses and individuals accepting them as a form of payment.
    It's important to note that cryptocurrencies are highly volatile and can experience significant price swings, making them a potentially risky investment. As with any investment, it's important to thoroughly research and understand the risks before investing in cryptocurrencies.    
    `,  
    created_at: "2022-08-11T23:50:40Z"
  },
  {
    id: "1",
    title: "When was open the first stock exchange?",
    body: `The first stock exchange is widely considered to be the Amsterdam Stock Exchange, which was established in 1720. The Amsterdam Stock Exchange was created to facilitate trading in the East India Company's shares, which were in high demand due to the company's monopoly on trade with Asia.
    As trade and commerce grew, other stock exchanges were established in other parts of Europe, such as the London Stock Exchange, which was established in 1801. Over time, stock exchanges spread across the world and became an important part of the financial landscape, providing a platform for companies to raise capital and for investors to buy and sell shares in these companies.
    Today, there are stock exchanges all over the world, and they are considered to be key indicators of a country's economic health and stability. The largest stock exchanges by market capitalization are the New York Stock Exchange (NYSE) and the NASDAQ in the United States, the Tokyo Stock Exchange in Japan, and the Shanghai Stock Exchange in China.      
    `,
    created_at: "2022-07-13T19:04:37Z"
  }
]

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  id: string;
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [postsCounter, setPostsCounter] = useState(0);

  function fetchPosts(query = "") {
    setPosts(postList);
    setPostsCounter(postList.length);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      {/* <PersonInfo></PersonInfo> */}
      <HomeContent>
        {/* <SearchSection>
          <div>
            <span>Posts</span>
            <small>{postsCounter} posts</small>
          </div>
          <input
            type="text"
            onBlur={(e) => fetchPosts(e.target.value)}
            placeholder="Search a Post"
          />
        </SearchSection> */}
        <ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.id}`}
                post={post}
              ></PostCard>
            ))}
        </ListSection>
      </HomeContent>
    </HomeContainer>
  );
}
