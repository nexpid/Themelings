// app/modules/auth/native/components/MFA.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleFinish(arg1) {
        var1 = arg1;
        var4 = var1.mfaType;
        var6 = var1.data;
        var5 = var1.ticket;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.loginMFAv2;
        var1 = {};
        var1['code'] = var6;
        var1['ticket'] = var5;
        var1['mfaType'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function statesAreEqual(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.isEqual;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {'flex': 1, 'position': 'relative'};
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/MFA.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedMFA() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var6 = var1.inContainer;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            _closure2_slot0 = var1;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1;
case 4:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var12 = var2.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var1;
            var13 = _closure1_slot7;
            var15 = function() {
                var1 = {};
                var3 = _closure1_slot3;
                var2 = var3.getMFATicket;
                var2 = var2.bind(var3)();
                var1['ticket'] = var2;
                var2 = var3.getMFAMethods;
                var2 = var2.bind(var3)();
                var1['methods'] = var2;
                return var1;
            };
            var14 = new Array(0);
            var17 = var12;
            var16 = var10;
            var8 = var17[var11](var16, var15, var14, var13, var12);
            var3 = _closure1_slot4;
            var1 = 8;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.MFAModal;
            var1 = {};
            var1['mfaChallenge'] = var8;
            var8 = _closure1_slot6;
            var1['finish'] = var8;
            var5 = function handleOnClose() {
                var2 = _closure2_slot0;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1['handleOnClose'] = var5;
            var1['ignoreKeyboard'] = var6;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot5;
case 6:
            var1['containerStyle'] = var5;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = 0;
case 8:
            var1['headerStatusBarHeight'] = var5;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isAndroid;
            var9 = var9.bind(var10)();
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var11 = 10;
            var10 = var10[var11];
            var10 = var12.bind(var4)(var10);
            var10 = var10.spacing;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var10.PX_16;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var9 = var10.PX_8;
case 14:
            var8['paddingLeft'] = var9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var10.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var8['paddingTop'] = var9;
            var5 = var8;
case 10:
            var1['headerLeftContainerStyle'] = var5;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = {};
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 10;
            var10 = var9[var7];
            var10 = var8.bind(var4)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var6['paddingRight'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var6['paddingTop'] = var7;
            var7 = 0;
            var6['marginLeft'] = var7;
            var5 = var6;
case 15:
            var1['headerRightContainerStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();