// app/modules/links/native/handleContentLinking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleContentLinking() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = var2.guildId;
                    var9 = var2.channelId;
                    var7 = var2.navigationSettings;
                    var13 = var2.messageId;
                    var8 = var2.summaryId;
                    var5 = undefined;
                    SaveGenerator(address=46);
case 4:
                    return var5;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 3;
                    var3 = var10[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var4 = var7.safe;
                    var3 = var7.navigationReplace;
                    var12 = var5 === var3;
                    if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var12 = var3;
case 8:
                    var10 = var7.waitForConnection;
                    var3 = var5 === var10;
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = var10;
case 10:
                    var11 = var7.skipMessageFetch;
                    if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure1_slot6;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var3 = _closure1_slot6;
                    var3 = var3.bind(var5)();
case 14:
                    var3 = global;
                    var10 = var3.Promise;
                    var3 = var10.prototype;
                    var7 = Object.create(var3, {constructor: {value: var10}});
                    var19 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var3 = function o() {
                            var3 = _closure5_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'superseded';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        _closure1_slot6 = var3;
                        var3 = _closure1_slot4;
                        var1 = undefined;
                        var2 = function() {
                            var1 = null;
                            _closure1_slot6 = var1;
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var20 = var7;
                    var3 = new var20[var10](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var7;
                    SaveGenerator(address=194);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 12:
                    if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var15 = var7.bind(var5)(var4);
                    var10 = var15.transitionTo;
                    var7 = _closure1_slot5;
                    var4 = var7.CHANNEL;
                    var7 = var4.bind(var7)(var14, var9, var13);
                    var4 = {};
                    var4['navigationReplace'] = var12;
                    var16 = true;
                    var4['openChannel'] = var16;
                    var4['skipMessageFetch'] = var11;
                    var4 = var10.bind(var15)(var7, var4);
                    _fun0001_ip = 21; continue _fun0001;
case 19:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var10 = var7.bind(var5)(var4);
                    var7 = _closure1_slot5;
                    var4 = var7.CHANNEL;
                    var7 = var4.bind(var7)(var14, var9, var13);
                    var4 = {};
                    var4['navigationReplace'] = var12;
                    var12 = true;
                    var4['openChannel'] = var12;
                    var4['skipMessageFetch'] = var11;
                    var4 = var10.bind(var5)(var7, var4);
                    SaveGenerator(address=342);
case 22:
                    return var4;
case 23:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 21:
                    var10 = null;
                    var7 = var10 != var9;
                    if(!var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var7 = var10 != var8;
case 25:
                    if(!var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 6;
                    var6 = var10[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.setSelectedSummary;
                    var6 = var6.bind(var7)(var9, var8);
case 27:
                    return var5;
case 24:
                    return var4;
case 18:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot5 = var4;
    var4 = null;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleContentLinking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleContentLinking() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();