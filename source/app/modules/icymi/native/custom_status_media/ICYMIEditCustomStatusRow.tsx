// app/modules/icymi/native/custom_status_media/ICYMIEditCustomStatusRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/custom_status_media/ICYMIEditCustomStatusRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomStatusEntryRow() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 5;
            var1 = var4[var8];
            var5 = undefined;
            var9 = var3.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var9)(var6, var1);
            var1 = 6;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.CustomStatusSetting;
            var1 = var3.useSetting;
            var12 = var1.bind(var3)();
            var _closure2_slot0 = var12;
            var1 = null;
            var7 = var1 != var12;
            if(!var7) { _fun0001_ip = 108; continue _fun0001 }
 98:
            var3 = var12.createdAtMs;
            var7 = var1 != var3;
 108:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = var4[var8];
            var14 = var6.bind(var5)(var3);
            var11 = var14.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var11.bind(var14)(var9, var3);
            var _closure2_slot1 = var3;
            var4 = var4[var8];
            var9 = var6.bind(var5)(var4);
            var8 = var9.useStateFromStoresArray;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getCurrentStatusAttachments;
                    var1 = global;
                    var5 = var1.Number;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var8 = var1 == var4;
                    var4 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 53; continue _fun0002 }
 43:
                    var7 = _closure2_slot0;
                    var6 = var7.createdAtMs;
 53:
                    var7 = var1 != var6;
                    var1 = 0;
                    if(!var7) { _fun0002_ip = 65; continue _fun0002 }
 62:
                    var1 = var6;
 65:
                    var1 = var5.bind(var4)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var6, var4);
            var _closure2_slot2 = var9;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var4 = new Array(5);
            var4[0] = var9;
            var11 = var1 == var12;
            var9 = undefined;
            if(var11) { _fun0001_ip = 235; continue _fun0001 }
 229:
            var9 = var12.emojiId;
 235:
            var4[1] = var9;
            var11 = var1 == var12;
            var9 = undefined;
            if(var11) { _fun0001_ip = 254; continue _fun0001 }
 248:
            var9 = var12.emojiName;
 254:
            var4[2] = var9;
            var11 = var1 == var12;
            var9 = undefined;
            if(var11) { _fun0001_ip = 272; continue _fun0001 }
 267:
            var9 = var12.text;
 272:
            var4[3] = var9;
            var4[4] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var2 = 'custom_status_extra';
                    var1['type'] = var2;
                    var3 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var3;
                    var6 = undefined;
                    if(var4) { _fun0003_ip = 39; continue _fun0003 }
 30:
                    var4 = _closure2_slot0;
                    var6 = var4.text;
 39:
                    var7 = var5 != var6;
                    var4 = '';
                    if(!var7) { _fun0003_ip = 53; continue _fun0003 }
 50:
                    var4 = var6;
 53:
                    var1['status'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var5 == var4;
                    var6 = undefined;
                    if(var4) { _fun0003_ip = 80; continue _fun0003 }
 70:
                    var4 = _closure2_slot0;
                    var6 = var4.emojiId;
 80:
                    var7 = var5 != var6;
                    var4 = undefined;
                    if(!var7) { _fun0003_ip = 92; continue _fun0003 }
 89:
                    var4 = var6;
 92:
                    var1['emoji_id'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var5 == var4;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 120; continue _fun0003 }
 110:
                    var4 = _closure2_slot0;
                    var3 = var4.emojiName;
 120:
                    var1['emoji_name'] = var3;
                    var3 = _closure2_slot1;
                    var3 = !var3;
                    var1['emoji_animated'] = var3;
                    var2 = _closure2_slot2;
                    var1['attachments'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var3, var4);
            var8 = _closure1_slot3;
            var9 = var8.useCallback;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var4 = var7[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var4);
                    var6 = var8.trackItemInteraction;
                    var5 = 'edit_custom_status_row';
                    var4 = 'press_new_custom_status';
                    var4 = var6.bind(var8)(var5, var5, var4);
                    var4 = _closure1_slot1;
                    var2 = 8;
                    var2 = var7[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.pushLazy;
                    var2 = 10;
                    var2 = var7[var2];
                    var8 = var3.bind(var1)(var2);
                    var2 = 9;
                    var4 = var7[var2];
                    var2 = var7.paths;
                    var4 = var8.bind(var1)(var4, var2);
                    var2 = 11;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var3 = undefined;
                    if(!var2) { _fun0004_ip = 142; continue _fun0004 }
 128:
                    var2 = {};
                    var7 = 'modal';
                    var2['presentation'] = var7;
                    var3 = var2;
 142:
                    var10 = 'EditCustomStatusMediaModal';
                    var13 = var6;
                    var12 = var4;
                    var11 = undefined;
                    var9 = var3;
                    var2 = var13[var5](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var3 = new Array(0);
            var9 = var9.bind(var8)(var4, var3);
            var4 = var8.useCallback;
            var3 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var3 = var8[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var3);
                var5 = var6.trackItemInteraction;
                var4 = 'edit_custom_status_row';
                var3 = 'press_clear_custom_status';
                var3 = var5.bind(var6)(var4, var4, var3);
                var3 = _closure1_slot1;
                var2 = 12;
                var2 = var8[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = 13;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 14;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.YdUwBQ;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var8 = var4.bind(var8)(var3, var2);
            var2 = var1 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 505; continue _fun0001 }
 353:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = 'newStatus';
            if(!var7) { _fun0001_ip = 438; continue _fun0001 }
 388:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var5)(var13);
            var13 = var14.fromTimestamp;
            var15 = global;
            var15 = var15.Number;
            var12 = var12.createdAtMs;
            var12 = var15.bind(var5)(var12);
            var11 = var13.bind(var14)(var12);
 438:
            var2['id'] = var11;
            var10 = var10.id;
            var2['userId'] = var10;
            var2['customStatusExtra'] = var6;
            var6 = false;
            var2['renderForScreenshot'] = var6;
            var2['visible'] = var6;
            var6 = {};
            var10 = 'ownStatus';
            var6['kind'] = var10;
            var6['handlePressPrimary'] = var9;
            var6['handlePressSecondary'] = var8;
            var6['hasStatus'] = var7;
            var2['variant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 505:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();