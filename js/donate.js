
// const mainSectionHide = document.getElementById('main-section')
// const hide = document.getElementById('history-section')
// const historyButton = document.getElementById('history-btn');
// historyButton.addEventListener('click', function () {
//     hide.classList.remove('hidden');
//     if (historyButton) {
//         mainSectionHide.classList.add('hidden');
//     }
// })
// // const historybutton = document.getElementById('history-btn')
// const mainSection = document.getElementById('main-section')
// const historySection = document.getElementById('history-section')
// const donationButton = document.getElementById('donation-btn');
// donationButton.addEventListener('click', function () {
//     if (donationButton) {
//         historySection.classList.add('hidden');
//     }
//     mainSection.classList.remove('hidden');
// })
// const historyContainer1 = document.getElementById('history-container').querySelector('p');
// const parentContainer = document.getElementById('history-container');
// const donateInput = document.getElementById('input-value');
// document.getElementById('donate-button').addEventListener('click', function () {
    
//     const donateValue = donateInput.value;
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     const currentTime = new Date().toLocaleString();
//     historyContainer1.innerText = `Current time: ${currentTime}`;
//     p.textContent = historyContainer1;
//     div.textContent = donateValue + ' Taka is Donated for Flood at Noakhali, Bangladesh';
//     div.classList.add('border', 'border-solid', 'p-6', 'rounded-2xl');
//     parentContainer.appendChild(div,p);

//     console.log('button1 click', donateValue);
//     const mainBalance = document.getElementById('main-balance');
//     console.log('mainBalance',mainBalance);
//     const newBalance = mainBalance.innerText;
//     const updateBalance = newBalance - donateValue;
//     console.log(newBalance, updateBalance);
//     mainBalance.innerText = updateBalance;
//     const donatedAmount = document.getElementById('first-donate-balance');
//     const donatedBalance = donatedAmount.innerText;
//     const updateDonatedAmount = parseFloat(donatedBalance) + parseFloat(donateValue);
//     donatedAmount.innerText = updateDonatedAmount;
    
  
// })


// const parentContainer2 = document.getElementById('history-container2');
// const donateInput2 = document.getElementById('input-value2');
// document.getElementById('donate-button2').addEventListener('click', function () {
//     const donateValue2 = donateInput2.value;
//     const div = document.createElement('div');
//     div.textContent = donateValue2 + '  Taka is Donated for Flood Relief in Feni,Bangladesh';
//     div.classList.add('border', 'border-solid', 'p-6', 'rounded-2xl');
//     parentContainer2.appendChild(div);
//     // input field clear
//     donateInput.value = '';
//     console.log('button1 click', donateValue2);
//     const mainBalance = document.getElementById('main-balance');
//     const newBalance = mainBalance.innerText;
//     const updateBalance = newBalance - donateValue2;
//     console.log(newBalance, updateBalance);
//     mainBalance.innerText = updateBalance;
//     const donatedAmount = document.getElementById('second-donate-balance');
//     const donatedBalance = donatedAmount.innerText;
//     const updateDonatedAmount = parseFloat(donatedBalance) + parseFloat(donateValue2);
//     donatedAmount.innerText = updateDonatedAmount;
//     console.log(updateDonatedAmount);
// })
// const parentContainer3 = document.getElementById('history-container3');
// const donateInput3 = document.getElementById('input-value3');
// document.getElementById('donate-button3').addEventListener('click', function () {
//     const donateValue3 = donateInput3.value;
//     const div = document.createElement('div');
//     div.textContent = donateValue3 + '   Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';
//     div.classList.add('border', 'border-solid', 'p-6', 'rounded-2xl');
//     parentContainer3.appendChild(div);
//     // input field clear
//     donateInput.value = '';
//     console.log('button1 click', donateValue3);
//     const mainBalance = document.getElementById('main-balance');
//     const newBalance = mainBalance.innerText;
//     const updateBalance = newBalance - donateValue3;
//     console.log(newBalance, updateBalance);
//     mainBalance.innerText = updateBalance;
//     const donatedAmount = document.getElementById('third-donate-balance');
//     const donatedBalance = donatedAmount.innerText;
//     const updateDonatedAmount = parseFloat(donatedBalance) + parseFloat(donateValue3);
//     donatedAmount.innerText = updateDonatedAmount;
//     console.log(updateDonatedAmount);
// })

// // Function to update history with the donation value and current time
// function updateHistory(donateValue, message, container) {
//     const currentTime = new Date().toLocaleString();
//     const div = document.createElement('div');
//     const p = document.createElement('p');

//     // Set the message with the current time
//     p.textContent = `${donateValue} Taka is Donated. ${message} at ${currentTime}`;
//     div.classList.add('border', 'border-solid', 'p-6', 'rounded-2xl');

//     // Append the paragraph to the div and the div to the parent container
//     div.appendChild(p);
//     container.appendChild(div);
// }

// // Section for first donation button
// const parentContainer1 = document.getElementById('history-container');
// const donateInput1 = document.getElementById('input-value');
// document.getElementById('donate-button').addEventListener('click', function () {
//     const donateValue = donateInput1.value;
//     updateHistory(donateValue, 'for Flood at Noakhali, Bangladesh', parentContainer1);

//     // Clear input field
//     donateInput1.value = '';

//     // Update balance
//     const mainBalance = document.getElementById('main-balance');
//     const newBalance = parseFloat(mainBalance.innerText);
//     const updateBalance = newBalance - parseFloat(donateValue);
//     mainBalance.innerText = updateBalance;

//     const donatedAmount = document.getElementById('first-donate-balance');
//     const donatedBalance = parseFloat(donatedAmount.innerText);
//     donatedAmount.innerText = donatedBalance + parseFloat(donateValue);
// });

// // Section for second donation button
// const parentContainer2 = document.getElementById('history-container2');
// const donateInput2 = document.getElementById('input-value2');
// document.getElementById('donate-button2').addEventListener('click', function () {
//     const donateValue2 = donateInput2.value;
//     updateHistory(donateValue2, 'for Flood Relief in Feni, Bangladesh', parentContainer2);

//     // Clear input field
//     donateInput2.value = '';

//     // Update balance
//     const mainBalance = document.getElementById('main-balance');
//     const newBalance = parseFloat(mainBalance.innerText);
//     const updateBalance = newBalance - parseFloat(donateValue2);
//     mainBalance.innerText = updateBalance;

//     const donatedAmount = document.getElementById('second-donate-balance');
//     const donatedBalance = parseFloat(donatedAmount.innerText);
//     donatedAmount.innerText = donatedBalance + parseFloat(donateValue2);
// });

// // Section for third donation button
// const parentContainer3 = document.getElementById('history-container3');
// const donateInput3 = document.getElementById('input-value3');
// document.getElementById('donate-button3').addEventListener('click', function () {
//     const donateValue3 = donateInput3.value;
//     updateHistory(donateValue3, 'for Aid for Injured in the Quota Movement, Bangladesh', parentContainer3);

//     // Clear input field
//     donateInput3.value = '';

//     // Update balance
//     const mainBalance = document.getElementById('main-balance');
//     const newBalance = parseFloat(mainBalance.innerText);
//     const updateBalance = newBalance - parseFloat(donateValue3);
//     mainBalance.innerText = updateBalance;

//     const donatedAmount = document.getElementById('third-donate-balance');
//     const donatedBalance = parseFloat(donatedAmount.innerText);
//     donatedAmount.innerText = donatedBalance + parseFloat(donateValue3);
// });

