// app/modules/guild_tag/native/GuildTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var8;
        var1 = global;
        var6 = var1.Object;
        var4 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var6)(var3, var1, var2);
        var1 = 0;
        var4 = var8[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var10 = var2.bind(var1)(var4);
        var _closure1_slot3 = var10;
        var2 = 1;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.Image;
        var _closure1_slot4 = var4;
        var2 = var2.View;
        var _closure1_slot5 = var2;
        var2 = 2;
        var2 = var8[var2];
        var2 = var12.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 3;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.GuildTagBadgeSize;
        var _closure1_slot7 = var2;
        var2 = 4;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.jsx;
        var _closure1_slot8 = var4;
        var4 = var2.Fragment;
        var _closure1_slot9 = var4;
        var2 = var2.jsxs;
        var _closure1_slot10 = var2;
        var2 = 5;
        var2 = var8[var2];
        var9 = var7.bind(var1)(var2);
        var4 = var9.createStyles;
        var2 = {};
        var6 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': 4, 'paddingHorizontal': 4, 'paddingVertical': 1, 'columnGap': 2};
        var11 = 6;
        var11 = var8[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.BG_MOD_STRONG;
        var6['backgroundColor'] = var11;
        var2['container'] = var6;
        var11 = {};
        var6 = 7;
        var6 = var8[var6];
        var12 = var7.bind(var1)(var6);
        var6 = var12.isAndroid;
        var13 = var6.bind(var12)();
        var6 = 16;
        var12 = var6;
        if(!var13) { _fun0001_ip = 288; continue _fun0001 }
 285:
        var12 = 14;
 288:
        var11['lineHeight'] = var12;
        var12 = 'hidden';
        var11['overflow'] = var12;
        var2['tag'] = var11;
        var2 = var4.bind(var9)(var2);
        var _closure1_slot11 = var2;
        var4 = var10.memo;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var8 = var1.source;
                var7 = var1.size;
                var5 = undefined;
                if(!(var7 === var5)) { _fun0002_ip = 32; continue _fun0002 }
 19:
                var1 = _closure1_slot7;
                var7 = var1.SIZE_12;
 32:
                var1 = null;
                var2 = var1 == var8;
                if(var2) { _fun0002_ip = 140; continue _fun0002 }
 41:
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var2['source'] = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 8;
                var8 = var11[var6];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.HHYPgI;
                var6 = var8.bind(var9)(var6);
                var2['alt'] = var6;
                var6 = {};
                var6['width'] = var7;
                var6['height'] = var7;
                var2['style'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 140:
                return var1;
            }
        };
        var4 = var4.bind(var10)(var2);
        var _closure1_slot12 = var4;
        var9 = var10.memo;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var9 = var2.containerStyles;
                var3 = var2.guildTag;
                var _closure2_slot0 = var3;
                var3 = var2.guildBadge;
                var _closure2_slot1 = var3;
                var10 = var2.onPress;
                var8 = var2.disabled;
                var5 = undefined;
                if(!(var8 === var5)) { _fun0003_ip = 49; continue _fun0003 }
 47:
                var8 = false;
 49:
                var3 = var2.textVariant;
                if(!(var3 === var5)) { _fun0003_ip = 65; continue _fun0003 }
 59:
                var3 = 'text-xs/semibold';
 65:
                var _closure2_slot2 = var3;
                var3 = var2.textColor;
                if(!(var3 === var5)) { _fun0003_ip = 85; continue _fun0003 }
 79:
                var3 = 'text-normal';
 85:
                var _closure2_slot3 = var3;
                var3 = var2.textStyle;
                var _closure2_slot4 = var3;
                var2 = var2.badgeSize;
                if(!(var2 === var5)) { _fun0003_ip = 122; continue _fun0003 }
 109:
                var3 = _closure1_slot7;
                var2 = var3.SIZE_12;
 122:
                var _closure2_slot5 = var2;
                var _closure2_slot6 = var5;
                var3 = _closure1_slot11;
                var7 = var3.bind(var5)();
                _closure2_slot6 = var7;
                var6 = function renderContent() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot9;
                        var2 = {};
                        var6 = _closure2_slot1;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0004_ip = 41; continue _fun0004 }
 26:
                        var5 = _closure2_slot1;
                        var6 = 'string';
                        var5 = typeof var5;
                        if(!(var6 !== var5)) { _fun0004_ip = 47; continue _fun0004 }
 41:
                        var6 = _closure2_slot1;
                        _fun0004_ip = 87; continue _fun0004;
 47:
                        var10 = _closure1_slot8;
                        var8 = _closure1_slot12;
                        var7 = {};
                        var5 = {};
                        var11 = _closure2_slot1;
                        var5['uri'] = var11;
                        var7['source'] = var5;
                        var5 = _closure2_slot5;
                        var7['size'] = var5;
                        var5 = undefined;
                        var6 = var10.bind(var5)(var8, var7);
 87:
                        var5 = new Array(2);
                        var5[0] = var6;
                        var8 = _closure1_slot8;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 9;
                        var6 = var6[var1];
                        var1 = undefined;
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.Text;
                        var6 = {};
                        var10 = _closure2_slot2;
                        var6['variant'] = var10;
                        var10 = _closure2_slot3;
                        var6['color'] = var10;
                        var10 = 1;
                        var6['lineClamp'] = var10;
                        var10 = 'tail';
                        var6['ellipsizeMode'] = var10;
                        var10 = _closure2_slot6;
                        var11 = var10.tag;
                        var10 = new Array(2);
                        var10[0] = var11;
                        var11 = _closure2_slot4;
                        var10[1] = var11;
                        var6['style'] = var10;
                        var9 = _closure2_slot0;
                        var6['children'] = var9;
                        var6 = var8.bind(var1)(var7, var6);
                        var5[1] = var6;
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var1 = null;
                if(!(var1 == var10)) { _fun0003_ip = 203; continue _fun0003 }
 156:
                var4 = _closure1_slot8;
                var3 = _closure1_slot5;
                var1 = {};
                var12 = var7.container;
                var11 = new Array(2);
                var11[0] = var12;
                var11[1] = var9;
                var1['style'] = var11;
                var11 = var6.bind(var5)();
                var1['children'] = var11;
                var1 = var4.bind(var5)(var3, var1);
                _fun0003_ip = 297; continue _fun0003;
 203:
                var4 = _closure1_slot8;
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 10;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var2['onPress'] = var10;
                var10 = var7.container;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var9;
                var2['style'] = var7;
                var2['disabled'] = var8;
                var7 = 'button';
                var2['accessibilityRole'] = var7;
                var7 = {};
                var7['disabled'] = var8;
                var2['accessibilityState'] = var7;
                var6 = var6.bind(var5)();
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 297:
                return var1;
            }
        };
        var2 = var9.bind(var10)(var2);
        var _closure1_slot13 = var2;
        var9 = var10.memo;
        var5 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var7 = arg1;
                var2 = var7.primaryGuild;
                var _closure2_slot0 = var2;
                var13 = var7.userId;
                var _closure2_slot1 = var13;
                var8 = var7.disabledTooltip;
                var5 = undefined;
                if(!(var8 === var5)) { _fun0005_ip = 38; continue _fun0005 }
 36:
                var8 = false;
 38:
                var9 = var7.badgeSize;
                if(!(var9 === var5)) { _fun0005_ip = 61; continue _fun0005 }
 48:
                var3 = _closure1_slot7;
                var9 = var3.SIZE_12;
 61:
                var6 = {'primaryGuild': 0, 'userId': 0, 'disabledTooltip': 0, 'badgeSize': 0};
                var3 = null;
                var17 = var6;
                var16 = null;
                var4 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var7;
                var15 = var6;
                var7 = copyDataProperties(var17, var16, var15);
                var _closure2_slot2 = var5;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 11;
                var4 = var11[var4];
                var12 = var6.bind(var5)(var4);
                var11 = var12.useStateFromStoresObject;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var2;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var5 = _closure1_slot6;
                        var4 = var5.getUser;
                        var3 = _closure2_slot1;
                        var6 = var4.bind(var5)(var3);
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        var3 = undefined;
                        if(var7) { _fun0006_ip = 44; continue _fun0006 }
 38:
                        var3 = var6.primaryGuild;
 44:
                        if(!(var5 == var3)) { _fun0006_ip = 52; continue _fun0006 }
 48:
                        var3 = _closure2_slot0;
 52:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.getUserPrimaryGuild;
                        var2 = var1.bind(var2)(var3);
                        var1 = {};
                        var3 = var2.tag;
                        var1['tag'] = var3;
                        var3 = var2.badge;
                        var1['badge'] = var3;
                        var2 = var2.guildId;
                        var1['guildId'] = var2;
                        return var1;
                    }
                };
                var2 = var11.bind(var12)(var6, var2, var4);
                var11 = var2.tag;
                var13 = var2.badge;
                var12 = var2.guildId;
                _closure2_slot2 = var12;
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure2_slot2;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0007_ip = 123; continue _fun0007 }
 13:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 13;
                        var3 = var1[var3];
                        var7 = undefined;
                        var5 = var4.bind(var7)(var3);
                        var4 = var5.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 15;
                        var2 = var1[var2];
                        var3 = var3.bind(var7)(var2);
                        var2 = 14;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var7)(var2, var1);
                        var7 = _closure2_slot2;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'GuildProfileActionSheet:';
                        var2 = var2.bind(var1)(var7);
                        var1 = {};
                        var6 = _closure2_slot2;
                        var1['guildId'] = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
 123:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var4.bind(var6)(var1, var2);
                var2 = var3 == var12;
                var1 = null;
                if(var2) { _fun0005_ip = 324; continue _fun0005 }
 224:
                var2 = var3 == var11;
                var1 = null;
                if(var2) { _fun0005_ip = 324; continue _fun0005 }
 233:
                var4 = _closure1_slot8;
                var3 = _closure1_slot13;
                var2 = {};
                var2['guildTag'] = var11;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var11 = var11.bind(var5)(var10);
                var10 = var11.getGuildTagBadgeUrl;
                var10 = var10.bind(var11)(var12, var13, var9);
                var2['guildBadge'] = var10;
                var2['badgeSize'] = var9;
                var17 = var2;
                var16 = var7;
                var7 = copyDataProperties(var17, var16);
                var7 = undefined;
                if(var8) { _fun0005_ip = 309; continue _fun0005 }
 306:
                var7 = var6;
 309:
                var6 = 'onPress';
                var2[var6] = var7;
                var1 = var4.bind(var5)(var3, var2);
 324:
                return var1;
            }
        };
        var5 = var9.bind(var10)(var5);
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/guild_tag/native/GuildTag.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['GuildTagBadge'] = var4;
        var3['BaseGuildTagChiplet'] = var2;
        return var1;
    }
})();