// app/modules/threads/native/components/ThreadBrowserRowSubtext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function MessageContent(arg1) {
        var2 = arg1;
        var1 = var2.thread;
        var2 = var2.message;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot13;
        var4 = undefined;
        var8 = var3.bind(var4)();
        var9 = _closure1_slot0;
        var13 = _closure1_slot2;
        var3 = 18;
        var3 = var13[var3];
        var10 = var9.bind(var4)(var3);
        var7 = var10.useSubscribeGuildMembers;
        var6 = {};
        var11 = var1.guild_id;
        var3 = var2.author;
        var14 = var3.id;
        var3 = new Array(1);
        var3[0] = var14;
        var6[var11] = var3;
        var3 = 'ThreadBrowserRowSubtext';
        var3 = var7.bind(var10)(var6, var3);
        var3 = 11;
        var6 = var13[var3];
        var11 = var9.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot7;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot7;
                var3 = var4.getUser;
                var1 = _closure2_slot0;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0001_ip = 52; continue _fun0001 }
 42:
                var2 = _closure2_slot0;
                var1 = var2.author;
 52:
                return var1;
            }
        };
        var10 = var10.bind(var11)(var7, var6);
        var3 = var13[var3];
        var11 = var9.bind(var4)(var3);
        var7 = var11.useStateFromStores;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var1 = _closure1_slot5;
            var1 = var1.roleStyle;
            return var1;
        };
        var3 = var7.bind(var11)(var6, var3);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot1;
        var6 = 19;
        var6 = var13[var6];
        var6 = var3.bind(var4)(var6);
        var6 = var6.bind(var4)(var2);
        var7 = var6.nick;
        var _closure2_slot2 = var7;
        var7 = var6.colorString;
        var _closure2_slot3 = var7;
        var6 = var6.colorStrings;
        var _closure2_slot4 = var6;
        var6 = 20;
        var6 = var13[var6];
        var7 = var3.bind(var4)(var6);
        var6 = var7.extractTimestamp;
        var2 = var2.id;
        var11 = var6.bind(var7)(var2);
        var2 = 12;
        var6 = var13[var2];
        var7 = var9.bind(var4)(var6);
        var6 = var7.getTimestampString;
        var7 = var6.bind(var7)(var11);
        var2 = var13[var2];
        var6 = var9.bind(var4)(var2);
        var2 = var6.getTimestampAccessibilityLabel;
        var6 = var2.bind(var6)(var11);
        var2 = 21;
        var2 = var13[var2];
        var11 = var9.bind(var4)(var2);
        var2 = var11.useShouldFilterKeywords;
        var2 = var2.bind(var11)();
        var _closure2_slot5 = var2;
        var2 = 13;
        var2 = var13[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var1.guild_id;
        var1 = var10.id;
        var1 = var3.bind(var4)(var2, var1);
        var _closure2_slot6 = var1;
        var3 = _closure1_slot9;
        var2 = _closure1_slot16;
        var1 = {};
        var1['user'] = var10;
        var1['timestamp'] = var7;
        var1['accessibilityLabel'] = var6;
        var7 = _closure1_slot9;
        var5 = 15;
        var5 = var13[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var8 = var8.subtextContent;
        var5['style'] = var8;
        var8 = 16;
        var10 = var13[var8];
        var10 = var9.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.format;
        var8 = var13[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.t;
        var9 = var8.M79KAA;
        var8 = {};
        var13 = function usernameHook(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = _closure1_slot9;
                var4 = _closure1_slot17;
                var3 = {};
                var1 = _closure2_slot2;
                var6 = null;
                var7 = var6 != var1;
                var1 = '';
                if(!var7) { _fun0002_ip = 37; continue _fun0002 }
 33:
                var1 = _closure2_slot2;
 37:
                var3['nickname'] = var1;
                var8 = _closure2_slot1;
                var7 = 'username';
                var1 = null;
                if(!(var7 === var8)) { _fun0002_ip = 60; continue _fun0002 }
 56:
                var1 = _closure2_slot3;
 60:
                var3['usernameColor'] = var1;
                var1 = _closure2_slot3;
                var3['roleColor'] = var1;
                var7 = _closure2_slot6;
                var1 = null;
                if(!var7) { _fun0002_ip = 87; continue _fun0002 }
 83:
                var1 = _closure2_slot4;
 87:
                var3['roleColors'] = var1;
                var7 = _closure2_slot1;
                var1 = 'dot';
                var1 = var1 === var7;
                if(!var1) { _fun0002_ip = 115; continue _fun0002 }
 107:
                var2 = _closure2_slot3;
                var1 = var6 != var2;
 115:
                var3['shouldShowRoleDot'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var8['usernameHook'] = var13;
        var12 = function messageTextHook(arg1, arg2) {
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 22;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.LegacyText;
            var2 = {};
            var6 = _closure1_slot1;
            var1 = 23;
            var1 = var7[var1];
            var7 = var6.bind(var4)(var1);
            var6 = _closure2_slot0;
            var1 = {};
            var9 = true;
            var1['formatInline'] = var9;
            var8 = _closure2_slot5;
            var1['shouldFilterKeywords'] = var8;
            var1 = var7.bind(var4)(var6, var1);
            var1 = var1.content;
            var2['children'] = var1;
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var8['messageTextHook'] = var12;
        var8 = var10.bind(var11)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function SubstringRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var7 = var1.children;
            var10 = var1.timestamp;
            var9 = var1.accessibilityLabel;
            var1 = _closure1_slot13;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 215; continue _fun0003 }
 46:
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var11.row;
            var1['style'] = var4;
            var4 = new Array(3);
            var4[0] = var7;
            var12 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var13 = var11.dividerDot;
            var7['style'] = var13;
            var7 = var12.bind(var5)(var8, var7);
            var4[1] = var7;
            var12 = _closure1_slot9;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 15;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var13 = var11.timestamp;
            var7['style'] = var13;
            var7['accessibilityLabel'] = var9;
            var13 = 'text-sm/medium';
            var7['variant'] = var13;
            var13 = 'text-muted';
            var7['color'] = var13;
            var13 = global;
            var13 = var13.HermesInternal;
            var14 = var13.concat;
            var13 = '';
            var13 = var14.bind(var13)(var10);
            var7['children'] = var13;
            var7 = var12.bind(var5)(var8, var7);
            var4[2] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 326; continue _fun0003;
 215:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var11.row;
            var2['style'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 15;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var11 = var11.timestamp;
            var6['style'] = var11;
            var6['accessibilityLabel'] = var9;
            var9 = 'text-sm/medium';
            var6['variant'] = var9;
            var9 = 'text-muted';
            var6['color'] = var9;
            var9 = ' ';
            var9 = var9 + var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 326:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function Username(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.nickname;
            var10 = var2.usernameColor;
            var _closure2_slot0 = var10;
            var15 = var2.roleColor;
            var14 = var2.roleColors;
            var7 = var2.shouldShowRoleDot;
            var2 = _closure1_slot13;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var _closure2_slot1 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 24; continue _fun0005 }
 13:
                    var1 = _closure2_slot1;
                    var1 = var1.username;
                    _fun0005_ip = 58; continue _fun0005;
 24:
                    var2 = _closure2_slot1;
                    var3 = var2.username;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var3['color'] = var4;
                    var2[1] = var3;
                    var1 = var2;
 58:
                    return var1;
                }
            };
            var10 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useProcessColorStringsArray;
            var12 = var1.bind(var2)(var14);
            var13 = !var7;
            if(!var13) { _fun0004_ip = 139; continue _fun0004 }
 127:
            var2 = var12.length;
            var1 = 1;
            var13 = var2 > var1;
 139:
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            if(!var7) { _fun0004_ip = 206; continue _fun0004 }
 152:
            var11 = _closure1_slot9;
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 25;
            var5 = var16[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.RoleDot;
            var5 = {};
            var5['color'] = var15;
            var5['colors'] = var14;
            var14 = 'small';
            var5['size'] = var14;
            var7 = var11.bind(var4)(var8, var5);
 206:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 15;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var11 = 26;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.isFabric;
            var11 = var11.bind(var14)();
            var11 = !var11;
            var6['experimental_useNativeText'] = var11;
            var11 = undefined;
            if(!var13) { _fun0004_ip = 295; continue _fun0004 }
 292:
            var11 = var12;
 295:
            var6['gradientColors'] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageTypes;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var9 = var4.jsxs;
    var _closure1_slot10 = var9;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var9 = var7.CHANNEL_NAME_CHANGE;
    var4 = new Array(2);
    var4[0] = var9;
    var7 = var7.THREAD_STARTER_MESSAGE;
    var4[1] = var7;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'row';
    var10['flexDirection'] = var11;
    var4['row'] = var10;
    var10 = {'fontSize': 14, 'lineHeight': 18};
    var14 = 18;
    var11 = var13.PRIMARY_MEDIUM;
    var10['fontFamily'] = var11;
    var11 = 10;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_SECONDARY;
    var10['color'] = var15;
    var4['subText'] = var10;
    var10 = {'lineHeight': 18, 'flexShrink': 1};
    var4['subtextContent'] = var10;
    var10 = {};
    var10['lineHeight'] = var14;
    var4['timestamp'] = var10;
    var10 = {'fontSize': 14, 'lineHeight': 18};
    var13 = var13.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_SECONDARY;
    var10['color'] = var13;
    var4['username'] = var10;
    var10 = {'width': 4, 'height': 4, 'marginHorizontal': 4, 'borderRadius': 2, 'backgroundColor': null, 'alignSelf': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_MOD_STRONG;
    var10['backgroundColor'] = var13;
    var4['dividerDot'] = var10;
    var10 = {'position': 'absolute', 'height': 1, 'left': 16, 'right': 0, 'bottom': 0};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var4['divider'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var9 = var1.thread;
            var _closure2_slot0 = var9;
            var6 = var1.timestamp;
            var8 = var1.accessibilityLabel;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot13;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var1 = var11[var2];
            var14 = var3.bind(var4)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.ownerId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var13.bind(var14)(var7, var1);
            var _closure2_slot1 = var7;
            var1 = var11[var2];
            var15 = var3.bind(var4)(var1);
            var14 = var15.useStateFromStores;
            var1 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var1;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getMember;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = var1.ownerId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var14.bind(var15)(var13, var1);
            var _closure2_slot2 = var1;
            var2 = var11[var2];
            var13 = var3.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var2 = var11.bind(var13)(var3, var2);
            var _closure2_slot3 = var2;
            var2 = null;
            var3 = var2 == var1;
            var11 = undefined;
            if(var3) { _fun0006_ip = 212; continue _fun0006 }
 206:
            var11 = var1.colorString;
 212:
            var13 = var2 != var11;
            var3 = null;
            if(!var13) { _fun0006_ip = 224; continue _fun0006 }
 221:
            var3 = var11;
 224:
            _closure2_slot4 = var3;
            var3 = var2 == var1;
            var11 = undefined;
            if(var3) { _fun0006_ip = 243; continue _fun0006 }
 237:
            var11 = var1.colorStrings;
 243:
            var13 = var2 != var11;
            var3 = null;
            if(!var13) { _fun0006_ip = 255; continue _fun0006 }
 252:
            var3 = var11;
 255:
            _closure2_slot5 = var3;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 13;
            var3 = var13[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var9.guild_id;
            var13 = var2 == var7;
            var2 = undefined;
            if(var13) { _fun0006_ip = 298; continue _fun0006 }
 293:
            var2 = var7.id;
 298:
            var2 = var11.bind(var4)(var3, var2);
            _closure2_slot6 = var2;
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var2 = var2.bind(var3)(var9);
            _closure2_slot7 = var2;
            var9 = _closure1_slot3;
            var3 = var9.useEffect;
            var2 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var9)(var2);
            var9 = _closure1_slot3;
            var3 = var9.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var7;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 21; continue _fun0007 }
 13:
                    var2 = _closure2_slot2;
                    if(!(var3 == var2)) { _fun0007_ip = 86; continue _fun0007 }
 21:
                    var1 = _closure2_slot7;
                    var1 = var1.current;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.requestMembersById;
                    var2 = var1.guild_id;
                    var5 = var1.ownerId;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot16;
            var1 = {};
            var1['user'] = var7;
            var1['timestamp'] = var6;
            var1['accessibilityLabel'] = var8;
            var7 = _closure1_slot9;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 15;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'accessibilityLabel': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var10 = var10.subtextContent;
            var5['style'] = var10;
            var5['accessibilityLabel'] = var8;
            var8 = 16;
            var10 = var13[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.imPXd3;
            var8 = {};
            var12 = function usernameHook(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var2 = _closure2_slot2;
                    var7 = null;
                    var9 = var7 == var2;
                    var2 = undefined;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 43; continue _fun0008 }
 33:
                    var9 = _closure2_slot2;
                    var8 = var9.nick;
 43:
                    if(!(var7 == var8)) { _fun0008_ip = 82; continue _fun0008 }
 47:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var1 = var10[var1];
                    var10 = var9.bind(var2)(var1);
                    var9 = var10.getName;
                    var1 = _closure2_slot1;
                    var8 = var9.bind(var10)(var1);
 82:
                    var9 = var7 != var8;
                    var1 = '';
                    if(!var9) { _fun0008_ip = 96; continue _fun0008 }
 93:
                    var1 = var8;
 96:
                    var3['nickname'] = var1;
                    var9 = _closure2_slot3;
                    var8 = 'username';
                    var1 = null;
                    if(!(var8 === var9)) { _fun0008_ip = 119; continue _fun0008 }
 115:
                    var1 = _closure2_slot4;
 119:
                    var3['usernameColor'] = var1;
                    var1 = _closure2_slot4;
                    var3['roleColor'] = var1;
                    var8 = _closure2_slot6;
                    var1 = null;
                    if(!var8) { _fun0008_ip = 146; continue _fun0008 }
 142:
                    var1 = _closure2_slot5;
 146:
                    var3['roleColors'] = var1;
                    var8 = _closure2_slot3;
                    var1 = 'dot';
                    var1 = var1 === var8;
                    if(!var1) { _fun0008_ip = 174; continue _fun0008 }
 166:
                    var6 = _closure2_slot4;
                    var1 = var7 != var6;
 174:
                    var3['shouldShowRoleDot'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var8['usernameHook'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadBrowserRowSubtext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThreadSubtext(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var7 = var1.thread;
            var11 = var7.id;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 11;
            var6 = var2[var4];
            var4 = undefined;
            var10 = var3.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(1);
            var6[0] = var11;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMostRecentMessage;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var8, var5, var6);
            var8 = 12;
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useLastMessageTimestamp;
            var5 = var2.bind(var3)(var7);
            var2 = null;
            if(!(var2 != var9)) { _fun0009_ip = 175; continue _fun0009 }
 113:
            var6 = _closure1_slot12;
            var3 = var6.includes;
            var2 = var9.type;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0009_ip = 175; continue _fun0009 }
 135:
            var2 = var7.isArchivedThread;
            var2 = var2.bind(var7)();
            if(var2) { _fun0009_ip = 175; continue _fun0009 }
 148:
            var6 = _closure1_slot9;
            var3 = _closure1_slot15;
            var2 = {};
            var2['thread'] = var7;
            var2['message'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 175:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var8];
            var9 = var3.bind(var4)(var6);
            var6 = var9.getTimestampString;
            var6 = var6.bind(var9)(var5);
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getTimestampAccessibilityLabel;
            var5 = var2.bind(var3)(var5);
            var3 = _closure1_slot9;
            var2 = _closure1_slot14;
            var1 = {};
            var1['thread'] = var7;
            var1['timestamp'] = var6;
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ThreadSubtext'] = var2;
    return var1;
})();