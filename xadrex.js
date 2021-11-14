let piece = "Pawn";

piece = piece.toLowerCase();

switch (piece) {
    case "pawn": 
        console.log("vertically one square");
        break;
    case "knight":
        console.log("L shap");
        break;
    case "bishop":
        console.log("diagonals");
        break;
    case "rook":
        console.log("horizontals and verticals");
        break;
    case "queen":
        console.log("horizontal, verticals and diagonals");
        break;
    case "king":
        console.log("any direction one square");
        break;
    default:
        console.log("erro");
};