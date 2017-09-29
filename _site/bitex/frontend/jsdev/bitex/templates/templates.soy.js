// This file was automatically generated from templates.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.AlgoPermissionsDialogContent = function(opt_data) {
  var output = '';
  /** @desc Algorithm trading request permmissions dialog content */
  var MSG_UNNAMED_1734 = goog.getMsg('This algorithm is requesting your permission to:');
  output += '<p class="lead"> ' + MSG_UNNAMED_1734 + '</p><ul class="list-unstyled" style="line-height: 2">';
  var permissionList7 = opt_data.permissions;
  var permissionListLen7 = permissionList7.length;
  for (var permissionIndex7 = 0; permissionIndex7 < permissionListLen7; permissionIndex7++) {
    var permissionData7 = permissionList7[permissionIndex7];
    output += '<li><span class="fa fa-check text-success"></span>';
    switch (permissionData7) {
      case 'notification':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1736 = goog.getMsg(' Show notifications');
        output += MSG_UNNAMED_1736;
        break;
      case 'balance':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1738 = goog.getMsg(' See your balances');
        output += MSG_UNNAMED_1738;
        break;
      case 'execution_report':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1740 = goog.getMsg(' Listen to the execution reports from your orders');
        output += MSG_UNNAMED_1740;
        break;
      case 'new_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1742 = goog.getMsg(' Send limited orders');
        output += MSG_UNNAMED_1742;
        break;
      case 'new_buy_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1744 = goog.getMsg(' Send buy limited orders');
        output += MSG_UNNAMED_1744;
        break;
      case 'new_sell_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1746 = goog.getMsg(' Send sell limited orders');
        output += MSG_UNNAMED_1746;
        break;
      case 'new_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1748 = goog.getMsg(' Send market orders');
        output += MSG_UNNAMED_1748;
        break;
      case 'new_buy_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1750 = goog.getMsg(' Send buy market orders');
        output += MSG_UNNAMED_1750;
        break;
      case 'new_sell_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1752 = goog.getMsg(' Send sell market order');
        output += MSG_UNNAMED_1752;
        break;
      case 'cancel_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1754 = goog.getMsg(' Cancel orders');
        output += MSG_UNNAMED_1754;
        break;
      default:
        output += soy.$$escapeHtml(permissionData7);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};


bitex.templates.APIKeyCreatedDialogContent = function(opt_data) {
  var output = '';
  /** @desc API Key created dialog description */
  var MSG_UNNAMED_1756 = goog.getMsg(
      'The API Key \'{$label}\' has been created successfully. Please make sure to store the credentials below in a secure location.',
      {'label': soy.$$escapeHtml(opt_data.label)});
  /** @desc API Key label on API Keycreated dialog */
  var MSG_UNNAMED_1758 = goog.getMsg('API Key');
  /** @desc API Password label on API Keycreated dialog */
  var MSG_UNNAMED_1760 = goog.getMsg('API Password');
  /** @desc API Secret label on API Keycreated dialog */
  var MSG_UNNAMED_1762 = goog.getMsg('API Secret');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1764 = goog.getMsg('Warning! ');
  /** @desc Warning message on the API Key created dialog description */
  var MSG_UNNAMED_1766 = goog.getMsg('The API secret and password will never be displayed again. Make sure you have saved it before closing this window.');
  output += '<p>' + MSG_UNNAMED_1756 + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1758 + '</dt><dd>' + soy.$$escapeHtml(opt_data.key) + '</dd><dt>' + MSG_UNNAMED_1760 + '</dt><dd>' + soy.$$escapeHtml(opt_data.password) + '</dd><dt>' + MSG_UNNAMED_1762 + '</dt><dd>' + soy.$$escapeHtml(opt_data.secret) + '</dd></dl><div class="alert alert-error"><strong>' + MSG_UNNAMED_1764 + '</strong>' + MSG_UNNAMED_1766 + '</div>';
  return output;
};


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1768 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1768 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1770 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1770 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositDetailDialogContent = function(opt_data) {
  var output = '<table class="table table-bordered table-condensed"><tbody>';
  var dataList95 = opt_data.depositDetailData;
  var dataListLen95 = dataList95.length;
  for (var dataIndex95 = 0; dataIndex95 < dataListLen95; dataIndex95++) {
    var dataData95 = dataList95[dataIndex95];
    output += '<tr><td>' + soy.$$escapeHtml(dataData95['key']) + ' :</td><td>' + soy.$$escapeHtml(dataData95['value']) + '</td></tr>';
  }
  if (opt_data.depositReceiptList) {
    /** @desc Download picture link on deposit receipt dialog content */
    var MSG_UNNAMED_1772 = goog.getMsg('Download');
    output += '<tr><td>Recibo:</td><td>';
    var receiptList105 = opt_data.depositReceiptList;
    var receiptListLen105 = receiptList105.length;
    for (var receiptIndex105 = 0; receiptIndex105 < receiptListLen105; receiptIndex105++) {
      var receiptData105 = receiptList105[receiptIndex105];
      output += '<a href="' + soy.$$escapeHtml(receiptData105['url']) + '" target="_blank">' + MSG_UNNAMED_1772 + '</a> ';
    }
    output += '</td></tr>';
    var receiptList114 = opt_data.depositReceiptList;
    var receiptListLen114 = receiptList114.length;
    for (var receiptIndex114 = 0; receiptIndex114 < receiptListLen114; receiptIndex114++) {
      var receiptData114 = receiptList114[receiptIndex114];
      output += '<tr><td colspan="2">' + ((receiptData114['type'] == 'image') ? '<img width="100%" src="' + soy.$$escapeHtml(receiptData114['url']) + '"/>' : (receiptData114['type'] == 'pdf') ? '<iframe src="https://docs.google.com/gview?url=' + soy.$$escapeHtml(receiptData114['url']) + '&embedded=true" style="width:515px; height:300px;" frameborder="0" />' : '') + '</td></tr>';
    }
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1774 = goog.getMsg('Download');
  var receipt_urlList131 = opt_data.depositReceiptList;
  var receipt_urlListLen131 = receipt_urlList131.length;
  for (var receipt_urlIndex131 = 0; receipt_urlIndex131 < receipt_urlListLen131; receipt_urlIndex131++) {
    var receipt_urlData131 = receipt_urlList131[receipt_urlIndex131];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData131) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData131) + '" target="_blank">' + MSG_UNNAMED_1774 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1776 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1778 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1780 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1782 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1776 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1778 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1780 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label net-amount">' + MSG_UNNAMED_1782 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.InstantFiatDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Instant deposit fiat description 1 */
  var MSG_UNNAMED_1784 = goog.getMsg('Net value:');
  /** @desc Instant deposit fiat description 2 */
  var MSG_UNNAMED_1786 = goog.getMsg('Pre approval limit:');
  /** @desc Instant deposit fiat description 3 */
  var MSG_UNNAMED_1788 = goog.getMsg('(3x the approx. value of your account.)');
  /** @desc Instant deposit fiat description 4 */
  var MSG_UNNAMED_1790 = goog.getMsg('Pre approval fee: 0% (Promotional)');
  /** @desc Instant deposit fiat message */
  var MSG_UNNAMED_1792 = goog.getMsg('You won\'t be able to withdrawal funds until your DEPOSIT IS CONFIRMED by the exchange. In case of a fake deposit receipt or any fraud attempt, an administrative fee of 30% of the deposit amount will be applied and your account will be TERMINATED.');
  output += '<div class="row-fluid" data-deposit-status="confirm"><p>' + MSG_UNNAMED_1784 + ' <span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="min( ' + soy.$$escapeHtml(opt_data.formula) + ',  ' + soy.$$escapeHtml(opt_data.value) + ' )" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span></p><p>' + MSG_UNNAMED_1786 + '<span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.formula) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.pattern) + '" data-blink-class="balance-info-blink"></span> ' + MSG_UNNAMED_1788 + '</p><p>' + MSG_UNNAMED_1790 + '</p><div class="well"><p>' + MSG_UNNAMED_1792 + '</p></div></div>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1794 = goog.getMsg('My broker');
    output += '<div class="section-title"><h3>' + MSG_UNNAMED_1794 + '</h3></div>';
  }
  output += '<div class="content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1832 = goog.getMsg('Terms of service');
    output += '<address><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1796 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1798 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1796 + '">' + MSG_UNNAMED_1798 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></address>';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1800 = goog.getMsg('Markets');
      output += '<div class="row-fluid"><div class="span3"><h4>' + MSG_UNNAMED_1800 + '</h4>';
      var allowed_marketList266 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen266 = allowed_marketList266.length;
      for (var allowed_marketIndex266 = 0; allowed_marketIndex266 < allowed_marketListLen266; allowed_marketIndex266++) {
        var allowed_marketData266 = allowed_marketList266[allowed_marketIndex266];
        output += '<div class="row-fluid"><div class="span12">' + soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData266]['description']) + '</div></div>';
      }
      output += '</div></div>';
    }
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1802 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1804 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1806 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1808 = goog.getMsg('Terms');
        output += '<h4>' + MSG_UNNAMED_1802 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1804 + '</th><th>' + MSG_UNNAMED_1806 + '</th><th>' + MSG_UNNAMED_1808 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1810 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1810 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeBuy']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeBuy']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>') + '<td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1812 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1814 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1812 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeBuy']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeBuy']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>') + '<td></td></tr><tr><td>' + MSG_UNNAMED_1814 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeSell'] == opt_data.msg_broker['FormattedTransactionFeeSell']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeSell']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + '</td>') + '<td></td></tr>';
          }
        }
        var feeList341 = opt_data.msg_broker['FeeStructure'];
        var feeListLen341 = feeList341.length;
        for (var feeIndex341 = 0; feeIndex341 < feeListLen341; feeIndex341++) {
          var feeData341 = feeList341[feeIndex341];
          output += '<tr><td>' + soy.$$escapeHtml(feeData341['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData341['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData341['Terms']) + '</td></tr>';
        }
        output += '</tbody></table>';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1816 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1818 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1820 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1822 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1824 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1826 = goog.getMsg('Managed by');
      output += '<h4>' + MSG_UNNAMED_1816 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1818 + '</th><th>' + MSG_UNNAMED_1820 + '</th><th>' + MSG_UNNAMED_1822 + '</th><th>' + MSG_UNNAMED_1824 + '</th><th>' + MSG_UNNAMED_1826 + '</th></tr></thead><tbody>';
      var crypto_currenciesList372 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen372 = crypto_currenciesList372.length;
      for (var crypto_currenciesIndex372 = 0; crypto_currenciesIndex372 < crypto_currenciesListLen372; crypto_currenciesIndex372++) {
        var crypto_currenciesData372 = crypto_currenciesList372[crypto_currenciesIndex372];
        var walletsList373 = crypto_currenciesData372['Wallets'];
        var walletsListLen373 = walletsList373.length;
        for (var walletsIndex373 = 0; walletsIndex373 < walletsListLen373; walletsIndex373++) {
          var walletsData373 = walletsList373[walletsIndex373];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData372['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData373['type']) + '</td><td class="broker-wallet">';
          if (crypto_currenciesData372['CurrencyCode'] == 'BTC') {
            switch (walletsData373['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://live.blockcypher.com/btc-testnet/address/' + soy.$$escapeHtml(walletsData373['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData373['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData373['address']) + '" target="_blank">' + soy.$$escapeHtml(walletsData373['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData373['address']);
          }
          output += '</td><td>';
          if (walletsData373['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1828 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1828;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1830 = goog.getMsg('No');
            output += MSG_UNNAMED_1830;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData373['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table>';
    }
    output += '<h4>' + MSG_UNNAMED_1832 + '</h4><iframe style="width:100%;height:400px;" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1834 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1836 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1838 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1834 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1836 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value="0" selected>' + MSG_UNNAMED_1838 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1840 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1842 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1844 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1840 + '</label><input name="token" id="id_input_google_authenticator" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1842 + '" label="' + MSG_UNNAMED_1844 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.SecondFactorTokenDialogContent = function(opt_data) {
  var output = '';
  /** @desc Placeholder for the code field on the second factor token dialog */
  var MSG_UNNAMED_1846 = goog.getMsg('eg. 5555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + soy.$$escapeHtml(opt_data.description) + '</label><input name="token" id="' + soy.$$escapeHtml(opt_data.id) + '_token" data-uniform-validators="required" label="' + MSG_UNNAMED_1846 + '" class="input-large" type="text" size="10"></div>';
  if (opt_data.askForTrust) {
    /** @desc Label on the two factor authenticatior */
    var MSG_UNNAMED_1848 = goog.getMsg('Trust this device for 30 days');
    output += '<div class="control-group"><label class="checkbox"><input type="checkbox" name="TrustedDevice">' + MSG_UNNAMED_1848 + '</label></div>';
  }
  output += '</fieldset></form>';
  return output;
};


bitex.templates.BrokerChangeEmailDialogContent = function(opt_data) {
  var output = '';
  /** @desc Warning label on the Broker change email dialog content */
  var MSG_UNNAMED_1850 = goog.getMsg('Warning');
  /** @desc Change email warning message on the broker change email dialog content */
  var MSG_UNNAMED_1852 = goog.getMsg('Authorizing the change of a user\'s email address is always dangerous. Hackers will try to social engineer you into changing a user\'s email address to one they have control over. Additionally a bad intentioned user can pretend to be the victim of a hacker and claim that he did not request the change in order to ask for reimbursement.');
  /** @desc change email label */
  var MSG_UNNAMED_1854 = goog.getMsg('New Email');
  /** @desc First label warning on broker change email */
  var MSG_UNNAMED_1856 = goog.getMsg('I verified the identity of the user who requested the change with a video conference.');
  /** @desc Second label warning on broker change email */
  var MSG_UNNAMED_1858 = goog.getMsg('I am certain that the user is not able to receive the emails sent by our service.');
  /** @desc Third label warning on broker change email */
  var MSG_UNNAMED_1860 = goog.getMsg('I take 100% responsibility of possible losses should this user turn out to be an impostor.');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="alert alert-warning"><strong>' + MSG_UNNAMED_1850 + '</strong> - ' + MSG_UNNAMED_1852 + '</div><div class="control-group"><label>' + MSG_UNNAMED_1854 + '</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_new_email" type="text" data-uniform-validators="validateEmail;required" size="10"></div><div class="control-group"><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_1"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_1">' + MSG_UNNAMED_1856 + '</label><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_2"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_2">' + MSG_UNNAMED_1858 + '</label><label class="checkbox"  for="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_3"><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_check_warning_3">' + MSG_UNNAMED_1860 + '</label></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1862 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1864 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1866 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1862 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1864 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1866 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1868 = goog.getMsg('Taker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1870 = goog.getMsg('Maker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1872 = goog.getMsg('Taker Sell fee');
  /** @desc Buy fee */
  var MSG_UNNAMED_1874 = goog.getMsg('Maker Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1868 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1870 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1872 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_sell_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1874 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList554 = opt_data.currencies;
  var currencyListLen554 = currencyList554.length;
  for (var currencyIndex554 = 0; currencyIndex554 < currencyListLen554; currencyIndex554++) {
    var currencyData554 = currencyList554[currencyIndex554];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1876 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData554)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1876 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData554) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1878 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData554) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData554) + '" class="icon-plus"/>' + MSG_UNNAMED_1878 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1880 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData554) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData554) + '" class="icon-minus"/>' + MSG_UNNAMED_1880 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1882 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1882 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc Secured with BitGO */
  var MSG_UNNAMED_1886 = goog.getMsg('Secured with');
  output += '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1884 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1884 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div><p class="text-center">' + MSG_UNNAMED_1886 + ' <a href="https://www.bitgo.com/wallet?utm_source=blinktrade&amp;utm_medium=bd" target="_blank"><img style="width: 85px;" src="https://www.bitgo.com/img/bitgo-logo-black.png"></a></p>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1888 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1888 + '</div>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1890 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1892 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1894 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1896 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1898 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1890 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1892 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1894 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1896 + '</h4>' + MSG_UNNAMED_1898 + '</div></div>';
  return output;
};


bitex.templates.InsufficientFundsContentDialog = function(opt_data) {
  var output = '';
  /** @desc Insufficient funds title */
  var MSG_UNNAMED_1900 = goog.getMsg('You don\'t have enough funds for this operation.');
  /** @desc Your account label on Insufficient Balance message */
  var MSG_UNNAMED_1902 = goog.getMsg('Your Account');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1904 = goog.getMsg('Your Orders');
  /** @desc Your orders label on Insufficient Balance message */
  var MSG_UNNAMED_1906 = goog.getMsg('Total available');
  output += '<div class="row-fluid"><p>' + MSG_UNNAMED_1900 + '</p><!-- ' + soy.$$escapeHtml(opt_data.currencyDescription) + ' --><table class="table table-bordered"><tr><td>' + MSG_UNNAMED_1902 + '</td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.depositFormattedBalance) ? soy.$$escapeHtml(opt_data.depositFormattedBalance) : '-') + '</span></td></tr><tr><td>' + MSG_UNNAMED_1904 + '</td><td><span class="bitex-model" data-model-key="locked_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.lockedFormattedBalance) ? soy.$$escapeHtml(opt_data.lockedFormattedBalance) : '-') + '</span></td></tr><tr style="font-weight: bolder"><td>' + MSG_UNNAMED_1906 + '</td><td><span class="bitex-model" data-model-key="available_formatted_balance_' + soy.$$escapeHtml(opt_data.balanceKey) + '" data-blink-class="balance-info-blink">' + ((opt_data.availableFormattedBalance) ? soy.$$escapeHtml(opt_data.availableFormattedBalance) : '-') + '</span></td></tr></table>';
  if (opt_data.lockedFormattedBalance) {
    /** @desc Insufficient funds instructions */
    var MSG_UNNAMED_1908 = goog.getMsg('Please either deposit funds or cancel some of your other orders.');
    output += '<p>' + MSG_UNNAMED_1908 + '</p>';
  }
  output += '</div>';
  return output;
};


bitex.templates.ConfirmOrderContentDialog = function(opt_data) {
  var output = '';
  /** @desc Confirmation order title */
  var MSG_UNNAMED_1910 = goog.getMsg('Confirm your order');
  /** @desc Price per bitcoin confirmation message */
  var MSG_UNNAMED_1916 = goog.getMsg('Price per bitcoin');
  /** @desc For a total message */
  var MSG_UNNAMED_1918 = goog.getMsg('For a total of');
  output += '<div class="row-fluid"><p>' + MSG_UNNAMED_1910 + '</p><table class="table table-bordered"><tr><td>';
  if (opt_data.side == '1') {
    /** @desc You are buying message */
    var MSG_UNNAMED_1912 = goog.getMsg('You are buying');
    output += MSG_UNNAMED_1912;
  } else {
    /** @desc You are selling message */
    var MSG_UNNAMED_1914 = goog.getMsg('You are selling');
    output += MSG_UNNAMED_1914;
  }
  output += '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.amount) + '</span></td></tr><tr><td>' + MSG_UNNAMED_1916 + '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.price) + '</span></td></tr><tr><td>' + MSG_UNNAMED_1918 + '</td><td><span class="bitex-model">' + soy.$$escapeHtml(opt_data.total) + '</span></td></tr></table></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1920 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1922 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1924 = goog.getMsg(' Did you understand? ');
  output += '<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center">' + MSG_UNNAMED_1920 + '</h3><h4 class="text-center">' + MSG_UNNAMED_1922 + '</h4><h3 class="text-center">' + MSG_UNNAMED_1924 + '</h3><br/><br/></div>';
  return output;
};


bitex.templates.ConfirmEmailSignupContentDialog = function(opt_data) {
  var output = '';
  /** @desc Confirm Email */
  var MSG_UNNAMED_1926 = goog.getMsg('Email: ');
  output += '<div class="row-fluid"><div class="control-group"><label for="email_confirm_field">' + soy.$$escapeHtml(opt_data.email) + '</label></div><div class="control-group"><label class="control-label" for="email_confirm_field">' + MSG_UNNAMED_1926 + '</label><div class="controls"><input type="text" id="id_email_confirm_field" /></div></div></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.BlankDepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true"  src="about:blank" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1928 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1930 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1932 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1934 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1928 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1930 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1932 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label net-amount">' + MSG_UNNAMED_1934 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1936 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1936 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (opt_data.type == 'withdrawal') {
    /** @desc Warning message when the user has unconfirmed deposits. */
    var MSG_UNNAMED_1938 = goog.getMsg('You can\'t withdraw funds from the exchange while you have unconfirmed deposits.');
    output += '<div class="alert alert-warning text-left bitex-model" data-model-action="show_element" data-model-key-list="HasAnyPosition" data-model-formula="HasAnyPosition" style="display:none;">' + MSG_UNNAMED_1938 + '</div>';
  }
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1940 = goog.getMsg('Method');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1940 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList831 = opt_data.methods;
      var methodListLen831 = methodList831.length;
      for (var methodIndex831 = 0; methodIndex831 < methodListLen831; methodIndex831++) {
        var methodData831 = methodList831[methodIndex831];
        output += '<option value="' + soy.$$escapeHtml(methodData831['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData831['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData831['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData831['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData831['description']) + '</option>';
      }
      output += '</select></div></div>';
    } else {
      var methodList852 = opt_data.methods;
      var methodListLen852 = methodList852.length;
      for (var methodIndex852 = 0; methodIndex852 < methodListLen852; methodIndex852++) {
        var methodData852 = methodList852[methodIndex852];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData852['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData852['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData852['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData852['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1942 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1942 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1944 = goog.getMsg(' Verify your account ');
        output += '<a href="" data-switch-view="verification">' + MSG_UNNAMED_1944 + '</a>';
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1946 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1946 + '</div>';
    }
  }
  var methodList897 = opt_data.methods;
  var methodListLen897 = methodList897.length;
  for (var methodIndex897 = 0; methodIndex897 < methodListLen897; methodIndex897++) {
    var methodData897 = methodList897[methodIndex897];
    if (opt_data.force_method) {
      if (methodData897['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1948 = goog.getMsg('Amount');
          output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1948 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData897['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData897['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData897['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input-small" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount"></div>';
          if (methodData897['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<div><em><small>';
            if (methodData897['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1950 = goog.getMsg(
                  ' Available: {$xxx}',
                  {'xxx': soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1950 + '<br>';
            }
            if (methodData897['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1952 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1952;
            }
            output += '</small></em></div>';
          }
          output += '</div></div>';
        }
        var fieldList951 = methodData897['fields'];
        var fieldListLen951 = fieldList951.length;
        for (var fieldIndex951 = 0; fieldIndex951 < fieldListLen951; fieldIndex951++) {
          var fieldData951 = fieldList951[fieldIndex951];
          output += (fieldData951['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData951['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData951['validator']) + '" type="' + soy.$$escapeHtml(fieldData951['type']) + '" name="' + soy.$$escapeHtml(fieldData951['name']) + '" label="' + soy.$$escapeHtml(fieldData951['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData951['value']) + '"/></div></div>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1954 = goog.getMsg('Fees:');
          output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData897['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData897['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData897['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1954 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + ' ><label class="control-label net-amount">' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData897['disclaimer']) + '</label></div></div>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData897['method'] + '_' + opt_data.percentFeeID, percentFee: methodData897['percent_fee'], fixedFeeID: methodData897['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData897['fixed_fee'], totalFeesID: methodData897['method'] + '_' + opt_data.totalFeesID, netValueID: methodData897['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1962 = goog.getMsg('Fees:');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData897['method']) + '" style="' + ((opt_data.methods.length > 1) ? 'display:none;' : '') + '">';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1956 = goog.getMsg('Amount');
        output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1956 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData897['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData897['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData897['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + ((! (methodIndex897 == 0)) ? 'disabled' : '') + '></div>';
        if (methodData897['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<div><em><small>';
          if (methodData897['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1958 = goog.getMsg(
                ' Maximum: {$xxx}',
                {'xxx': soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1958 + '<br>';
          }
          if (methodData897['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1960 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData897['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1960;
          }
          output += '</small></em></div>';
        }
        output += '</div></div>';
      }
      output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData897['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData897['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData897['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1962 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="control-label net-amount">' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label net-amount broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData897['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
      var fieldList1119 = methodData897['fields'];
      var fieldListLen1119 = fieldList1119.length;
      for (var fieldIndex1119 = 0; fieldIndex1119 < fieldListLen1119; fieldIndex1119++) {
        var fieldData1119 = fieldList1119[fieldIndex1119];
        output += (fieldData1119['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData1119['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData1119['validator']) + '" type="' + soy.$$escapeHtml(fieldData1119['type']) + '" name="' + soy.$$escapeHtml(fieldData1119['name']) + '" label="' + soy.$$escapeHtml(fieldData1119['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData1119['value']) + '"' + ((! (methodIndex897 == 0)) ? 'disabled' : '') + ' /></div></div>' : '';
      }
      output += '</div>';
    }
  }
  output += '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1964 = goog.getMsg('Taker Buy Fee');
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1968 = goog.getMsg('Maker Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1972 = goog.getMsg('Taker Sell Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1976 = goog.getMsg('Maker Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1964 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_buy_fee) {
    output += soy.$$escapeHtml(opt_data.taker_buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1966 = goog.getMsg('-');
    output += MSG_UNNAMED_1966;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1968 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1970 = goog.getMsg('-');
    output += MSG_UNNAMED_1970;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1972 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_sell_fee) {
    output += soy.$$escapeHtml(opt_data.taker_sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1974 = goog.getMsg('-');
    output += MSG_UNNAMED_1974;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1976 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1978 = goog.getMsg('-');
    output += MSG_UNNAMED_1978;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList1187 = opt_data.currencies;
  var currencyListLen1187 = currencyList1187.length;
  for (var currencyIndex1187 = 0; currencyIndex1187 < currencyListLen1187; currencyIndex1187++) {
    var currencyData1187 = currencyList1187[currencyIndex1187];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1980 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData1187.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1980 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData1187.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData1187.balance) ? soy.$$escapeHtml(currencyData1187.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1982 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1984 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1986 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1988 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1990 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1992 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value="0" ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1982 + '</option><option value="1" ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1984 + '</option><option value="2" ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1986 + '</option><option value="3" ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1988 + '</option><option value="4" ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1990 + '</option><option value="5" ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1992 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1994 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1996 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1994 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1996 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1998 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_2000 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1998 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_2000 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_2002 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_2004 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_2002 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_2004 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_2006 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_2006 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderEmailTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['EmailTwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_2008 = goog.getMsg('Enabled');
    /** @desc label on overview header */
    var MSG_UNNAMED_2010 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_2008 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="DISABLE_EMAIL_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_2010 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_2012 = goog.getMsg('Disabled');
    /** @desc label on overview header */
    var MSG_UNNAMED_2014 = goog.getMsg('Enable');
    output += '<span class="label label-important">' + MSG_UNNAMED_2012 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="ENABLE_EMAIL_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_2014 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_2016 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2018 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2020 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2022 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2024 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2026 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2028 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2030 = goog.getMsg('Has two step authentication');
  /** @desc label on overview header */
  var MSG_UNNAMED_2032 = goog.getMsg('Has two step authentication on email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2034 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_2036 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_2016 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2018 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2020 + '</strong></td><td><span id="account-overview-email">' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</span>&nbsp;<button data-action="CHANGE_EMAIL" class="btn btn-warning btn-mini">Change</button></td></tr><tr><td><strong>' + MSG_UNNAMED_2022 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2024 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2026 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2028 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2030 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2032 + '</strong></td><td class="account-overview-val account-overview-two-factors-email" >' + bitex.templates.AccountOverviewHeaderEmailTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2034 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_2036 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.CustomerDetailButton = function(opt_data) {
  var output = '';
  /** @desc details */
  var MSG_UNNAMED_2038 = goog.getMsg('details');
  output += '<button class="btn btn-mini btn-primary btn-deposit" data-row="' + soy.$$escapeHtml(opt_data.dataRow) + '">' + MSG_UNNAMED_2038 + '</button>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_2040 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_2040 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.OrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Order Entry */
  var MSG_UNNAMED_2042 = goog.getMsg('Amount:');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_2044 = goog.getMsg('Price per ');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_2046 = goog.getMsg('Total:');
  /** @desc 'Fee (optional):' label in Order Entry */
  var MSG_UNNAMED_2048 = goog.getMsg('Fee (optional):');
  /** @desc 'Client ID' label in Order Entry */
  var MSG_UNNAMED_2050 = goog.getMsg('Client ID');
  output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="well span6 order-entry"><input type="hidden" name="symbol" class="order-entry-symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input type="hidden" name="side" class="order-entry-side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input type="hidden" name="type" class="order-entry-type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input type="hidden" name="broker_id" class="order-entry-broker-id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_2042 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-amount" type="text" value="" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_2044 + '<span class="order-entry-amount-sign">฿</span>:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-price" type="text" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"><span>' + MSG_UNNAMED_2046 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-total" type="text" required/></div></div></div><div class="row-fluid" ' + ((opt_data.hide_fee) ? 'style="display: none;"' : '') + ' ><div class="span5 order-entry-label"> <span>' + MSG_UNNAMED_2048 + '</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">฿</span><input class="input-block-level order-entry-fee" type="text" value="0" /></div></div></div><div class="row-fluid"><div class="span5"><input class="input-block-level order-entry-client-id" label="' + MSG_UNNAMED_2050 + '" ' + ((opt_data.hide_client_id) ? 'style="display:none"' : '') + ' /></div><div class="span5"><button class="btn ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution order-entry-action">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_2052 = goog.getMsg('BUY');
    output += MSG_UNNAMED_2052;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_2054 = goog.getMsg('SELL');
    output += MSG_UNNAMED_2054;
  }
  output += '</button></div></div></div>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1464 = opt_data.button_filters;
    var buttonListLen1464 = buttonList1464.length;
    for (var buttonIndex1464 = 0; buttonIndex1464 < buttonListLen1464; buttonIndex1464++) {
      var buttonData1464 = buttonList1464[buttonIndex1464];
      output += (buttonIndex1464 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1464['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1472 = opt_data.button_filters;
    var buttonListLen1472 = buttonList1472.length;
    for (var buttonIndex1472 = 0; buttonIndex1472 < buttonListLen1472; buttonIndex1472++) {
      var buttonData1472 = buttonList1472[buttonIndex1472];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1472['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1472['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
