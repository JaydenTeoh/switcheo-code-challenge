// 1st method: Recursion

function sum_to_n_a(n) {
  if (n == 1) {
    return 1;
  }
  return n + sum_to_n_a(n - 1);
}

// 2nd method: Looping

function sum_to_n_b(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 3rd method: Mathematical Formula T(n) = n(n+1)/2

function sum_to_n_c(n) {
  return (n * (n + 1)) / 2;
}
