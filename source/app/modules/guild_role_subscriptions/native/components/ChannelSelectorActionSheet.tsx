// app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function ChannelRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var12 = var2.channel;
            var _closure2_slot0 = var12;
            var8 = var2.onChannelSelected;
            var _closure2_slot1 = var8;
            var6 = var2.selected;
            var2 = _closure1_slot14;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var12;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = {};
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 13;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = var10.channelRow;
            var5['style'] = var13;
            var5['onPress'] = var11;
            var11 = true;
            var5['accessible'] = var11;
            var13 = var12.name;
            var5['accessibilityLabel'] = var13;
            var5['channel'] = var12;
            var5['selected'] = var6;
            var5['disableHighlightOnPress'] = var11;
            var11 = _closure1_slot10;
            var11 = var11.ONLY_MENTIONS;
            var5['resolvedUnreadSetting'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0004_ip = 247; continue _fun0004 }
 189:
            var9 = _closure1_slot11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 14;
            var7 = var12[var7];
            var8 = var11.bind(var4)(var7);
            var7 = {};
            var10 = var10.selectedIcon;
            var7['style'] = var10;
            var10 = 15;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var7['source'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 247:
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot9 = var7;
    var12 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot10 = var4;
    var13 = 8;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'padding': 16, 'width': '100%'};
    var10 = 10;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var14;
    var16 = 16;
    var4['titleContainer'] = var9;
    var9 = {'backgroundColor': null, 'padding': 16, 'width': '100%'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var4['searchContainer'] = var9;
    var9 = {'alignItems': 'center', 'backgroundColor': null, 'flexDirection': 'row', 'padding': 16};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var4['createChannelButton'] = var9;
    var9 = {};
    var14 = 11;
    var14 = var6[var14];
    var15 = var11.bind(var1)(var14);
    var14 = var12.PRIMARY_MEDIUM;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_LINK;
    var18 = var15.bind(var1)(var14, var12, var16);
    var19 = var9;
    var12 = copyDataProperties(var19, var18);
    var12 = 'marginStart';
    var9[var12] = var13;
    var4['createChannelLabel'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['bodyContainer'] = var9;
    var9 = {'paddingHorizontal': 8, 'paddingVertical': 4};
    var4['channelRow'] = var9;
    var9 = {'end': 16, 'top': 10, 'position': 'absolute'};
    var4['selectedIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelSelectorActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var2 = var1.onChannelSelected;
            var _closure2_slot1 = var2;
            var2 = var1.selectedChannelId;
            var _closure2_slot2 = var2;
            var20 = var1.title;
            var13 = var1.hideCreateChannel;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0005_ip = 55; continue _fun0005 }
 53:
            var13 = false;
 55:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot14;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = '';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var3[var1];
            _closure2_slot3 = var1;
            var2 = 1;
            var22 = var3[var2];
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var21 = null;
            var6 = var2.bind(var3)(var21);
            _closure2_slot4 = var6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 16;
            var2 = var16[var2];
            var9 = var17.bind(var4)(var2);
            var7 = var9.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot8;
            var3[1] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = new Array(0);
                    var4 = _closure1_slot7;
                    var3 = var4.getCategories;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var4)(var2);
                    var3 = _closure1_slot15;
                    var2 = var8._categories;
                    var7 = undefined;
                    var6 = var3.bind(var7)(var2);
                    var3 = var6.bind(var7)();
                    var2 = var3.done;
                    var5 = '';
                    var4 = var3;
                    var3 = undefined;
                    if(var2) { _fun0006_ip = 241; continue _fun0006 }
 70:
                    var11 = _closure1_slot15;
                    var2 = var4.value;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var2 = var8[var2];
                    var12 = var11.bind(var7)(var2);
                    var11 = var12.bind(var7)();
                    var2 = var11.done;
                    if(var2) { _fun0006_ip = 223; continue _fun0006 }
 110:
                    var13 = var11.value;
                    var16 = _closure1_slot8;
                    var15 = var16.can;
                    var2 = _closure1_slot9;
                    var14 = var2.VIEW_CHANNEL;
                    var2 = var13.channel;
                    var2 = var15.bind(var16)(var14, var2);
                    if(!var2) { _fun0006_ip = 187; continue _fun0006 }
 149:
                    var14 = _closure2_slot3;
                    var14 = var5 === var14;
                    if(var14) { _fun0006_ip = 184; continue _fun0006 }
 160:
                    var15 = var13.channel;
                    var17 = var15.name;
                    var16 = var17.includes;
                    var15 = _closure2_slot3;
                    var14 = var16.bind(var17)(var15);
 184:
                    var2 = var14;
 187:
                    if(!var2) { _fun0006_ip = 205; continue _fun0006 }
 190:
                    var14 = var1.push;
                    var2 = var13.channel;
                    var2 = var14.bind(var1)(var2);
 205:
                    var14 = var12.bind(var7)();
                    var2 = var14.done;
                    var11 = var14;
                    var3 = var13;
                    if(!var2) { _fun0006_ip = 110; continue _fun0006 }
 223:
                    var11 = var6.bind(var7)();
                    var2 = var11.done;
                    var4 = var11;
                    if(!var2) { _fun0006_ip = 70; continue _fun0006 }
 241:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var3, var1, var2);
            var3 = _closure1_slot11;
            var1 = 17;
            var1 = var16[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var7 = true;
            var1['scrollable'] = var7;
            var1['ref'] = var6;
            var11 = _closure1_slot13;
            var7 = _closure1_slot12;
            var6 = {};
            var15 = _closure1_slot11;
            var14 = _closure1_slot5;
            var12 = {};
            var18 = var10.titleContainer;
            var12['style'] = var18;
            var19 = _closure1_slot11;
            var18 = 18;
            var16 = var16[var18];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'accessibilityRole': 'header', 'variant': 'text-md/bold', 'color': 'header-primary'};
            if(!(var21 == var20)) { _fun0005_ip = 373; continue _fun0005 }
 318:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 19;
            var24 = var27[var23];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.PDn2fX;
            var20 = var24.bind(var25)(var23);
 373:
            var16['children'] = var20;
            var16 = var19.bind(var4)(var17, var16);
            var12['children'] = var16;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var16 = _closure1_slot11;
            var15 = _closure1_slot5;
            var14 = {};
            var17 = var10.searchContainer;
            var14['style'] = var17;
            var20 = _closure1_slot11;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 20;
            var17 = var23[var17];
            var17 = var27.bind(var4)(var17);
            var19 = var17.SearchField;
            var17 = {};
            var24 = 'md';
            var17['size'] = var24;
            var25 = 19;
            var24 = var23[var25];
            var24 = var27.bind(var4)(var24);
            var26 = var24.intl;
            var24 = var26.string;
            var23 = var23[var25];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.UTYBjY;
            var23 = var24.bind(var26)(var23);
            var17['placeholder'] = var23;
            var17['onChange'] = var22;
            var22 = function onFocus() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 33; continue _fun0007 }
 23:
                    var2 = var3.expandActionSheet;
                    var1 = var2.bind(var3)();
 33:
                    return var1;
                }
            };
            var17['onFocus'] = var22;
            var17 = var20.bind(var4)(var19, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var12[1] = var14;
            var13 = !var13;
            if(!var13) { _fun0005_ip = 833; continue _fun0005 }
 561:
            var16 = _closure1_slot13;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 21;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.PressableOpacity;
            var14 = {};
            var17 = var10.createChannelButton;
            var14['style'] = var17;
            var17 = 'button';
            var14['accessibilityRole'] = var17;
            var17 = function onPress() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 12;
                var3 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var3 = 22;
                var3 = var8[var3];
                var6 = var7.bind(var1)(var3);
                var5 = var6.pushLazy;
                var9 = _closure1_slot0;
                var2 = 24;
                var2 = var8[var2];
                var4 = var9.bind(var1)(var2);
                var2 = 23;
                var3 = var8[var2];
                var2 = var8.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot0;
                var3['guildId'] = var2;
                var2 = 25;
                var2 = var8[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.CreateChannelMode;
                var2 = var2.PREMIUM_CHANNEL;
                var3['createMode'] = var2;
                var2 = function onChannelCreated(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 26;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.close;
                        var3 = var3.bind(var4)();
                        var4 = _closure1_slot6;
                        var3 = var4.getChannel;
                        var2 = arg1;
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0008_ip = 70; continue _fun0008 }
 58:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var1)(var3);
 70:
                        return var1;
                    }
                };
                var3['onChannelCreated'] = var2;
                var2 = 26;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.CREATE_CHANNEL_MODAL_KEY;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var14['onPress'] = var17;
            var20 = _closure1_slot11;
            var19 = _closure1_slot1;
            var17 = 27;
            var17 = var22[var17];
            var19 = var19.bind(var4)(var17);
            var17 = {};
            var22 = var10.createChannelLabel;
            var23 = var22.color;
            var22 = var21 == var23;
            var21 = undefined;
            if(var22) { _fun0005_ip = 673; continue _fun0005 }
 664:
            var22 = var23.toString;
            var21 = var22.bind(var23)();
 673:
            var17['color'] = var21;
            var23 = _closure1_slot1;
            var21 = _closure1_slot2;
            var22 = 28;
            var22 = var21[var22];
            var22 = var23.bind(var4)(var22);
            var17['source'] = var22;
            var19 = var20.bind(var4)(var19, var17);
            var17 = new Array(2);
            var17[0] = var19;
            var20 = _closure1_slot11;
            var24 = _closure1_slot0;
            var18 = var21[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-link'};
            var22 = var10.createChannelLabel;
            var18['style'] = var22;
            var22 = var21[var25];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.d7AN7e;
            var21 = var22.bind(var23)(var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 833:
            var12[2] = var13;
            var6['children'] = var12;
            var6 = var11.bind(var4)(var7, var6);
            var1['header'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 29;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetFlatList;
            var5 = {};
            var10 = var10.bodyContainer;
            var5['style'] = var10;
            var5['data'] = var9;
            var9 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5['keyExtractor'] = var9;
            var8 = function renderItem(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var4 = _closure1_slot11;
                var3 = _closure1_slot17;
                var2 = {};
                var2['channel'] = var5;
                var6 = _closure2_slot1;
                var2['onChannelSelected'] = var6;
                var5 = var5.id;
                var1 = _closure2_slot2;
                var1 = var5 === var1;
                var2['selected'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5['renderItem'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();