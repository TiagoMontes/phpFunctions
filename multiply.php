<?php

// variaveis definidas
$valor1 = 40;
$valor2 = 10;


// funcao de divisao
function divisao($valor1 ,$valor2): float
{
    $resultadoDivisao = $valor1 / $valor2;
    return $resultadoDivisao;
}

$divisao = (divisao($valor1, $valor2));
echo ("A divisão do numero $valor1 e $valor2 é igual a : $divisao" . "\n");


//subtração
function subtracao($valor1, $valor2): float
{
    $resultadoSubtracao = $valor1 - $valor2;
    return $resultadoSubtracao;
}

// funcao de soma
function soma($valor1, $valor2): float
{
    $resultadoSoma = $valor1 + $valor2;
    return $resultadoSoma;
}

$soma = soma($valor1, $valor2);
echo ("A soma do numero $valor1 e $valor2 é igual a : $soma" . "\n");


// funcao de multiplicacao
function multiplicacao($valor1, $valor2): float
{
    $resultadoMulti = $valor1 * $valor2;
    return $resultadoMulti;
}

$multiplicacao = multiplicacao($valor1, $valor2);
echo ("A multiplicação dos numeros $valor1 e $valor2 é igual a : $multiplicacao" . "\n");


// funcao de porcentagem
$valor = 5;
$valorBase = 30;
function porcentagem($porcentagem, $valorBase): float
{
    $resultadoPorcent = $porcentagem * $valorBase / 100;
    return $resultadoPorcent;
}

$porcentagem = porcentagem($valor, $valorBase);
echo ("A multiplicação dos numeros $valor e $valorBase é igual a : $porcentagem" . "\n");


// funcao de potencialização
$valorPotencia = 5;
function potencializacao($valor, $potencia): float
{
    $resultadoPotencia = $valor ** $potencia;
    return $resultadoPotencia;
}

$potencia = potencializacao($valor, $valorPotencia);
echo ("$valor elevado a potência $valorPotencia é igual a : $potencia" . "\n");


// funcao de media
$media1 = 5;
$media2 = 10;
function media($media1, $media2): float
{
    $resultadoMedia = $media1 + $media2 / 2;
    return $resultadoMedia;
}

$media = media($media1, $media2);
echo ("A média entre $media1 e $media2 é igual a : $media" . "\n");


// funcao de fatorial
$numero = 8;
function fatorial($numero): float
{
    $contagem = 1;
    $fatorial = 1;

    while ($numero >= $contagem) {
        $fatorial = multiplicacao($fatorial, $contagem);
        $contagem = soma($contagem, 1);
    }

    return $fatorial;
}

$fatorial = fatorial($numero);
echo ("O fatorial de $numero é igual a: $fatorial" . "\n");


// combinacao simples
function combinacaoSimples($n, $k): float
{
    $nFatorial = fatorial($n);
    $kFatorial = fatorial($k);
    $nMenosK = subtracao($n, $k);
    $nMenosKFatorial = fatorial($nMenosK);

    $resultCombSimples = $nFatorial / ($kFatorial * $nMenosKFatorial);

    return $resultCombSimples;
}

$combinacaoSimples = combinacaoSimples(10,3);

echo ("A combinação simples de N = 10 e K = 3 é igual a $combinacaoSimples");

// imprimir na tela sequencia de fibbonacci.