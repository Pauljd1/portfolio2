declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
