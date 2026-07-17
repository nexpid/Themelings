// app/modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot6 = var7;
    var4 = var4.useRef;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useArchiveOrDelete(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var7 = arg2;
            var12 = arg3;
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var12;
            var1 = arg4;
            var _closure2_slot3 = var1;
            var1 = function _handleArchiveOrDelete() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot4;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var2 = 6;
                            var2 = var10[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var5 = var7.confirm;
                            var2 = {};
                            var8 = _closure2_slot4;
                            var2['title'] = var8;
                            var8 = _closure2_slot5;
                            var2['body'] = var8;
                            var8 = _closure2_slot6;
                            var2['confirmText'] = var8;
                            var9 = _closure1_slot0;
                            var8 = 7;
                            var8 = var10[var8];
                            var8 = var9.bind(var3)(var8);
                            var8 = var8.ButtonColors;
                            var8 = var8.RED;
                            var2['confirmColor'] = var8;
                            var2 = var5.bind(var7)(var2);
                            SaveGenerator(address=113);
case 4:
                            return var2;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var5 = _closure2_slot12;
                            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var5 = _closure2_slot11;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 8;
                            var6 = var8[var6];
                            var10 = var7.bind(var3)(var6);
                            var9 = _closure2_slot1;
                            var7 = null;
                            var8 = var7 != var9;
                            var6 = 'group listing id cannot be null';
                            var6 = var10.bind(var3)(var8, var6);
                            if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var8 = _closure2_slot9;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var5 = var8.bind(var3)(var6, var9, var5);
                            SaveGenerator(address=210);
case 14:
                            return var5;
case 15:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 16:
                            return var5;
case 12:
                            var8 = _closure2_slot8;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var5 = var8.bind(var3)(var6, var9, var5);
                            SaveGenerator(address=242);
case 17:
                            return var5;
case 18:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                            var6 = _closure2_slot3;
                            if(!(var7 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 21:
                            var7 = _closure2_slot3;
                            var6 = var7.goBack;
                            var6 = var6.bind(var7)();
                            _fun0002_ip = 8; continue _fun0002;
case 19:
                            return var5;
case 10:
                            var6 = _closure2_slot7;
                            var5 = _closure2_slot2;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure2_slot3;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 22:
                            var5 = _closure2_slot3;
                            var4 = var5.goBack;
                            var4 = var4.bind(var5)();
case 8:
                            return var3;
case 6:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot14 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot14 = var1;
            var2 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = 3;
            var3 = var13[var1];
            var10 = undefined;
            var5 = var2.bind(var10)(var3);
            var3 = var5.useSubscriptionListing;
            var9 = var3.bind(var5)(var12);
            var11 = _closure1_slot2;
            var5 = 4;
            var3 = var13[var5];
            var6 = var11.bind(var10)(var3);
            var3 = var6.useEditStateIds;
            var3 = var3.bind(var6)(var7, var14);
            var3 = var3.removeEditStateId;
            var _closure2_slot7 = var3;
            var3 = var13[var1];
            var6 = var2.bind(var10)(var3);
            var3 = var6.useDeleteSubscriptionListing;
            var7 = var3.bind(var6)();
            var3 = var7.submitting;
            var6 = var7.error;
            var7 = var7.deleteSubscriptionListing;
            var _closure2_slot8 = var7;
            var1 = var13[var1];
            var2 = var2.bind(var10)(var1);
            var1 = var2.useArchiveSubscriptionListing;
            var7 = var1.bind(var2)();
            var2 = var7.submitting;
            var1 = var7.error;
            var7 = var7.archiveSubscriptionListing;
            var _closure2_slot9 = var7;
            var14 = _closure1_slot7;
            var7 = null;
            var14 = var14.bind(var10)(var7);
            var _closure2_slot10 = var14;
            var5 = var13[var5];
            var11 = var11.bind(var10)(var5);
            var5 = var11.useName;
            var12 = var5.bind(var11)(var12);
            var11 = _closure1_slot5;
            var5 = 1;
            var11 = var11.bind(var10)(var12, var5);
            var5 = 0;
            var18 = var11[var5];
            var5 = var7 == var9;
            var11 = undefined;
            if(var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var9.archived;
case 23:
            var5 = true;
            var5 = var5 === var11;
            var _closure2_slot11 = var5;
            var9 = var10 === var9;
            var _closure2_slot12 = var9;
            if(!(var7 != var6)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var1 = var6;
case 25:
            var _closure2_slot13 = var1;
            if(var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var9) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 5;
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var12 = var5.intl;
            var7 = var12.formatToPlainString;
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var6 = var5.OuuIOY;
            var5 = {};
            var5['tierName'] = var18;
            var7 = var7.bind(var12)(var6, var5);
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var12 = var5.intl;
            var6 = var12.string;
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.RL0wjm;
            var6 = var6.bind(var12)(var5);
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var13 = var5.intl;
            var12 = var13.string;
            var5 = var15[var11];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5["5/Jeg2"];
            var5 = var12.bind(var13)(var5);
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.N5AIuE;
            var12 = var13.bind(var16)(var12);
            var _closure2_slot4 = var12;
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.TEKiiP;
            var12 = var13.bind(var16)(var12);
            var _closure2_slot5 = var12;
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var10)(var11);
            var11 = var11.t;
            var11 = var11["170XOL"];
            var11 = var12.bind(var13)(var11);
            var _closure2_slot6 = var11;
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var15 = _closure1_slot0;
            var11 = _closure1_slot3;
            var17 = 5;
            var12 = var11[var17];
            var12 = var15.bind(var10)(var12);
            var16 = var12.intl;
            var14 = var16.formatToPlainString;
            var12 = var11[var17];
            var12 = var15.bind(var10)(var12);
            var12 = var12.t;
            var13 = var12.x2qwWL;
            var12 = {};
            var12['tierName'] = var18;
            var12 = var14.bind(var16)(var13, var12);
            var13 = var11[var17];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var17];
            var11 = var15.bind(var10)(var11);
            var11 = var11.t;
            var11 = var11.GMtG6p;
            var11 = var13.bind(var14)(var11);
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var10)(var13);
            var13 = var13.t;
            if(var9) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = var13.Y4KjUN;
            var9 = var14.bind(var15)(var9);
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var13 = var13.DHWKJS;
            var9 = var14.bind(var15)(var13);
case 33:
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var14 = var14.t;
            var14 = var14["4H6RLl"];
            var14 = var15.bind(var18)(var14);
            _closure2_slot4 = var14;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var14 = var14.t;
            var14 = var14.uG6b1w;
            var14 = var15.bind(var18)(var14);
            _closure2_slot5 = var14;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var10)(var13);
            var13 = var13.t;
            var13 = var13.JoCdPC;
            var13 = var14.bind(var15)(var13);
            _closure2_slot6 = var13;
            var5 = var9;
            var7 = var12;
            var6 = var11;
case 30:
            var9 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var5 = var1.current;
                    var4 = _closure2_slot13;
                    var1 = undefined;
                    var3 = undefined;
                    if(!(var5 !== var4)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var3 = _closure2_slot13;
case 34:
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var2 = _closure2_slot10;
                    var2['current'] = var3;
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 9;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.presentFailedToast;
                    var7 = _closure1_slot0;
                    var2 = 5;
                    var5 = var8[var2];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.R0RpRX;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = {};
            var1['headerText'] = var7;
            var1['buttonText'] = var6;
            var1['descriptionText'] = var5;
            var4 = function handleArchiveOrDelete() {
                var1 = undefined;
                var4 = _closure2_slot14;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['handleArchiveOrDelete'] = var4;
            var1['deleting'] = var3;
            var1['archiving'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();