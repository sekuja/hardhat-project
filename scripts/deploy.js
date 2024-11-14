async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    
    await helloWorld.waitForDeployment();
    
    console.log("HelloWorld deployed to:", helloWorld.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
