// app/modules/safety_flows/native/tasks/PendingRequestList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = function PendingRequestRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var25 = var1.request;
            var _closure2_slot0 = var25;
            var11 = var1.hasMaxConnections;
            var21 = var1.isAcceptLoading;
            var16 = var1.isDeclineLoading;
            var19 = var1.actionsDisabled;
            var2 = var1.onAccept;
            var _closure2_slot1 = var2;
            var1 = var1.onDecline;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot13;
            var20 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 12;
            var1 = var1[var5];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var6)(var2, var1);
            var1 = null;
            var3 = var1 == var2;
            var15 = undefined;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var15 = var2.globalName;
case 36:
            if(!(var1 == var15)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = var2.username;
case 40:
            var15 = var3;
case 38:
            if(!(var1 == var15)) { _fun0004_ip = 42; continue _fun0004 }
case 17:
            var15 = var25.parent_username;
case 42:
            var3 = var1 == var2;
            var27 = undefined;
            if(var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var27 = var2.username;
case 43:
            if(!(var1 == var27)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var27 = var25.parent_username;
case 45:
            var3 = var1 == var2;
            var26 = undefined;
            if(var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var26 = var2.avatar;
case 47:
            if(!(var1 == var26)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var26 = var25.parent_avatar;
case 49:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getLinkedUsers;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var1 = var2.link_status;
case 51:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var2);
            _closure2_slot3 = var3;
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure2_slot3;
                    var1 = _closure1_slot9;
                    var3 = var1.ACTIVE;
                    var1 = 'connected';
                    if(!(var5 !== var3)) { _fun0006_ip = 30; continue _fun0006 }
case 34:
                    var5 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var5 = _closure2_slot3;
                    var2 = _closure1_slot9;
                    var4 = var2.PENDING;
                    var2 = 'declined';
                    if(!(var5 === var4)) { _fun0006_ip = 55; continue _fun0006 }
case 53:
                    var2 = null;
case 55:
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2);
            var2 = _closure1_slot3;
            var10 = 2;
            var2 = var2.bind(var4)(var5, var10);
            var7 = 0;
            var8 = var2[var7];
            var6 = 1;
            var2 = var2[var6];
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var9, var10);
            var7 = var5[var7];
            var5 = var5[var6];
            if(!(var3 !== var7)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var5 = var5.bind(var4)(var3);
            var5 = _closure1_slot9;
            var5 = var5.ACTIVE;
            if(!(var3 !== var5)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var5 = _closure1_slot9;
            var5 = var5.PENDING;
            if(!(var3 !== var5)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var3 = var1 != var3;
            if(var3) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var5 = var1 != var7;
            if(!var5) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var6 = _closure1_slot9;
            var6 = var6.ACTIVE;
            var5 = var7 !== var6;
case 64:
            var3 = var5;
case 62:
            if(!var3) { _fun0004_ip = 56; continue _fun0004 }
case 66:
            var3 = 'declined';
            var3 = var2.bind(var4)(var3);
            _fun0004_ip = 56; continue _fun0004;
case 60:
            var1 = var2.bind(var4)(var1);
            _fun0004_ip = 56; continue _fun0004;
case 58:
            var1 = 'connected';
            var1 = var2.bind(var4)(var1);
case 56:
            var1 = 'connected';
            var10 = var1 === var8;
            var22 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var5 = var22.bind(var4)(var1);
            var3 = var5.formatLinkTimestamp;
            var1 = global;
            var6 = var1.Date;
            var2 = var6.parse;
            var1 = var25.created_at;
            var2 = var2.bind(var6)(var1);
            var1 = _closure1_slot12;
            var24 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var20.row;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var18 = 11;
            var5 = var14[var18];
            var5 = var22.bind(var4)(var5);
            var6 = var5.Avatar;
            var5 = {};
            var9 = var20.avatar;
            var5['avatarStyle'] = var9;
            var12 = _closure1_slot1;
            var9 = 14;
            var9 = var14[var9];
            var23 = var12.bind(var4)(var9);
            var12 = var23.getUserAvatarSource;
            var9 = {};
            var28 = var25.parent_id;
            var9['id'] = var28;
            var9['avatar'] = var26;
            var9 = var12.bind(var23)(var9);
            var5['source'] = var9;
            var9 = true;
            var5['disablePlaceholder'] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var12 = _closure1_slot11;
            var9 = _closure1_slot6;
            var6 = {};
            var7 = var20.details;
            var6['style'] = var7;
            var23 = _closure1_slot10;
            var7 = 15;
            var14 = var14[var7];
            var14 = var22.bind(var4)(var14);
            var22 = var14.Text;
            var14 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var14['children'] = var15;
            var22 = var23.bind(var4)(var22, var14);
            var14 = new Array(3);
            var14[0] = var22;
            var15 = var27 !== var15;
            if(!var15) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var26 = _closure1_slot10;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var7];
            var22 = var23.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-sm/medium', 'color': 'text-default', 'lineClamp': 1};
            var22['children'] = var27;
            var15 = var26.bind(var4)(var23, var22);
case 67:
            var14[1] = var15;
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var4)(var15);
            var22 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var15['children'] = var24;
            var15 = var23.bind(var4)(var22, var15);
            var14[2] = var15;
            var6['children'] = var14;
            var6 = var12.bind(var4)(var9, var6);
            var5[1] = var6;
            if(var10) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var6 = 'declined';
            if(!(var6 !== var8)) { _fun0004_ip = 69; continue _fun0004 }
case 71:
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var6 = {};
            var12 = var20.actions;
            var6['style'] = var12;
            var12 = !var11;
            if(!var12) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var15 = _closure1_slot10;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var11 = 16;
            var11 = var27[var11];
            var11 = var23.bind(var4)(var11);
            var14 = var11.PressableOpacity;
            var11 = {};
            var22 = 'button';
            var11['accessibilityRole'] = var22;
            var22 = 7;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var26 = var22.intl;
            var24 = var26.formatToPlainString;
            var23 = _closure1_slot1;
            var22 = 17;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.jc1Ip7;
            var22 = {};
            var27 = var25.parent_username;
            var22['name'] = var27;
            var22 = var24.bind(var26)(var23, var22);
            var11['accessibilityLabel'] = var22;
            var11['disabled'] = var19;
            var22 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.parent_id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var22;
            var23 = var20.actionButton;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = var20.acceptButton;
            var22[1] = var23;
            var11['style'] = var22;
            var24 = _closure1_slot10;
            if(var21) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var21 = 18;
            var21 = var27[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.CheckmarkLargeBoldIcon;
            var21 = {};
            var23 = 'sm';
            var21['size'] = var23;
            var26 = _closure1_slot1;
            var23 = 10;
            var23 = var27[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.WHITE;
            var21['color'] = var23;
            var21 = var24.bind(var4)(var22, var21);
            _fun0004_ip = 76; continue _fun0004;
case 74:
            var23 = _closure1_slot5;
            var22 = {};
            var26 = 'small';
            var22['size'] = var26;
            var26 = var20.acceptIcon;
            var26 = var26.color;
            var22['color'] = var26;
            var21 = var24.bind(var4)(var23, var22);
case 76:
            var11['children'] = var21;
            var12 = var15.bind(var4)(var14, var11);
case 72:
            var11 = new Array(2);
            var11[0] = var12;
            var15 = _closure1_slot10;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 16;
            var12 = var26[var12];
            var12 = var22.bind(var4)(var12);
            var14 = var12.PressableOpacity;
            var12 = {};
            var21 = 'button';
            var12['accessibilityRole'] = var21;
            var21 = 7;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var24 = var21.intl;
            var23 = var24.formatToPlainString;
            var22 = _closure1_slot1;
            var21 = 17;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21["4GtllP"];
            var21 = {};
            var25 = var25.parent_username;
            var21['name'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var12['accessibilityLabel'] = var21;
            var12['disabled'] = var19;
            var17 = function onPress() {
                var3 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2 = var1.parent_id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var17;
            var19 = var20.actionButton;
            var17 = new Array(2);
            var17[0] = var19;
            var19 = var20.declineButton;
            var17[1] = var19;
            var12['style'] = var17;
            var19 = _closure1_slot10;
            if(var16) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = var22[var18];
            var16 = var21.bind(var4)(var16);
            var17 = var16.Icon;
            var16 = {};
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.Icon;
            var18 = var18.Sizes;
            var18 = var18.SMALL;
            var16['size'] = var18;
            var18 = var20.declineIcon;
            var18 = var18.color;
            var16['color'] = var18;
            var21 = _closure1_slot1;
            var18 = 19;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var16['source'] = var18;
            var16 = var19.bind(var4)(var17, var16);
            _fun0004_ip = 79; continue _fun0004;
case 77:
            var18 = _closure1_slot5;
            var17 = {};
            var21 = 'small';
            var17['size'] = var21;
            var20 = var20.declineIcon;
            var20 = var20.color;
            var17['color'] = var20;
            var16 = var19.bind(var4)(var18, var17);
case 79:
            var12['children'] = var16;
            var12 = var15.bind(var4)(var14, var12);
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0004_ip = 80; continue _fun0004;
case 69:
            var9 = _closure1_slot10;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var11 = 7;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 8;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            if(var10) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var10 = var13["2HvOvh"];
            _fun0004_ip = 83; continue _fun0004;
case 81:
            var10 = var13.YQP5dE;
case 83:
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 80:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var8 = var7[var13];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var17 = 2;
    var5 = var7[var17];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ActivityIndicator;
    var _closure1_slot5 = var8;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserLinkStatus;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = function SENT_TIMESTAMP_FORMATTER() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 7;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.M4NOO3;
        var8 = var9.bind(var10)(var8);
        var1['seconds'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8["9nem85"];
        var1['minutes'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.sJjWRY;
        var1['hours'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6["7SxW32"];
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.tVHevX;
        var1['days'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.q6jzya;
        var1['date'] = var2;
        return var1;
    };
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 10;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var10['backgroundColor'] = var14;
    var14 = 'hidden';
    var10['overflow'] = var14;
    var5['card'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = 'center';
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['paddingVertical'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_16;
    var10['paddingHorizontal'] = var15;
    var5['row'] = var10;
    var10 = {};
    var10['height'] = var13;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var10['backgroundColor'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var18 = var15.PX_16;
    var15 = 11;
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var19 = var16.AVATAR_SIZE_MAP;
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var16 = var16.AvatarSizes;
    var16 = var16.NORMAL;
    var16 = var19[var16];
    var18 = var18 + var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_12;
    var16 = var18 + var16;
    var10['marginLeft'] = var16;
    var5['divider'] = var10;
    var10 = {};
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var18 = var16.AVATAR_SIZE_MAP;
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var16 = var16.AvatarSizes;
    var16 = var16.NORMAL;
    var16 = var18[var16];
    var16 = var16 / var17;
    var10['borderRadius'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGHEST;
    var10['backgroundColor'] = var16;
    var5['avatar'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_12;
    var10['paddingLeft'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_4;
    var10['paddingRight'] = var16;
    var5['details'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['actions'] = var10;
    var10 = {'height': 36, 'width': 36, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var10['borderRadius'] = var16;
    var5['actionButton'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.STATUS_POSITIVE;
    var10['backgroundColor'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_8;
    var10['marginRight'] = var16;
    var5['acceptButton'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGHEST;
    var10['backgroundColor'] = var16;
    var10['borderWidth'] = var13;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_STRONG;
    var10['borderColor'] = var16;
    var5['declineButton'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var10['color'] = var16;
    var5['acceptIcon'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var10['color'] = var16;
    var5['declineIcon'] = var10;
    var10 = {};
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var17 = var16.AVATAR_SIZE_MAP;
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var16 = var16.AvatarSizes;
    var16 = var16.NORMAL;
    var16 = var17[var16];
    var10['width'] = var16;
    var16 = var7[var15];
    var16 = var6.bind(var1)(var16);
    var16 = var16.AVATAR_SIZE_MAP;
    var15 = var7[var15];
    var15 = var6.bind(var1)(var15);
    var15 = var15.AvatarSizes;
    var15 = var15.NORMAL;
    var15 = var16[var15];
    var10['height'] = var15;
    var10['alignItems'] = var14;
    var10['justifyContent'] = var14;
    var5['inviteIconContainer'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGHEST;
    var10['backgroundColor'] = var14;
    var10['borderWidth'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var10['borderColor'] = var13;
    var5['inviteQrButton'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['dividerRow'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'height': 1};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['backgroundColor'] = var13;
    var5['dividerLine'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['marginHorizontal'] = var11;
    var5['dividerLabel'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_flows/native/tasks/PendingRequestList.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PendingRequestList(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.pendingRequests;
            var _closure2_slot0 = var3;
            var10 = var1.linkedUsersProcessed;
            var15 = var1.onInviteAnotherGuardian;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var1 = _closure1_slot13;
            var16 = var1.bind(var4)();
            var _closure2_slot1 = var16;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useHasMaxConnections;
            var1 = var1.bind(var6)();
            var _closure2_slot2 = var1;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var1 = null;
            var6 = var6.bind(var7)(var1);
            var1 = _closure1_slot3;
            var14 = 2;
            var1 = var1.bind(var4)(var6, var14);
            var6 = 0;
            var7 = var1[var6];
            var _closure2_slot3 = var7;
            var12 = 1;
            var1 = var1[var12];
            var _closure2_slot4 = var1;
            var1 = 21;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useFamilyCenterActions;
            var1 = {};
            var7 = function onSuccess() {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['onSuccess'] = var7;
            var7 = function onError() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 22;
                var2 = var9[var2];
                var4 = var8.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR';
                var2['key'] = var6;
                var6 = _closure1_slot0;
                var5 = 7;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var7 = var5.intl;
                var6 = var7.string;
                var5 = 17;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.Wu8BK2;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onError'] = var7;
            var5 = var2.bind(var5)(var1);
            var2 = var5.acceptLinkRequest;
            var _closure2_slot5 = var2;
            var1 = var5.declineLinkRequest;
            var _closure2_slot6 = var1;
            var11 = var5.isAcceptLoading;
            var _closure2_slot7 = var11;
            var5 = var5.isDeclineLoading;
            var _closure2_slot8 = var5;
            if(var11) { _fun0007_ip = 23; continue _fun0007 }
case 84:
            var11 = var5;
case 23:
            _closure2_slot9 = var11;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var5 = function() {
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var7 = var7.bind(var8)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var7, var14);
            var7 = var5[var6];
            _closure2_slot10 = var7;
            var5 = var5[var12];
            _closure2_slot11 = var5;
            var17 = _closure1_slot4;
            var8 = var17.useCallback;
            var7 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.has;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var1)(var2);
                        if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 31:
                        var2 = global;
                        var2 = var2.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var6 = var4;
                        var5 = var1;
                        var2 = new var6[var2](var5, var4);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var4 = var2.add;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 35:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var8 = var8.bind(var17)(var7, var5);
            _closure2_slot12 = var8;
            var17 = _closure1_slot4;
            var7 = var17.useCallback;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var8;
            var5[2] = var2;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot9;
                    if(var2) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                    var4 = _closure2_slot12;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var4 = _closure2_slot4;
                    var4 = var4.bind(var2)(var3);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var2)(var3);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var17)(var2, var5);
            _closure2_slot13 = var2;
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var8;
            var2[2] = var1;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot9;
                    if(var2) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var4 = _closure2_slot12;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var4 = _closure2_slot4;
                    var4 = var4.bind(var2)(var3);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var2)(var3);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1, var2);
            _closure2_slot14 = var1;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var2 = var1.bind(var2)(var3);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var14);
            var11 = var1[var6];
            var2 = var1[var12];
            var5 = _closure1_slot4;
            var1 = var5.useState;
            var5 = var1.bind(var5)(var3);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5, var14);
            var5 = var1[var6];
            var1 = var1[var12];
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var8 = var7.bind(var8)(var10);
            var7 = _closure1_slot3;
            var8 = var7.bind(var4)(var8, var14);
            var7 = var8[var6];
            var8 = var8[var12];
            if(!var10) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            if(var7) { _fun0007_ip = 87; continue _fun0007 }
case 89:
            var7 = true;
            var7 = var8.bind(var4)(var7);
            var7 = var1.bind(var4)(var3);
            var7 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var5 = _closure1_slot14;
                    var6 = undefined;
                    var2 = arg1;
                    var8 = var5.bind(var6)(var2);
                    var7 = var8.bind(var6)();
                    var5 = var7.done;
                    if(var5) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                    var10 = var7.value;
                    var11 = _closure2_slot10;
                    var9 = var11.has;
                    var5 = var10.parent_id;
                    var5 = var9.bind(var11)(var5);
                    if(!var5) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                    var9 = var4.set;
                    var5 = var10.parent_id;
                    var5 = var9.bind(var4)(var5, var10);
case 92:
                    var9 = var8.bind(var6)();
                    var5 = var9.done;
                    var7 = var9;
                    if(!var5) { _fun0011_ip = 91; continue _fun0011 }
case 90:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.parent_id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0011_ip = 95; continue _fun0011 }
case 94:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var2.bind(var4)(var7);
            _fun0007_ip = 96; continue _fun0007;
case 87:
            if(!(var3 !== var5)) { _fun0007_ip = 96; continue _fun0007 }
case 97:
            var1 = var1.bind(var4)(var3);
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var5 = arg1;
                    var1 = global;
                    var4 = var1.Map;
                    var3 = var5.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.parent_id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var10 = var3.bind(var5)(var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot0;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0012_ip = 90; continue _fun0012 }
case 98:
                    var8 = var3.value;
                    var7 = var4.set;
                    var2 = var8.parent_id;
                    var2 = var7.bind(var4)(var2, var8);
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0012_ip = 98; continue _fun0012 }
case 90:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
case 96:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 23;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var7 = _closure1_slot1;
            var5 = 10;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.space;
            var5 = var5.PX_16;
            var1['spacing'] = var5;
            var5 = var11.length;
            var6 = var5 > var6;
            if(!var6) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var5 = {};
            var10 = var16.card;
            var5['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot11;
                    var3 = _closure1_slot4;
                    var4 = var3.Fragment;
                    var3 = {};
                    var7 = arg2;
                    var6 = 0;
                    var7 = var7 > var6;
                    if(!var7) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                    var10 = _closure1_slot10;
                    var9 = _closure1_slot6;
                    var8 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.divider;
                    var8['style'] = var6;
                    var6 = undefined;
                    var7 = var10.bind(var6)(var9, var8);
case 101:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot16;
                    var7 = {};
                    var7['request'] = var1;
                    var10 = _closure2_slot2;
                    var7['hasMaxConnections'] = var10;
                    var10 = _closure2_slot7;
                    if(!var10) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                    var12 = _closure2_slot3;
                    var11 = var1.parent_id;
                    var10 = var12 === var11;
case 103:
                    var7['isAcceptLoading'] = var10;
                    var10 = _closure2_slot8;
                    if(!var10) { _fun0013_ip = 105; continue _fun0013 }
case 37:
                    var12 = _closure2_slot3;
                    var11 = var1.parent_id;
                    var10 = var12 === var11;
case 105:
                    var7['isDeclineLoading'] = var10;
                    var10 = _closure2_slot9;
                    var7['actionsDisabled'] = var10;
                    var10 = _closure2_slot13;
                    var7['onAccept'] = var10;
                    var2 = _closure2_slot14;
                    var7['onDecline'] = var2;
                    var2 = undefined;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var1.parent_id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 99:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var16.dividerRow;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var16.dividerLine;
            var9['style'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot10;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var22 = 15;
            var10 = var17[var22];
            var10 = var14.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            var18 = var16.dividerLabel;
            var10['style'] = var18;
            var19 = 7;
            var18 = var17[var19];
            var18 = var14.bind(var4)(var18);
            var24 = var18.intl;
            var23 = var24.string;
            var21 = _closure1_slot1;
            var18 = 8;
            var20 = var17[var18];
            var20 = var21.bind(var4)(var20);
            var20 = var20["/SbB94"];
            var20 = var23.bind(var24)(var20);
            var10['children'] = var20;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot6;
            var10 = {};
            var20 = var16.dividerLine;
            var10['style'] = var20;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var16.card;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var16.row;
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var16.inviteIconContainer;
            var9['style'] = var12;
            var23 = _closure1_slot10;
            var12 = 24;
            var12 = var17[var12];
            var12 = var14.bind(var4)(var12);
            var20 = var12.PlaneIllocon;
            var12 = {};
            var24 = 32;
            var12['size'] = var24;
            var12 = var23.bind(var4)(var20, var12);
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot6;
            var10 = {};
            var20 = var16.details;
            var10['style'] = var20;
            var24 = _closure1_slot10;
            var20 = var17[var22];
            var20 = var14.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var25 = var17[var19];
            var25 = var14.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var17[var18];
            var25 = var21.bind(var4)(var25);
            var25 = var25.z9gkwZ;
            var25 = var26.bind(var27)(var25);
            var20['children'] = var25;
            var23 = var24.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            var24 = _closure1_slot10;
            var22 = var17[var22];
            var22 = var14.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var25 = var17[var19];
            var25 = var14.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var17[var18];
            var25 = var21.bind(var4)(var25);
            var25 = var25["9t4+vC"];
            var25 = var26.bind(var27)(var25);
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var20[1] = var22;
            var10['children'] = var20;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot10;
            var10 = 16;
            var10 = var17[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var20 = 'button';
            var10['accessibilityRole'] = var20;
            var19 = var17[var19];
            var19 = var14.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var17[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.z9gkwZ;
            var18 = var19.bind(var20)(var18);
            var10['accessibilityLabel'] = var18;
            var10['onPress'] = var15;
            var18 = var16.actionButton;
            var15 = new Array(2);
            var15[0] = var18;
            var18 = var16.inviteQrButton;
            var15[1] = var18;
            var10['style'] = var15;
            var15 = _closure1_slot10;
            var13 = 25;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.QrCodeIcon;
            var13 = {};
            var17 = 'sm';
            var13['size'] = var17;
            var16 = var16.declineIcon;
            var16 = var16.color;
            var13['color'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PendingRequestRow'] = var2;
    return var1;
})();