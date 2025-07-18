// app/modules/multi_account/native/AccountSwitcherListItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var13 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function AccountStatusIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var4 = var2.id;
            var1 = null;
            var8 = var1 == var7;
            var3 = undefined;
            if(var8) { _fun0001_ip = 86; continue _fun0001 }
 81:
            var3 = var7.id;
 86:
            if(!(var4 !== var3)) { _fun0001_ip = 183; continue _fun0001 }
 90:
            var3 = var2.tokenStatus;
            var2 = _closure1_slot8;
            var2 = var2.INVALID;
            var1 = null;
            if(!(var3 === var2)) { _fun0001_ip = 181; continue _fun0001 }
 112:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.CircleInformationIcon;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = 8;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.STATUS_DANGER;
            var2['color'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 181:
            _fun0001_ip = 252; continue _fun0001;
 183:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.CircleCheckIcon;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 8;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.TEXT_BRAND;
            var2['color'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 252:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var11 = 1;
    var5 = var7[var11];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Pressable;
    var _closure1_slot3 = var8;
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MultiAccountTokenStatus;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var12 = 8;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_LINK;
    var10['color'] = var12;
    var5['addAccountLabel'] = var10;
    var10 = {'marginLeft': 12, 'flex': 1};
    var5['accountListTag'] = var10;
    var10 = {};
    var12 = 'auto';
    var10['marginLeft'] = var12;
    var5['infoIcon'] = var10;
    var10 = {};
    var10['marginLeft'] = var12;
    var5['checkedIcon'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row'};
    var5['tagContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center', 'paddingVertical': 8, 'paddingHorizontal': 16};
    var5['accountSwitcherListItem'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['username'] = var10;
    var10 = {'flex': 1, 'minWidth': '30%', 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var5['accountInfo'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/multi_account/native/AccountSwitcherListItem.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AccountSwitcherListItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = var4.user;
            var10 = var4.onPressUser;
            var3 = var4.showActiveAccountLabel;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0002_ip = 30; continue _fun0002 }
 28:
            var3 = false;
 30:
            var7 = var4.sortHandlers;
            var11 = var4.delayLongPress;
            var9 = var4.leading;
            var6 = var4.trailing;
            var4 = _closure1_slot11;
            var20 = var4.bind(var5)();
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 9;
            var14 = var13[var4];
            var17 = var12.bind(var5)(var14);
            var16 = var17.useStateFromStores;
            var14 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function() {
                var1 = _closure1_slot6;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var17 = var16.bind(var17)(var15, var14);
            var4 = var13[var4];
            var13 = var12.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var14;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var12.bind(var13)(var4, var2);
            var12 = var1.id;
            var2 = null;
            var14 = var2 == var13;
            var4 = undefined;
            if(var14) { _fun0002_ip = 175; continue _fun0002 }
 170:
            var4 = var13.id;
 175:
            var13 = var12 === var4;
            var4 = _closure1_slot5;
            var12 = var4.prototype;
            var12 = Object.create(var12, {constructor: {value: var4}});
            var30 = var12;
            var29 = var1;
            var4 = new var30[var4](var29, var28);
            var21 = var4 instanceof Object ? var4 : var12;
            if(!var13) { _fun0002_ip = 215; continue _fun0002 }
 209:
            if(var3) { _fun0002_ip = 344; continue _fun0002 }
 215:
            var4 = var1.tokenStatus;
            var3 = _closure1_slot8;
            var3 = var3.INVALID;
            var15 = null;
            if(!(var4 === var3)) { _fun0002_ip = 446; continue _fun0002 }
 240:
            var12 = _closure1_slot9;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 12;
            var3 = var22[var3];
            var3 = var19.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-sm/semibold', 'color': 'text-danger'};
            var14 = 13;
            var16 = var22[var14];
            var16 = var19.bind(var5)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var14 = var22[var14];
            var14 = var19.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.tYX2pq;
            var14 = var16.bind(var18)(var14);
            var3['children'] = var14;
            var15 = var12.bind(var5)(var4, var3);
            _fun0002_ip = 446; continue _fun0002;
 344:
            var12 = _closure1_slot9;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 12;
            var3 = var22[var3];
            var3 = var19.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
            var14 = 13;
            var16 = var22[var14];
            var16 = var19.bind(var5)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var14 = var22[var14];
            var14 = var19.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.seV8ys;
            var14 = var16.bind(var18)(var14);
            var3['children'] = var14;
            var15 = var12.bind(var5)(var4, var3);
 446:
            if(!(var2 != var10)) { _fun0002_ip = 478; continue _fun0002 }
 450:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.PressableOpacity;
            _fun0002_ip = 482; continue _fun0002;
 478:
            var4 = _closure1_slot3;
 482:
            var3 = _closure1_slot10;
            var2 = {};
            var12 = 'radio';
            var2['accessibilityRole'] = var12;
            var12 = {};
            var12['selected'] = var13;
            var2['accessibilityState'] = var12;
            var12 = undefined;
            if(var13) { _fun0002_ip = 570; continue _fun0002 }
 513:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 13;
            var14 = var19[var13];
            var14 = var18.bind(var5)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var19[var13];
            var13 = var18.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.wY4y0d;
            var12 = var14.bind(var16)(var13);
 570:
            var2['accessibilityHint'] = var12;
            var12 = var20.accountSwitcherListItem;
            var2['style'] = var12;
            var2['delayLongPress'] = var11;
            var2['onPress'] = var10;
            var29 = var2;
            var28 = var7;
            var7 = copyDataProperties(var29, var28);
            var7 = new Array(3);
            var7[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var20.accountInfo;
            var9['style'] = var12;
            var14 = _closure1_slot9;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var12 = 15;
            var12 = var24[var12];
            var13 = var23.bind(var5)(var12);
            var12 = {};
            var12['user'] = var21;
            var12['guildId'] = var5;
            var13 = var14.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var14 = var20.accountListTag;
            var13['style'] = var14;
            var14 = {};
            var16 = var20.tagContainer;
            var14['style'] = var16;
            var19 = _closure1_slot9;
            var18 = _closure1_slot0;
            var22 = 12;
            var16 = var24[var22];
            var16 = var18.bind(var5)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-md/semibold', 'color': 'text-normal', 'style': null, 'lineClamp': 1};
            var20 = var20.username;
            var16['style'] = var20;
            var20 = 16;
            var20 = var24[var20];
            var24 = var23.bind(var5)(var20);
            var23 = var24.getUserTag;
            var20 = {};
            var25 = 'username';
            var20['mode'] = var25;
            var25 = 'always';
            if(!var17) { _fun0002_ip = 795; continue _fun0002 }
 789:
            var25 = 'never';
 795:
            var20['identifiable'] = var25;
            var20 = var23.bind(var24)(var21, var20);
            var16['children'] = var20;
            var18 = var19.bind(var5)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var17 = !var17;
            if(!var17) { _fun0002_ip = 843; continue _fun0002 }
 830:
            var18 = var21.isPomelo;
            var18 = var18.bind(var21)();
            var17 = !var18;
 843:
            if(!var17) { _fun0002_ip = 924; continue _fun0002 }
 846:
            var20 = _closure1_slot9;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var22];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var23 = var21.discriminator;
            var21 = global;
            var21 = var21.HermesInternal;
            var22 = var21.concat;
            var21 = '#';
            var21 = var22.bind(var21)(var23);
            var18['children'] = var21;
            var17 = var20.bind(var5)(var19, var18);
 924:
            var16[1] = var17;
            var14['children'] = var16;
            var16 = var11.bind(var5)(var10, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var13['children'] = var14;
            var13 = var11.bind(var5)(var10, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var7[1] = var9;
            if(!(var5 === var6)) { _fun0002_ip = 1002; continue _fun0002 }
 982:
            var10 = _closure1_slot9;
            var9 = _closure1_slot12;
            var8 = {};
            var8['user'] = var1;
            var6 = var10.bind(var5)(var9, var8);
 1002:
            var7[2] = var6;
            var6 = 'children';
            var2[var6] = var7;
            var1 = var1.id;
            var1 = var3.bind(var5)(var4, var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['AccountStatusIcon'] = var2;
    return var1;
})();