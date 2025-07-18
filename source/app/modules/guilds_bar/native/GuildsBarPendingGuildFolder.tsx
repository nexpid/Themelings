// app/modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarPendingGuildFolder(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.id;
            var _closure2_slot0 = var11;
            var7 = var1.expanded;
            var10 = var1.childNodes;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 4;
            var2 = var16[var1];
            var4 = undefined;
            var6 = var15.bind(var4)(var2);
            var2 = var6.useGuildsBarAnimatedWrapperStyles;
            var8 = true;
            var13 = false;
            var12 = var2.bind(var6)(var8, var13);
            var2 = _closure1_slot1;
            var6 = 5;
            var6 = var16[var6];
            var6 = var2.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var _closure2_slot1 = var6;
            var6 = 6;
            var6 = var16[var6];
            var17 = var15.bind(var4)(var6);
            var14 = var17.useStateFromStores;
            var6 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.includes;
                    var5 = _closure1_slot4;
                    var1 = var5.getGuildId;
                    var1 = var1.bind(var5)();
                    var5 = null;
                    if(!(var5 == var1)) { _fun0002_ip = 39; continue _fun0002 }
 35:
                    var1 = _closure1_slot5;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var14 = var14.bind(var17)(var9, var6);
            var22 = _closure1_slot3;
            var17 = var22.useMemo;
            var9 = new Array(1);
            var9[0] = var11;
            var6 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getGuildFolderMenuItems;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var2 = var2.label;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0003_ip = 51; continue _fun0003 }
 42:
                        var3 = var2.action;
                        var1 = var4 == var3;
 51:
                        if(var1) { _fun0003_ip = 63; continue _fun0003 }
 54:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
 63:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var6 = var17.bind(var22)(var6, var9);
            var18 = var6.accessibilityActions;
            var17 = var6.onAccessibilityAction;
            var6 = 8;
            var6 = var16[var6];
            var21 = var15.bind(var4)(var6);
            var9 = var21.useSharedValue;
            var19 = global;
            var6 = var19.HermesInternal;
            var6 = var6.concat;
            var20 = '';
            var6 = var6.bind(var20)(var11);
            var9 = var9.bind(var21)(var6);
            var21 = var22.useMemo;
            var6 = new Array(1);
            var6[0] = var11;
            var3 = function() {
                var1 = {};
                var2 = function onPress() {
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var5 = var4[var3];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var3 = var4[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.toggleGuildFolderExpand;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onPress'] = var2;
                return var1;
            };
            var6 = var21.bind(var22)(var3, var6);
            var3 = _closure1_slot6;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var19 = var19.HermesInternal;
            var19 = var19.concat;
            var19 = var19.bind(var20)(var11);
            var1['id'] = var19;
            var1['accessibilityActions'] = var18;
            var1['onAccessibilityAction'] = var17;
            var1['selected'] = var14;
            var1['unread'] = var13;
            var1['circle'] = var13;
            var1['styles'] = var12;
            var12 = 11;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.scsU+v;
            var12 = var13.bind(var14)(var12);
            var1['label'] = var12;
            var1['sharedId'] = var9;
            var1['cutouts'] = var4;
            var1['overState'] = var4;
            var1['preventClipping'] = var8;
            var1['config'] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 443; continue _fun0001 }
 390:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 12;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GuildsBarGuildFolderBG;
            var7 = {};
            var7['folderId'] = var11;
            var10 = var10.length;
            var7['totalItems'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 443:
            var1['externalChildren'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.HourglassIcon;
            var5 = {};
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();