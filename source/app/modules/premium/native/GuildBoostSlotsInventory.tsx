// app/modules/premium/native/GuildBoostSlotsInventory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function GuildBoostSlotCooldown(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.cooldownEndsAt;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot14;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var7 = _closure1_slot4;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var1 = global;
                var3 = var1.Date;
                var4 = _closure2_slot0;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var3 = var4.bind(var7)(var1, var3);
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 11;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = 15000;
            var1 = var4.bind(var5)(var3, var1);
            var12 = var1.days;
            var11 = var1.hours;
            var10 = var1.minutes;
            var1 = var3.valueOf;
            var3 = var1.bind(var3)();
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var3 = var3 <= var1;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var2 = 12;
            var2 = var13[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var6 = var6.subscriptionSlotInfoCooldown;
            var2['style'] = var6;
            var6 = 13;
            var8 = var13[var6];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.NffSHx;
            var6 = {};
            var6['days'] = var12;
            var6['hours'] = var11;
            var6['minutes'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function GuildBoostSlotsInventoryRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var19 = var1.title;
            var16 = var1.subtitle;
            var12 = var1.action;
            var8 = var1.isLast;
            var1 = _closure1_slot14;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.subscriptionSlot;
            var1['style'] = var5;
            var9 = _closure1_slot12;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var10.subscriptionSlotInner;
            var5['style'] = var11;
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var11 = {};
            var15 = var10.subscriptionSlotInfo;
            var11['style'] = var15;
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var20 = _closure1_slot3;
            var15 = 12;
            var15 = var20[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var20 = var10.subscriptionSlotInfoTitle;
            var15['style'] = var20;
            var15['children'] = var19;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var11['children'] = var15;
            var13 = var14.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var5['children'] = var11;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.subscriptionSlotBorder;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function GuildBoostSlot(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var8 = var1.guildBoostSlot;
            var _closure2_slot0 = var8;
            var6 = var1.isLast;
            var1 = _closure1_slot14;
            var5 = undefined;
            var14 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var2 = var8.premiumGuildSubscription;
            var2 = var1 != var2;
            var4 = null;
            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = var8.premiumGuildSubscription;
            var4 = var2.id;
case 8:
            var2 = var1 != var4;
            var18 = null;
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.extractTimestamp;
            var18 = var2.bind(var3)(var4);
case 10:
            var4 = _closure1_slot11;
            var3 = _closure1_slot16;
            var2 = {};
            var9 = var1 != var18;
            var7 = null;
            if(!var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var10 = _closure1_slot0;
            var16 = _closure1_slot3;
            var9 = 13;
            var13 = var16[var9];
            var13 = var10.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.formatToPlainString;
            var9 = var16[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var10 = var9.ePe+Xl;
            var9 = {};
            var16 = global;
            var16 = var16.Date;
            var17 = var16.prototype;
            var17 = Object.create(var17, {constructor: {value: var16}});
            var21 = var17;
            var20 = var18;
            var16 = new var21[var16](var20, var19);
            var16 = var16 instanceof Object ? var16 : var17;
            var9['date'] = var16;
            var7 = var13.bind(var15)(var10, var9);
case 12:
            var2['title'] = var7;
            var7 = var8.cooldownEndsAt;
            var9 = var1 != var7;
            var7 = null;
            if(!var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var13 = _closure1_slot11;
            var10 = _closure1_slot15;
            var9 = {};
            var15 = var8.cooldownEndsAt;
            var9['cooldownEndsAt'] = var15;
            var7 = var13.bind(var5)(var10, var9);
case 14:
            var2['subtitle'] = var7;
            var7 = var8.isOnCooldown;
            var8 = var7.bind(var8)();
            var7 = null;
            if(var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = _closure1_slot11;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 15;
            var8 = var18[var8];
            var8 = var17.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var13 = 'button';
            var8['accessibilityRole'] = var13;
            var12 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openTransferModal;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8['onPress'] = var12;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var11 = 17;
            var11 = var18[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var14 = var14.subscriptionSlotInfoTransferText;
            var11['style'] = var14;
            var14 = 13;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.jqqLb2;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 16:
            var2['action'] = var7;
            var2['isLast'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function UnusedGuildBoostSlots(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.unusedSlots;
            var1 = _closure1_slot14;
            var4 = undefined;
            var19 = var1.bind(var4)();
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.cooldownEndsAt;
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var2 = global;
                    var3 = var2.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var7 = var4;
                    var6 = var5;
                    var3 = new var7[var3](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.valueOf;
                    var3 = var3.bind(var4)();
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 > var2;
case 18:
                    return var1;
                }
            };
            var8 = var2.bind(var3)(var1);
            var _closure2_slot0 = var8;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.cooldownEndsAt;
                    var1 = null;
                    var1 = var1 == var5;
                    if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var2 = global;
                    var3 = var2.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var7 = var4;
                    var6 = var5;
                    var3 = new var7[var3](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.valueOf;
                    var3 = var3.bind(var4)();
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 <= var2;
case 18:
                    return var1;
                }
            };
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var19.unusedSlots;
            var1['style'] = var5;
            var5 = var17.length;
            var12 = 0;
            var5 = var5 > var12;
            var7 = null;
            if(!var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var10 = _closure1_slot11;
            var9 = _closure1_slot16;
            var5 = {};
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var18 = 13;
            var11 = var22[var18];
            var11 = var21.bind(var4)(var11);
            var16 = var11.intl;
            var14 = var16.formatToPlainString;
            var11 = var22[var18];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var13 = var11.ewI23N;
            var11 = {};
            var17 = var17.length;
            var11['numSubscriptions'] = var17;
            var11 = var14.bind(var16)(var13, var11);
            var5['title'] = var11;
            var14 = _closure1_slot11;
            var11 = 15;
            var11 = var22[var11];
            var11 = var21.bind(var4)(var11);
            var13 = var11.PressableOpacity;
            var11 = {};
            var16 = 'button';
            var11['accessibilityRole'] = var16;
            var16 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.openApplyBoostModal;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11['onPress'] = var16;
            var17 = _closure1_slot11;
            var16 = _closure1_slot1;
            var15 = 17;
            var15 = var22[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var19 = var19.subscribeButtonText;
            var15['style'] = var19;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.7KyPoq;
            var18 = var19.bind(var20)(var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var11['children'] = var15;
            var11 = var14.bind(var4)(var13, var11);
            var5['action'] = var11;
            var11 = var8.length;
            var11 = var12 === var11;
            var5['isLast'] = var11;
            var7 = var10.bind(var4)(var9, var5);
case 20:
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 13;
                    var10 = var9[var6];
                    var2 = undefined;
                    var10 = var7.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.t;
                    var9 = var6.gDsyBw;
                    var6 = {};
                    var7 = 1;
                    var6['numSubscriptions'] = var7;
                    var6 = var10.bind(var11)(var9, var6);
                    var3['title'] = var6;
                    var9 = var1.cooldownEndsAt;
                    var6 = null;
                    var9 = var6 != var9;
                    if(!var9) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot15;
                    var8 = {};
                    var11 = var1.cooldownEndsAt;
                    var8['cooldownEndsAt'] = var11;
                    var6 = var10.bind(var2)(var9, var8);
case 22:
                    var3['subtitle'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.length;
                    var7 = var6 - var7;
                    var6 = arg2;
                    var6 = var6 === var7;
                    var3['isLast'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function BoostedGuildInfo(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var13 = var1.guild;
            var22 = var1.numGuildBoostSlots;
            var1 = _closure1_slot14;
            var5 = undefined;
            var18 = var1.bind(var5)();
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0008_ip = 24; continue _fun0008 }
case 25:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var18.guildInfo;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var18.guildInfoIcon;
            var6['style'] = var9;
            var11 = _closure1_slot11;
            var24 = _closure1_slot1;
            var23 = _closure1_slot3;
            var12 = 18;
            var9 = var23[var12];
            var10 = var24.bind(var5)(var9);
            var9 = {};
            var9['guild'] = var13;
            var19 = _closure1_slot0;
            var12 = var23[var12];
            var12 = var19.bind(var5)(var12);
            var12 = var12.GuildIconSizes;
            var12 = var12.NORMAL;
            var9['size'] = var12;
            var12 = false;
            var9['selected'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot5;
            var7 = {};
            var12 = _closure1_slot11;
            var15 = 12;
            var10 = var23[var15];
            var10 = var19.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'interactive-active'};
            var14 = var18.guildInfoName;
            var10['style'] = var14;
            var13 = var13.name;
            var10['children'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var18.guildInfoRowBottom;
            var11['style'] = var14;
            var20 = _closure1_slot11;
            var17 = _closure1_slot6;
            var14 = {};
            var21 = 19;
            var21 = var23[var21];
            var21 = var24.bind(var5)(var21);
            var14['source'] = var21;
            var21 = var18.guildInfoRowIcon;
            var14['style'] = var21;
            var17 = var20.bind(var5)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot11;
            var15 = var23[var15];
            var15 = var19.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            var18 = var18.guildInfoSubscriptionCount;
            var15['style'] = var18;
            var18 = 13;
            var20 = var23[var18];
            var20 = var19.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.format;
            var18 = var23[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.t;
            var19 = var18.bexfNz;
            var18 = {};
            var18['numSubscriptions'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function BoostedGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var11 = var1.guildBoostSlots;
            var _closure2_slot1 = var11;
            var1 = _closure1_slot14;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 20;
            var5 = var3[var1];
            var10 = var2.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var8.bind(var10)(var7, var5);
            var _closure2_slot2 = var15;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.theme;
                return var1;
            };
            var19 = var3.bind(var5)(var2, var1);
            var16 = null;
            var1 = var16 != var15;
            var17 = null;
            if(!var1) { _fun0009_ip = 26; continue _fun0009 }
case 27:
            var1 = var15.banner;
            var1 = var16 != var1;
            var17 = null;
            if(!var1) { _fun0009_ip = 26; continue _fun0009 }
case 28:
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 21;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getGuildBannerSource;
            var17 = var1.bind(var2)(var15);
case 26:
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 22;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSubscriptionPlaceholderPatternSource;
            var22 = var1.bind(var2)();
            if(!(var16 != var17)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
            var22 = var17;
case 29:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var21.boostedGuild;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot5;
            var5 = {};
            var10 = var21.subscriptionBody;
            var5['style'] = var10;
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var10 = {};
            var14 = var21.subscriptionImageView;
            var10['style'] = var14;
            var20 = _closure1_slot11;
            var18 = _closure1_slot6;
            var14 = {};
            var14['source'] = var22;
            var23 = var21.subscriptionImage;
            var22 = new Array(2);
            var22[0] = var23;
            var24 = var16 == var17;
            var23 = null;
            if(!var24) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var23 = var21.subscriptionImageFallback;
case 31:
            var22[1] = var23;
            var14['style'] = var22;
            var18 = var20.bind(var4)(var18, var14);
            var14 = new Array(3);
            var14[0] = var18;
            var17 = var16 != var17;
            var16 = null;
            if(!var17) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var20 = _closure1_slot11;
            var18 = _closure1_slot5;
            var17 = {};
            var21 = var21.subscriptionImageOverlay;
            var17['style'] = var21;
            var16 = var20.bind(var4)(var18, var17);
case 33:
            var14[1] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot1;
            var20 = _closure1_slot3;
            var16 = 23;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['guild'] = var15;
            var16['theme'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var14[2] = var16;
            var10['children'] = var14;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot19;
            var12 = {};
            var12['guild'] = var15;
            var15 = var11.length;
            var12['numGuildBoostSlots'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var10[1] = var12;
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var4 = _closure1_slot17;
                var3 = {};
                var6 = _closure2_slot2;
                var3['guild'] = var6;
                var3['guildBoostSlot'] = var1;
                var2 = _closure2_slot1;
                var6 = var2.length;
                var2 = 1;
                var6 = var6 - var2;
                var2 = arg2;
                var2 = var2 === var6;
                var3['isLast'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var14 = 1;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var16 = 4;
    var4 = var6[var16];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var17 = 8;
    var4 = var6[var17];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 32;
    var9['marginBottom'] = var12;
    var4['inventory'] = var9;
    var13 = 16;
    var9 = {'marginHorizontal': 16, 'marginBottom': 16};
    var4['header'] = var9;
    var9 = {};
    var10 = 9;
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.xs;
    var9['borderRadius'] = var18;
    var9['marginBottom'] = var13;
    var4['boostedGuild'] = var9;
    var9 = {};
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var18;
    var4['subscriptionBody'] = var9;
    var9 = {'backgroundColor': null, 'width': '100%', 'height': 112, 'overflow': 'hidden', 'alignItems': 'center', 'justifyContent': 'center'};
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var18;
    var4['subscriptionImageView'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var4['subscriptionImage'] = var9;
    var9 = {};
    var18 = 0.4;
    var9['opacity'] = var18;
    var4['subscriptionImageFallback'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'backgroundColor': null, 'opacity': 0.4};
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BLACK;
    var9['backgroundColor'] = var18;
    var4['subscriptionImageOverlay'] = var9;
    var9 = {'flexDirection': 'row', 'padding': 16};
    var4['guildInfo'] = var9;
    var9 = {};
    var9['marginRight'] = var17;
    var4['guildInfoIcon'] = var9;
    var9 = {};
    var17 = 10;
    var17 = var6[var17];
    var19 = var11.bind(var1)(var17);
    var18 = var15.DISPLAY_EXTRABOLD;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var17 = var15.INTERACTIVE_ACTIVE;
    var15 = 20;
    var21 = var19.bind(var1)(var18, var17, var15);
    var22 = var9;
    var15 = copyDataProperties(var22, var21);
    var15 = 'marginBottom';
    var9[var15] = var16;
    var4['guildInfoName'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['guildInfoRowBottom'] = var9;
    var9 = {'height': 12, 'width': 8, 'marginLeft': 2, 'marginRight': 8};
    var4['guildInfoRowIcon'] = var9;
    var9 = {};
    var9['lineHeight'] = var13;
    var4['guildInfoSubscriptionCount'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var15;
    var9['paddingLeft'] = var13;
    var4['subscriptionSlot'] = var9;
    var9 = {'alignItems': 'center', 'flexDirection': 'row', 'paddingRight': 16, 'paddingVertical': 12};
    var4['subscriptionSlotInner'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var15;
    var9['height'] = var14;
    var4['subscriptionSlotBorder'] = var9;
    var9 = {'flexShrink': 1, 'flexGrow': 1};
    var4['subscriptionSlotInfo'] = var9;
    var9 = {};
    var14 = 24;
    var9['lineHeight'] = var14;
    var4['subscriptionSlotInfoTitle'] = var9;
    var9 = {};
    var9['lineHeight'] = var13;
    var4['subscriptionSlotInfoCooldown'] = var9;
    var9 = {'color': null, 'fontSize': 16, 'fontWeight': '500', 'lineHeight': 20};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_BRAND_FOREGROUND;
    var9['color'] = var13;
    var4['subscriptionSlotInfoTransferText'] = var9;
    var9 = {};
    var9['marginBottom'] = var12;
    var4['unusedSlots'] = var9;
    var9 = {'color': null, 'fontSize': 16, 'fontWeight': '500', 'lineHeight': 20};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_LINK;
    var9['color'] = var10;
    var4['subscribeButtonText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/GuildBoostSlotsInventory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildBoostSlotsInventory() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = _closure1_slot14;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = function() {
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 24;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.fetchSubscriptions;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 25;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchGuildBoostSlots;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 20;
            var2 = var6[var1];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var7.bind(var8)(var4, var2);
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.boostSlots;
                return var1;
            };
            var3 = var4.bind(var7)(var3, var1);
            var4 = _closure1_slot1;
            var1 = 26;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.bind(var5)(var3);
            var3 = var4.groupBy;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.premiumGuildSubscription;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = '0';
                    if(!var3) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                    var1 = var2.guildId;
case 35:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var1);
            var1 = var3.value;
            var4 = var1.bind(var3)();
            var _closure2_slot0 = var4;
            var9 = 0;
            var15 = var4[var9];
            var1 = global;
            var3 = var1.Object;
            var1 = var3.keys;
            var4 = var1.bind(var3)(var4);
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = '0';
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var14 = var3.bind(var4)(var1);
            var1 = var14.length;
            if(!(var9 === var1)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var1 = null;
            var3 = var1 == var15;
            if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 37:
            var7 = null;
            var2 = var7 == var2;
            var1 = null;
            if(var2) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var16.inventory;
            var2['style'] = var6;
            var6 = var7 != var15;
            var8 = null;
            if(!var6) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var6 = var15.length;
            var6 = var6 > var9;
            var8 = null;
            if(!var6) { _fun0010_ip = 41; continue _fun0010 }
case 43:
            var13 = _closure1_slot11;
            var10 = _closure1_slot18;
            var6 = {};
            var6['unusedSlots'] = var15;
            var8 = var13.bind(var5)(var10, var6);
case 41:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var14.length;
            var8 = var8 > var9;
            var7 = null;
            if(!var8) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var8 = {};
            var15 = _closure1_slot11;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var11 = 12;
            var11 = var20[var11];
            var11 = var19.bind(var5)(var11);
            var13 = var11.Text;
            var11 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            var16 = var16.header;
            var11['style'] = var16;
            var16 = 13;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.gB9oQ0;
            var16 = var17.bind(var18)(var16);
            var11['children'] = var16;
            var13 = var15.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var14.map;
            var12 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot11;
                var3 = _closure1_slot20;
                var2 = {};
                var2['guildId'] = var5;
                var1 = _closure2_slot0;
                var1 = var1[var5];
                var2['guildBoostSlots'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var12 = var13.bind(var14)(var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 44:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 39:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();