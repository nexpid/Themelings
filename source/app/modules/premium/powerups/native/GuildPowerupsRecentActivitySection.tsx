// app/modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function GuildPowerupsRecentActivityRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.row;
            var3 = var1.isExpiringBoostsEnabled;
            var1 = var20.boost;
            var2 = var20.phase;
            var11 = var20.sortKey;
            var5 = _closure1_slot7;
            var4 = undefined;
            var10 = var5.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useGetBoostUserConfig;
            var5 = var5.bind(var6)(var1);
            var17 = var5.username;
            var18 = var5.roleColor;
            var16 = var5.roleColorStrings;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 7;
            var3 = var6[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.getRelativeTimestamp;
            var3 = true;
            var9 = var7.bind(var9)(var11, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = 6;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.calendarFormat;
            var3 = global;
            var3 = var3.Date;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var28 = var7;
            var27 = var11;
            var3 = new var28[var3](var27, var26);
            var3 = var3 instanceof Object ? var3 : var7;
            var9 = var5.bind(var6)(var3);
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var7 = var6.bind(var7)(var5, var3);
            var3 = 'username';
            if(!(var3 === var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = null;
            if(!(var3 == var18)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var22 = {};
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var3 = {};
            var3['color'] = var18;
            var22 = var3;
case 8:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var11 = var6[var3];
            var12 = var5.bind(var4)(var11);
            var11 = var12.useProcessColorStringsArray;
            var19 = var11.bind(var12)(var16);
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useIsRoleStyleAndRoleColorsEligibleForERC;
            var27 = var1.guildId;
            var26 = var1.userId;
            var28 = var6;
            var25 = var7;
            var24 = var19;
            var21 = var28[var5](var27, var26, var25, var24, var23);
            var1 = 'gave';
            var5 = var1 === var2;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = 'expiring';
            if(!(var1 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.BoostGemSlashIcon;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.BoostTier1Icon;
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 9:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.BoostGemIcon;
case 14:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var10.boostRowContainer;
            var1['style'] = var6;
            var6 = _closure1_slot5;
            if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = {};
            var12 = 'sm';
            var5['size'] = var12;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var12 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 4;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.GUILD_BOOSTING_PINK;
            var12['color'] = var13;
            var13 = 'sm';
            var12['size'] = var13;
            var5 = var12;
case 17:
            var6 = var6.bind(var4)(var11, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var14 = _closure1_slot6;
            var13 = _closure1_slot3;
            var12 = {};
            var6 = var10.boostMessage;
            var12['style'] = var6;
            var6 = 'dot';
            var6 = var6 === var7;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = null;
            var6 = var7 != var18;
case 18:
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = _closure1_slot5;
            var11 = _closure1_slot0;
            var23 = _closure1_slot2;
            var7 = 13;
            var7 = var23[var7];
            var7 = var11.bind(var4)(var7);
            var11 = var7.RoleDot;
            var7 = {};
            var23 = 'small';
            var7['size'] = var23;
            var7['color'] = var18;
            var7['colors'] = var16;
            var6 = var15.bind(var4)(var11, var7);
case 20:
            var15 = new Array(4);
            var15[0] = var6;
            var16 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 14;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'interactive-text-active', 'lineClamp': 1};
            var23 = var10.username;
            var18 = new Array(2);
            var18[0] = var23;
            var18[1] = var22;
            var6['style'] = var18;
            var18 = undefined;
            if(!var21) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = var19;
case 22:
            var6['gradientColors'] = var18;
            var6['children'] = var17;
            var6 = var16.bind(var4)(var7, var6);
            var15[1] = var6;
            var18 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = var6[var11];
            var16 = var7.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/medium', 'color': 'interactive-text-active', 'children': ' '};
            var16 = var18.bind(var4)(var17, var16);
            var15[2] = var16;
            var18 = _closure1_slot5;
            var16 = var6[var11];
            var16 = var7.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/medium', 'lineClamp': 1};
            var19 = var10.messageText;
            var16['style'] = var19;
            var21 = _closure1_slot1;
            var19 = 15;
            var19 = var6[var19];
            var19 = var21.bind(var4)(var19);
            var19 = var19.bind(var4)(var20);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[3] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5[1] = var12;
            var8 = _closure1_slot5;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var11 = 'text-xs/semibold';
            var6['variant'] = var11;
            var10 = var10.timestamp;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['sectionContainer'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var9['marginTop'] = var11;
    var4['boostContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['boostRowContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['boostMessage'] = var9;
    var9 = {'maxWidth': 170, 'flexShrink': 1};
    var4['username'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['messageText'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['timestamp'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsRecentActivitySection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = _closure1_slot7;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = 10;
            var12 = var2.bind(var5)(var4, var1);
            var2 = _closure1_slot0;
            var1 = 16;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useExpiringBoostsEnabled;
            var1 = 'GuildPowerupsRecentActivity';
            var1 = var2.bind(var3)(var1);
            var _closure2_slot0 = var1;
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var11.sectionContainer;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 14;
            var6 = var17[var6];
            var6 = var16.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'heading-lg/semibold', 'color': 'text-subtle'};
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.yM9Krm;
            var13 = var14.bind(var15)(var13);
            var6['children'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.boostContainer;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = _closure1_slot8;
                var3 = {};
                var3['row'] = var1;
                var2 = _closure2_slot0;
                var3['isExpiringBoostsEnabled'] = var2;
                var1 = var1.boost;
                var6 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'boost-';
                var2 = var2.bind(var1)(var6);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();