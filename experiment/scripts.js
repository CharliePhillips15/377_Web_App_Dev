$(document).ready(function() {
    const cards = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    $('#play-btn').on('click', function() {
        const player1Card = getRandomCard();
        const player2Card = getRandomCard();

        // Replace these lines to display the actual SVGs
        $('#p1-card').html(''); // Clear previous card
        $('#p2-card').html(''); // Clear previous card

        // Append the SVGs for Player 1 and Player 2 cards
        // $('#p1-card').append('<img src="path_to_player1_card.svg" />');
        // $('#p2-card').append('<img src="path_to_player2_card.svg" />');

        const result = compareCards(player1Card, player2Card);

        if (result === 1) {
            $('#result').text('Player 1 wins!');
        } else if (result === 2) {
            $('#result').text('Player 2 wins!');
        } else {
            $('#result').text('It\'s a tie!');
        }
    });

    function getRandomCard() {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    }

    function compareCards(card1, card2) {
        const index1 = cards.indexOf(card1);
        const index2 = cards.indexOf(card2);

        if (index1 < index2) {
            return 1; // Player 1 wins
        } else if (index1 > index2) {
            return 2; // Player 2 wins
        } else {
            return 0; // It's a tie
        }
    }
});
