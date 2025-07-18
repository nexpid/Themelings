// app/utils/ValidationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
    var _closure1_slot0 = var2;
    var2 = /^((https:\\/\\/)?(discord\.gg\\/)|(discord\.com\\/)(invite\\/)?)?[A-Za-z0-9]{8,8}$/;
    var _closure1_slot1 = var2;
    var2 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    var _closure1_slot2 = var2;
    var2 = /^(.*)#[0-9]{1,5}$/;
    var _closure1_slot3 = var2;
    var2 = /^(https:\\/\\/)?(discord\.com\\/discovery\\/game\\/)([0-9-]+)\\/?/;
    var _closure1_slot4 = var2;
    var2 = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'];
    var _closure1_slot5 = var2;
    var2 = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
    var _closure1_slot6 = var2;
    var2 = {};
    var4 = function isEmail(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isEmail'] = var4;
    var4 = function isInvite(arg1) {
        var3 = _closure1_slot1;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isInvite'] = var4;
    var4 = function isPhoneNumber(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isPhoneNumber'] = var4;
    var4 = function isUserTagLike(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot3;
            var4 = var5.exec;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 41; continue _fun0001 }
 29:
            var5 = var4.length;
            var3 = 1;
            if(!(!(var5 > var3))) { _fun0001_ip = 45; continue _fun0001 }
 41:
            var5 = false;
            return var5;
 45:
            var4 = var4[var3];
            var _closure2_slot0 = var4;
            var5 = _closure1_slot5;
            var3 = var5.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var5)(var1);
            var3 = _closure1_slot6;
            var2 = var3.includes;
            var2 = var2.bind(var3)(var4);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 96; continue _fun0001 }
 93:
            var1 = !var2;
 96:
            return var1;
        }
    };
    var2['isUserTagLike'] = var4;
    var1 = function isDiscoveryLink(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isDiscoveryLink'] = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ValidationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();