// app/modules/share/native/ShareScreenModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'ShareScreenModal';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = function onClose() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot8;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/ShareScreenModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ShareScreenModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.text;
            var _closure2_slot0 = var10;
            var8 = var2.channelId;
            var _closure2_slot1 = var8;
            var16 = var2.shareId;
            var _closure2_slot2 = var16;
            var2 = var2.attachmentManifest;
            var _closure2_slot3 = var2;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var13 = _closure1_slot5;
            var6 = var13.useState;
            var3 = null;
            var6 = var6.bind(var13)(var3);
            var14 = _closure1_slot4;
            var12 = 2;
            var6 = var14.bind(var4)(var6, var12);
            var7 = 0;
            var9 = var6[var7];
            var _closure2_slot4 = var9;
            var11 = 1;
            var6 = var6[var11];
            var _closure2_slot5 = var6;
            var15 = var13.useEffect;
            var6 = new Array(2);
            var6[0] = var16;
            var6[1] = var2;
            var2 = function() {
                var2 = function _fetchAttachments() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var3 = _closure2_slot3;
                                if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6: // try_start_0
                                var3 = _closure1_slot6;
                                var7 = var3.ShareManager;
                                var6 = var7.sharedAttachments;
                                var5 = _closure2_slot2;
                                var3 = _closure2_slot3;
                                var3 = var6.bind(var7)(var5, var3);
                                SaveGenerator(address=67);
case 7:
                                return var3;
case 8:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                                var4 = _closure2_slot5;
                                var4 = var4.bind(var2)(var3);
case 11: // try_end0
                                _fun0002_ip = 4; continue _fun0002;
case 9:
                                return var3;
case 12: // catch_target0
                                CatchBlockStart(arg_register=5);
                                var5 = _closure1_slot10;
                                var4 = var5.error;
                                var3 = 'Error fetching attachments:';
                                var3 = var4.bind(var5)(var3, var6);
case 4:
                                return var2;
case 2:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function fetchAttachments() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var2 = var15.bind(var13)(var2, var6);
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 9;
            var2 = var15[var2];
            var16 = var6.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var15.bind(var16)(var6, var2);
            var _closure2_slot6 = var2;
            var6 = var13.useState;
            var6 = var6.bind(var13)(var3);
            var6 = var14.bind(var4)(var6, var12);
            var7 = var6[var7];
            var6 = var6[var11];
            var _closure2_slot7 = var6;
            var12 = var13.useEffect;
            var11 = new Array(2);
            var11[0] = var8;
            var11[1] = var2;
            var6 = function() {
                var2 = function _fetchChannel() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 3:
                                var2 = _closure2_slot1;
                                var4 = null;
                                if(!(var4 != var2)) { _fun0003_ip = 14; continue _fun0003 }
case 5:
                                var2 = _closure2_slot6;
                                if(!(var4 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 6: // try_start_0
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 10;
                                var2 = var4[var2];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var2);
                                var5 = var6.fetchChannel;
                                var2 = _closure2_slot1;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=72);
case 15:
                                return var2;
case 16:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                                var3 = _closure2_slot7;
                                var3 = var3.bind(var4)(var2);
case 12: // try_end0
                                _fun0003_ip = 14; continue _fun0003;
case 17:
                                return var2;
case 19: // catch_target0
                                CatchBlockStart(arg_register=4);
                                var4 = _closure1_slot10;
                                var3 = var4.error;
                                var2 = 'Error fetching channel:';
                                var2 = var3.bind(var4)(var2, var5);
case 14:
                                var2 = undefined;
                                return var2;
case 13:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function fetchChannel() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var6 = var12.bind(var13)(var6, var11);
            if(!(var3 != var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var2;
case 20:
            _closure2_slot8 = var7;
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(4);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1['text'] = var3;
                    var3 = _closure2_slot4;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = new Array(0);
                    _fun0004_ip = 24; continue _fun0004;
case 22:
                    var3 = _closure2_slot4;
case 24:
                    var1['attachments'] = var3;
                    var3 = _closure2_slot8;
                    if(!(var5 != var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var3 = _closure2_slot8;
                    var6 = var3.type;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ChannelTypes;
                    var4 = var4.DM;
                    if(!(var6 === var4)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var4 = _closure2_slot8;
                    if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var6 = 'recipients';
                    var6 = var6 in var4;
                    if(!var6) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                    var6 = global;
                    var7 = var6.Array;
                    var6 = var7.isArray;
                    var4 = var4.recipients;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 29:
                    var6 = _closure2_slot8;
                    var4 = var6;
                    if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var7 = 'recipient';
                    var4 = var7 in var6;
case 33:
                    if(!var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var7 = var6.recipient;
                    var6 = 'id';
                    var4 = var6 in var7;
case 35:
                    if(!var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var4 = _closure2_slot8;
                    var4 = var4.recipient;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var3 = var4.id;
case 39:
                    var1['targetUserId'] = var3;
                    _fun0004_ip = 37; continue _fun0004;
case 32:
                    var3 = _closure2_slot8;
                    var4 = var3.recipients;
                    var3 = 0;
                    var3 = var4[var3];
                    var1['targetUserId'] = var3;
case 37:
                    return var1;
case 27:
                    var2 = _closure2_slot1;
                    var1['targetChannelId'] = var2;
                    return var1;
case 25:
                    return var1;
                }
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['sharedContent'] = var6;
            var5 = _closure1_slot11;
            var1['onClose'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();