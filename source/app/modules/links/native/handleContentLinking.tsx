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
                    var13 = var2.guildId;
                    var8 = var2.channelId;
                    var10 = var2.navigationSettings;
                    var12 = var2.messageId;
                    var7 = var2.summaryId;
                    var4 = undefined;
                    SaveGenerator(address=46);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 3;
                    var3 = var9[var3];
                    var11 = var6.bind(var4)(var3);
                    var3 = var11.popAll;
                    var3 = var3.bind(var11)();
                    var3 = 4;
                    var3 = var9[var3];
                    var9 = var6.bind(var4)(var3);
                    var6 = var9.getConfig;
                    var3 = {};
                    var11 = 'handleContentLinking';
                    var3['location'] = var11;
                    var3 = var6.bind(var9)(var3);
                    var9 = var3.enabled;
                    var3 = var10.safe;
                    var6 = var10.navigationReplace;
                    var11 = var4 === var6;
                    if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var6;
case 8:
                    var14 = var10.waitForConnection;
                    var6 = var4 === var14;
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var14;
case 10:
                    var10 = var10.skipMessageFetch;
                    var6 = !var6;
                    if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var9;
case 12:
                    if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var9 = _closure1_slot6;
                    var6 = null;
                    if(!(var6 != var9)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)();
case 16:
                    var6 = global;
                    var14 = var6.Promise;
                    var6 = var14.prototype;
                    var9 = Object.create(var6, {constructor: {value: var14}});
                    var18 = function(arg1, arg2) {
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
                    var19 = var9;
                    var6 = new var19[var14](var18, var17);
                    var6 = var6 instanceof Object ? var6 : var9;
                    SaveGenerator(address=243);
case 18:
                    return var6;
case 19:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 20:
                    return var6;
case 14:
                    if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 6;
                    var3 = var9[var3];
                    var14 = var6.bind(var4)(var3);
                    var9 = var14.transitionTo;
                    var6 = _closure1_slot5;
                    var3 = var6.CHANNEL;
                    var6 = var3.bind(var6)(var13, var8, var12);
                    var3 = {};
                    var3['navigationReplace'] = var11;
                    var15 = true;
                    var3['openChannel'] = var15;
                    var3['skipMessageFetch'] = var10;
                    var3 = var9.bind(var14)(var6, var3);
                    _fun0001_ip = 23; continue _fun0001;
case 21:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var9 = var6.bind(var4)(var3);
                    var6 = _closure1_slot5;
                    var3 = var6.CHANNEL;
                    var6 = var3.bind(var6)(var13, var8, var12);
                    var3 = {};
                    var3['navigationReplace'] = var11;
                    var11 = true;
                    var3['openChannel'] = var11;
                    var3['skipMessageFetch'] = var10;
                    var3 = var9.bind(var4)(var6, var3);
                    SaveGenerator(address=391);
case 24:
                    return var3;
case 25:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 26; continue _fun0001 }
case 23:
                    var9 = null;
                    var6 = var9 != var8;
                    if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var6 = var9 != var7;
case 27:
                    if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 7;
                    var5 = var9[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.setSelectedSummary;
                    var5 = var5.bind(var6)(var8, var7);
case 29:
                    return var4;
case 26:
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
    var4 = 8;
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