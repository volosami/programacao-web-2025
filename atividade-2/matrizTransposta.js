function transporMatriz(A){
    let linha = A.length
    let coluna = A[0].length
    var matrizTransposta = Array.from({ length: coluna }, () => Array(linha).fill(0));
        for (let i=0;i<linha;i++){
            let linha=[]
            for (let j=0;j<coluna;j++){
                matrizTransposta[j][i] = A[i][j]
            }
        }

    return matrizTransposta
}

var matriz1 = 
[
    [1,2],
    [3,4],
    [5,6]
]

var matriz2 = transporMatriz(matriz1)
