// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var17 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function AddBenefitButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.label;
            var7 = var1.onPress;
            var5 = var1.disabled;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var5 = false;
 26:
            var1 = _closure1_slot15;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 9;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = var10.card;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = var5;
            if(!var11) { _fun0001_ip = 88; continue _fun0001 }
 83:
            var11 = var10.disabled;
 88:
            var8[1] = var11;
            var1['style'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var8 = {};
            var8['disabled'] = var5;
            var1['accessibilityState'] = var8;
            var1['onPress'] = var7;
            var1['disabled'] = var5;
            var8 = _closure1_slot12;
            var13 = _closure1_slot1;
            var11 = _closure1_slot3;
            var5 = 10;
            var5 = var11[var5];
            var7 = var13.bind(var4)(var5);
            var5 = {};
            var12 = 11;
            var12 = var11[var12];
            var12 = var13.bind(var4)(var12);
            var5['source'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var6 = 12;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var10 = var10.addBenefitLabel;
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
    var1 = function getSectionLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot16;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0002_ip = 177; continue _fun0002 }
 23:
            var2 = _closure1_slot16;
            var2 = var2.INTANGIBLE;
            if(!(var2 !== var3)) { _fun0002_ip = 116; continue _fun0002 }
 37:
            var2 = _closure1_slot16;
            var2 = var2.EMOJI;
            if(!(var2 !== var3)) { _fun0002_ip = 55; continue _fun0002 }
 51:
            var2 = undefined;
            return var2;
 55:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XBkDoK;
            var2 = var3.bind(var4)(var2);
            return var2;
 116:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.8oxWpK;
            var2 = var3.bind(var4)(var2);
            return var2;
 177:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 13;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.LtfhAg;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getAddItemLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot16;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0003_ip = 177; continue _fun0003 }
 23:
            var2 = _closure1_slot16;
            var2 = var2.INTANGIBLE;
            if(!(var2 !== var3)) { _fun0003_ip = 116; continue _fun0003 }
 37:
            var2 = _closure1_slot16;
            var2 = var2.EMOJI;
            if(!(var2 !== var3)) { _fun0003_ip = 55; continue _fun0003 }
 51:
            var2 = undefined;
            return var2;
 55:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.0t1aND;
            var2 = var3.bind(var4)(var2);
            return var2;
 116:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.VinNZm;
            var2 = var3.bind(var4)(var2);
            return var2;
 177:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 13;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.WEg7PD;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function Separator() {
        var2 = _closure1_slot15;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var5.separator;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function ItemSeparator() {
        var1 = _closure1_slot15;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var8.itemSeparatorContainer;
        var1['style'] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot7;
        var5 = {};
        var8 = var8.itemSeparator;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function EmojiRowLabel(arg1) {
        var1 = arg1;
        var9 = var1.emoji;
        var1 = _closure1_slot15;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var11 = _closure1_slot12;
        var7 = _closure1_slot1;
        var10 = _closure1_slot3;
        var5 = 10;
        var5 = var10[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var12 = var12.emojiImage;
        var5['style'] = var12;
        var12 = {};
        var13 = 14;
        var13 = var10[var13];
        var15 = var7.bind(var4)(var13);
        var14 = var15.getEmojiURL;
        var13 = {};
        var16 = var9.id;
        var13['id'] = var16;
        var16 = var9.animated;
        var13['animated'] = var16;
        var16 = 48;
        var13['size'] = var16;
        var13 = var14.bind(var15)(var13);
        var12['uri'] = var13;
        var5['source'] = var12;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot12;
        var6 = 15;
        var6 = var10[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var9 = var9.name;
        var6['name'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ListFooterSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.interval;
            var22 = var2.onChangeTrialInterval;
            var _closure2_slot0 = var22;
            var17 = var2.trialActiveUserLimit;
            var16 = var2.onChangeTrialActiveUserLimit;
            var2 = _closure1_slot15;
            var4 = undefined;
            var23 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var2 = 16;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var24 = var2.bind(var4)();
            var2 = 17;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var13 = var2.options;
            var _closure2_slot1 = var13;
            var25 = var2.selectedOption;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var22;
            var2[1] = var13;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isDefault;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var3 = null;
                    var6 = var3 != var4;
                    var5 = 'Missing default trial duartion option';
                    var5 = var7.bind(var1)(var6, var5);
                    var2 = _closure2_slot0;
                    var5 = arg1;
                    if(!var5) { _fun0005_ip = 84; continue _fun0005 }
 79:
                    var3 = var4.value;
 84:
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var8 = var3.bind(var5)(var1, var2);
            var1 = null;
            var15 = var1 != var25;
            var18 = _closure1_slot0;
            var1 = 19;
            var1 = var9[var1];
            var2 = var18.bind(var4)(var1);
            var1 = var2.useRoleSubscriptionSettingsDisabled;
            var14 = var1.bind(var2)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var23.listFooterContainer;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 20;
            var5 = var9[var5];
            var5 = var18.bind(var4)(var5);
            var6 = var5.FormSwitchRow;
            var5 = {};
            var21 = 13;
            var11 = var9[var21];
            var11 = var18.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var21];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.+hTmdX;
            var9 = var11.bind(var12)(var9);
            var5['label'] = var9;
            var5['value'] = var15;
            var5['onValueChange'] = var8;
            var5['disabled'] = var14;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot7;
            var6 = {};
            if(!var15) { _fun0004_ip = 310; continue _fun0004 }
 305:
            var9 = undefined;
            if(!var14) { _fun0004_ip = 316; continue _fun0004 }
 310:
            var9 = var23.disabledSection;
 316:
            var6['style'] = var9;
            var18 = _closure1_slot12;
            var31 = _closure1_slot0;
            var26 = _closure1_slot3;
            var12 = 12;
            var9 = var26[var12];
            var9 = var31.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var20 = var23.listFooterText;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var23.listFooterSubtitle;
            var19[1] = var20;
            var9['style'] = var19;
            var19 = var26[var21];
            var19 = var31.bind(var4)(var19);
            var27 = var19.intl;
            var20 = var27.string;
            var19 = var26[var21];
            var19 = var31.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.urVijY;
            var19 = var20.bind(var27)(var19);
            var9['children'] = var19;
            var11 = var18.bind(var4)(var11, var9);
            var9 = new Array(7);
            var9[0] = var11;
            var27 = _closure1_slot12;
            var18 = _closure1_slot1;
            var19 = 21;
            var11 = var26[var19];
            var20 = var18.bind(var4)(var11);
            var11 = {};
            var28 = var24.header;
            var11['style'] = var28;
            var28 = var26[var21];
            var28 = var31.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var26[var21];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.m1KuWV;
            var28 = var29.bind(var30)(var28);
            var11['children'] = var28;
            var11 = var27.bind(var4)(var20, var11);
            var9[1] = var11;
            var27 = _closure1_slot12;
            var11 = var26[var12];
            var11 = var31.bind(var4)(var11);
            var20 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var29 = var23.listFooterSectionDescription;
            var28 = new Array(2);
            var28[0] = var29;
            var29 = var23.listFooterText;
            var28[1] = var29;
            var11['style'] = var28;
            var28 = var26[var21];
            var28 = var31.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var26[var21];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.NB9NLC;
            var28 = var29.bind(var30)(var28);
            var11['children'] = var28;
            var11 = var27.bind(var4)(var20, var11);
            var9[2] = var11;
            var20 = _closure1_slot12;
            var11 = 22;
            var11 = var26[var11];
            var18 = var18.bind(var4)(var11);
            var11 = {};
            var11['interval'] = var25;
            var11['onChange'] = var22;
            var11['trialIntervalOptions'] = var13;
            var13 = !var15;
            var22 = var13;
            if(!var15) { _fun0004_ip = 713; continue _fun0004 }
 710:
            var22 = var14;
 713:
            var11['disabled'] = var22;
            var11 = var20.bind(var4)(var18, var11);
            var9[3] = var11;
            var22 = _closure1_slot12;
            var11 = _closure1_slot1;
            var18 = _closure1_slot3;
            var19 = var18[var19];
            var20 = var11.bind(var4)(var19);
            var19 = {};
            var24 = var24.header;
            var19['style'] = var24;
            var24 = _closure1_slot0;
            var25 = var18[var21];
            var25 = var24.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var18[var21];
            var25 = var24.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25./JD9oa;
            var25 = var26.bind(var27)(var25);
            var19['children'] = var25;
            var19 = var22.bind(var4)(var20, var19);
            var9[4] = var19;
            var20 = _closure1_slot12;
            var12 = var18[var12];
            var12 = var24.bind(var4)(var12);
            var19 = var12.Text;
            var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var25 = var23.listFooterSectionDescription;
            var22 = new Array(2);
            var22[0] = var25;
            var23 = var23.listFooterText;
            var22[1] = var23;
            var12['style'] = var22;
            var22 = var18[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var18[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.Cg5eBg;
            var21 = var22.bind(var23)(var21);
            var12['children'] = var21;
            var12 = var20.bind(var4)(var19, var12);
            var9[5] = var12;
            var12 = _closure1_slot12;
            var10 = 23;
            var10 = var18[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['activeTrialUserlimit'] = var17;
            var10['onChange'] = var16;
            if(!var15) { _fun0004_ip = 977; continue _fun0004 }
 974:
            var13 = var14;
 977:
            var10['disabled'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[6] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function Content(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.onlyChannels;
            var3 = var1.onlyIntangible;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var1 = function GuildRoleSubscriptionTierBenefitsModalHeader(arg1) {
                var1 = arg1;
                var6 = var1.type;
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 16;
                var1 = var8[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var7 = var1.bind(var4)();
                var3 = _closure1_slot12;
                var1 = 21;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = var7.header;
                var1['style'] = var7;
                var5 = _closure1_slot18;
                var5 = var5.bind(var4)(var6);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var _closure2_slot18 = var1;
            var1 = _closure1_slot15;
            var15 = var1.bind(var4)();
            var _closure2_slot0 = var15;
            var1 = true;
            var16 = var1 === var3;
            var _closure2_slot1 = var16;
            var1 = var1 === var2;
            var _closure2_slot2 = var1;
            var22 = var16;
            if(var22) { _fun0006_ip = 132; continue _fun0006 }
 129:
            var22 = var1;
 132:
            _closure2_slot3 = var22;
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 24;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useEditStateContext;
            var2 = var2.bind(var5)();
            var26 = var2.editStateId;
            _closure2_slot4 = var26;
            var5 = var2.guildId;
            _closure2_slot5 = var5;
            var2 = 25;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSubscriptionListing;
            var2 = var2.bind(var3)(var26);
            var10 = null;
            var8 = var10 == var2;
            var3 = undefined;
            if(var8) { _fun0006_ip = 225; continue _fun0006 }
 219:
            var3 = var2.role_id;
 225:
            var8 = var10 != var3;
            var2 = null;
            if(!var8) { _fun0006_ip = 237; continue _fun0006 }
 234:
            var2 = var3;
 237:
            _closure2_slot6 = var2;
            var8 = _closure1_slot1;
            var24 = _closure1_slot3;
            var2 = 26;
            var2 = var24[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)(var5);
            var11 = var2.isFullServerGating;
            var2 = _closure1_slot9;
            var3 = var2.bind(var4)();
            var2 = _closure1_slot4;
            var12 = 1;
            var2 = var2.bind(var4)(var3, var12);
            var13 = 0;
            var9 = var2[var13];
            var14 = _closure1_slot2;
            var3 = 27;
            var2 = var24[var3];
            var17 = var14.bind(var4)(var2);
            var2 = var17.useChannelBenefits;
            var17 = var2.bind(var17)(var26);
            var2 = _closure1_slot4;
            var23 = 2;
            var2 = var2.bind(var4)(var17, var23);
            var21 = var2[var13];
            _closure2_slot7 = var21;
            var2 = var2[var12];
            _closure2_slot8 = var2;
            var2 = var24[var3];
            var17 = var14.bind(var4)(var2);
            var2 = var17.useIntangibleBenefits;
            var17 = var2.bind(var17)(var26);
            var2 = _closure1_slot4;
            var17 = var2.bind(var4)(var17, var23);
            var2 = var17[var13];
            _closure2_slot9 = var2;
            var17 = var17[var12];
            _closure2_slot10 = var17;
            var17 = var24[var3];
            var18 = var14.bind(var4)(var17);
            var17 = var18.useTierEmojiIds;
            var18 = var17.bind(var18)(var26, var5);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var18, var23);
            var25 = var17[var13];
            _closure2_slot11 = var25;
            var17 = var17[var12];
            _closure2_slot12 = var17;
            var17 = var24[var3];
            var18 = var14.bind(var4)(var17);
            var17 = var18.useTrialInterval;
            var18 = var17.bind(var18)(var26);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var18, var23);
            var20 = var17[var13];
            var19 = var17[var12];
            var17 = var24[var3];
            var18 = var14.bind(var4)(var17);
            var17 = var18.useTrialLimit;
            var18 = var17.bind(var18)(var26);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var18, var23);
            var18 = var17[var13];
            var17 = var17[var12];
            var3 = var24[var3];
            var14 = var14.bind(var4)(var3);
            var3 = var14.useChannelAccessFormat;
            var14 = var3.bind(var14)(var26, var5);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var14, var23);
            var14 = var3[var13];
            var13 = var3[var12];
            var3 = _closure1_slot8;
            var3 = var3.ALL_CHANNELS_ACCESS;
            var23 = var14 === var3;
            _closure2_slot13 = var23;
            var12 = _closure1_slot0;
            var3 = 19;
            var3 = var24[var3];
            var12 = var12.bind(var4)(var3);
            var3 = var12.useRoleSubscriptionSettingsDisabled;
            var12 = var3.bind(var12)();
            _closure2_slot14 = var12;
            var3 = function addBenefit(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = var2.ref_type;
                    var2 = _closure1_slot10;
                    var2 = var2.CHANNEL;
                    if(!(var3 !== var2)) { _fun0007_ip = 55; continue _fun0007 }
 32:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 76; continue _fun0007;
 55:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot15 = var3;
            var3 = 28;
            var3 = var24[var3];
            var3 = var8.bind(var4)(var3);
            var24 = var3.bind(var4)(var5);
            _closure2_slot16 = var24;
            var8 = _closure1_slot5;
            var5 = var8.useMemo;
            var3 = new Array(8);
            var3[0] = var25;
            var3[1] = var24;
            var3[2] = var16;
            var3[3] = var23;
            var3[4] = var1;
            var3[5] = var22;
            var3[6] = var21;
            var3[7] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure2_slot16;
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var3 = _closure2_slot11;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var1 = new Array(0);
                    var3 = _closure2_slot1;
                    if(var3) { _fun0008_ip = 41; continue _fun0008 }
 37:
                    var3 = _closure2_slot13;
 41:
                    if(var3) { _fun0008_ip = 81; continue _fun0008 }
 44:
                    var5 = var1.push;
                    var3 = {};
                    var6 = _closure1_slot16;
                    var6 = var6.CHANNEL;
                    var3['type'] = var6;
                    var6 = _closure2_slot7;
                    var3['data'] = var6;
                    var3 = var5.bind(var1)(var3);
 81:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0008_ip = 125; continue _fun0008 }
 88:
                    var5 = var1.push;
                    var3 = {};
                    var6 = _closure1_slot16;
                    var6 = var6.INTANGIBLE;
                    var3['type'] = var6;
                    var6 = _closure2_slot9;
                    var3['data'] = var6;
                    var3 = var5.bind(var1)(var3);
 125:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0008_ip = 165; continue _fun0008 }
 132:
                    var3 = var1.push;
                    var2 = {};
                    var5 = _closure1_slot16;
                    var5 = var5.EMOJI;
                    var2['type'] = var5;
                    var2['data'] = var4;
                    var2 = var3.bind(var1)(var2);
 165:
                    return var1;
                }
            };
            var8 = var5.bind(var8)(var2, var3);
            var2 = function handleEditBenefit(arg1, arg2) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showEditBenefitModal;
                var2 = {};
                var8 = _closure2_slot5;
                var2['guildId'] = var8;
                var2['benefit'] = var7;
                var7 = function onDelete() {
                    var2 = _closure3_slot0;
                    var4 = var2.ref_type;
                    var3 = _closure3_slot1;
                    var2 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg2;
                            var _closure5_slot0 = var2;
                            var2 = _closure1_slot10;
                            var3 = var2.CHANNEL;
                            var2 = arg1;
                            if(!(var2 !== var3)) { _fun0009_ip = 52; continue _fun0009 }
 29:
                            var4 = _closure2_slot10;
                            var3 = undefined;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.filter;
                                var1 = function(arg1, arg2) {
                                    var2 = _closure5_slot0;
                                    var1 = arg2;
                                    var1 = var1 !== var2;
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var4.bind(var3)(var2);
                            _fun0009_ip = 73; continue _fun0009;
 52:
                            var3 = _closure2_slot8;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.filter;
                                var1 = function(arg1, arg2) {
                                    var2 = _closure5_slot0;
                                    var1 = arg2;
                                    var1 = var1 !== var2;
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
 73:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
                };
                var2['onDelete'] = var7;
                var6 = function onSave(arg1) {
                    var4 = _closure3_slot1;
                    var3 = function(arg1, arg2) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = arg2;
                            var _closure5_slot1 = var3;
                            var3 = var2.ref_type;
                            var2 = _closure1_slot10;
                            var2 = var2.CHANNEL;
                            if(!(var3 !== var2)) { _fun0010_ip = 62; continue _fun0010 }
 39:
                            var4 = _closure2_slot10;
                            var3 = undefined;
                            var2 = function(arg1) {
                                var1 = new Array(0);
                                var5 = arg1;
                                var4 = 0;
                                var6 = var1;
                                var2 = arraySpread(var6, var5, var4);
                                var3 = _closure5_slot1;
                                var2 = _closure5_slot0;
                                var1[var3] = var2;
                                return var1;
                            };
                            var2 = var4.bind(var3)(var2);
                            _fun0010_ip = 83; continue _fun0010;
 62:
                            var3 = _closure2_slot8;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var1 = new Array(0);
                                var5 = arg1;
                                var4 = 0;
                                var6 = var1;
                                var2 = arraySpread(var6, var5, var4);
                                var3 = _closure5_slot1;
                                var2 = _closure5_slot0;
                                var1[var3] = var2;
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
 83:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var2['onSave'] = var6;
                var5 = _closure2_slot4;
                var2['listingId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            _closure2_slot17 = var2;
            var5 = null;
            if(var16) { _fun0006_ip = 758; continue _fun0006 }
 717:
            var5 = null;
            if(var1) { _fun0006_ip = 758; continue _fun0006 }
 722:
            var3 = _closure1_slot12;
            var2 = _closure1_slot23;
            var1 = {};
            var1['interval'] = var20;
            var1['onChangeTrialInterval'] = var19;
            var1['trialActiveUserLimit'] = var18;
            var1['onChangeTrialActiveUserLimit'] = var17;
            var5 = var3.bind(var4)(var2, var1);
 758:
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1['sections'] = var8;
            var8 = var15.listContainer;
            var1['contentContainerStyle'] = var8;
            var8 = function renderItem(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var _closure3_slot0 = var2;
                    var4 = var1.index;
                    var _closure3_slot1 = var4;
                    var1 = var1.section;
                    var1 = var1.data;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var1 = var4 === var1;
                    var3 = _closure2_slot0;
                    var3 = var3.item;
                    var8 = new Array(3);
                    var8[0] = var3;
                    var3 = 0;
                    var3 = var3 === var4;
                    if(!var3) { _fun0011_ip = 88; continue _fun0011 }
 78:
                    var4 = _closure2_slot0;
                    var3 = var4.itemFirst;
 88:
                    var8[1] = var3;
                    if(!var1) { _fun0011_ip = 105; continue _fun0011 }
 95:
                    var3 = _closure2_slot0;
                    var1 = var3.itemLast;
 105:
                    var8[2] = var1;
                    var1 = 'roles';
                    var1 = var1 in var2;
                    var5 = _closure1_slot12;
                    if(var1) { _fun0011_ip = 291; continue _fun0011 }
 130:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 9;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var10 = new Array(2);
                    var10[0] = var8;
                    var11 = _closure2_slot14;
                    if(!var11) { _fun0011_ip = 178; continue _fun0011 }
 169:
                    var12 = _closure2_slot0;
                    var11 = var12.disabled;
 178:
                    var10[1] = var11;
                    var1['style'] = var10;
                    var10 = 'button';
                    var1['accessibilityRole'] = var10;
                    var10 = {};
                    var11 = _closure2_slot14;
                    var10['disabled'] = var11;
                    var1['accessibilityState'] = var10;
                    var7 = function onPress() {
                        var4 = _closure2_slot17;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var7;
                    var7 = _closure2_slot14;
                    var1['disabled'] = var7;
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var7 = 30;
                    var7 = var12[var7];
                    var7 = var10.bind(var4)(var7);
                    var10 = var7.GuildRoleSubscriptionBenefitPreview;
                    var7 = {};
                    var12 = _closure2_slot5;
                    var7['guildId'] = var12;
                    var7['benefit'] = var2;
                    var7 = var11.bind(var4)(var10, var7);
                    var1['children'] = var7;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0011_ip = 362; continue _fun0011;
 291:
                    var4 = _closure1_slot7;
                    var3 = {};
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot14;
                    if(!var8) { _fun0011_ip = 321; continue _fun0011 }
 312:
                    var9 = _closure2_slot0;
                    var8 = var9.disabled;
 321:
                    var7[1] = var8;
                    var3['style'] = var7;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot22;
                    var6 = {};
                    var6['emoji'] = var2;
                    var2 = undefined;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 362:
                    return var1;
                }
            };
            var1['renderItem'] = var8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 31;
            var8 = var18[var8];
            var8 = var17.bind(var4)(var8);
            var8 = var8.getBenefitKey;
            var1['keyExtractor'] = var8;
            var8 = null;
            if(var16) { _fun0006_ip = 896; continue _fun0006 }
 832:
            if(var11) { _fun0006_ip = 840; continue _fun0006 }
 835:
            var8 = null;
            if(!var9) { _fun0006_ip = 896; continue _fun0006 }
 840:
            var11 = _closure1_slot12;
            var10 = _closure1_slot1;
            var16 = _closure1_slot3;
            var9 = 32;
            var9 = var16[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var15 = var15.allChannelsSwitch;
            var9['style'] = var15;
            var9['channelAccessFormat'] = var14;
            var9['setChannelAccessFormat'] = var13;
            var9['disabled'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 896:
            var1['ListHeaderComponent'] = var8;
            var8 = function renderSectionHeader(arg1) {
                var1 = arg1;
                var1 = var1.section;
                var1 = var1.type;
                var4 = _closure1_slot12;
                var3 = _closure2_slot18;
                var2 = {};
                var2['type'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['renderSectionHeader'] = var8;
            var8 = false;
            var1['stickySectionHeadersEnabled'] = var8;
            var7 = function renderSectionFooter(arg1) {
                var1 = arg1;
                var1 = var1.section;
                var7 = var1.type;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot12;
                var3 = _closure1_slot17;
                var2 = {};
                var6 = _closure1_slot19;
                var1 = undefined;
                var6 = var6.bind(var1)(var7);
                var2['label'] = var6;
                var5 = function onPress() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = _closure1_slot16;
                        var2 = var2.EMOJI;
                        if(!(var3 !== var2)) { _fun0012_ip = 130; continue _fun0012 }
 24:
                        var2 = _closure1_slot16;
                        var2 = var2.CHANNEL;
                        if(!(var3 !== var2)) { _fun0012_ip = 50; continue _fun0012 }
 38:
                        var2 = _closure1_slot10;
                        var6 = var2.INTANGIBLE;
                        _fun0012_ip = 60; continue _fun0012;
 50:
                        var2 = _closure1_slot10;
                        var6 = var2.CHANNEL;
 60:
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.showCreateBenefitModal;
                        var2 = {};
                        var7 = _closure2_slot5;
                        var2['guildId'] = var7;
                        var2['type'] = var6;
                        var6 = _closure2_slot15;
                        var2['onSave'] = var6;
                        var5 = _closure2_slot4;
                        var2['listingId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun0012_ip = 212; continue _fun0012;
 130:
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.showEditEmojisModal;
                        var1 = {};
                        var5 = _closure2_slot5;
                        var1['guildId'] = var5;
                        var5 = _closure2_slot6;
                        var1['subscriptionRoleId'] = var5;
                        var5 = _closure2_slot11;
                        var1['initialTierEmojiIds'] = var5;
                        var5 = _closure2_slot12;
                        var1['onSave'] = var5;
                        var4 = _closure2_slot4;
                        var1['listingId'] = var4;
                        var1 = var2.bind(var3)(var1);
 212:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPress'] = var5;
                var5 = _closure2_slot14;
                var2['disabled'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['renderSectionFooter'] = var7;
            var7 = _closure1_slot21;
            var1['ItemSeparatorComponent'] = var7;
            var6 = _closure1_slot20;
            var1['SectionSeparatorComponent'] = var6;
            var1['ListFooterComponent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function GuildRoleSubscriptionTierBenefitsTab(arg1) {
        var1 = arg1;
        var5 = var1.onlyChannels;
        var1 = var1.onlyIntangible;
        var4 = _closure1_slot12;
        var3 = _closure1_slot24;
        var2 = {};
        var2['onlyChannels'] = var5;
        var2['onlyIntangible'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot25 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var17.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SectionList;
    var _closure1_slot6 = var8;
    var5 = var5.View;
    var _closure1_slot7 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AllChannelAccessOptions;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useGroupIsFullGateState;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot10 = var8;
    var5 = var5.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot12 = var8;
    var8 = var5.jsxs;
    var _closure1_slot13 = var8;
    var5 = var5.Fragment;
    var _closure1_slot14 = var5;
    var5 = 7;
    var5 = var7[var5];
    var12 = var6.bind(var1)(var5);
    var8 = var12.createStyles;
    var5 = {};
    var13 = {};
    var16 = 16;
    var13['paddingBottom'] = var16;
    var5['listContainer'] = var13;
    var13 = {'backgroundColor': null, 'borderRadius': null, 'alignSelf': 'stretch', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'padding': 16, 'marginHorizontal': 16};
    var15 = 8;
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var13['backgroundColor'] = var14;
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderRadius'] = var14;
    var5['card'] = var13;
    var13 = {'backgroundColor': null, 'alignSelf': 'stretch', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'padding': 16, 'marginHorizontal': 16};
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var13['backgroundColor'] = var14;
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.none;
    var13['borderRadius'] = var14;
    var5['item'] = var13;
    var13 = {};
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderTopLeftRadius'] = var14;
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderTopRightRadius'] = var14;
    var5['itemFirst'] = var13;
    var13 = {};
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderBottomLeftRadius'] = var14;
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13['borderBottomRightRadius'] = var14;
    var5['itemLast'] = var13;
    var13 = {'backgroundColor': null, 'alignSelf': 'stretch', 'marginHorizontal': 16};
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var13['backgroundColor'] = var14;
    var5['itemSeparatorContainer'] = var13;
    var13 = {'backgroundColor': null, 'alignSelf': 'stretch', 'marginStart': 54, 'height': 1};
    var14 = var7[var15];
    var14 = var17.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var13['backgroundColor'] = var14;
    var5['itemSeparator'] = var13;
    var13 = {};
    var13['marginHorizontal'] = var16;
    var5['listFooterText'] = var13;
    var13 = {};
    var13['marginTop'] = var15;
    var5['listFooterSubtitle'] = var13;
    var13 = {};
    var13['marginBottom'] = var16;
    var5['listFooterSectionDescription'] = var13;
    var13 = {};
    var14 = 24;
    var13['marginVertical'] = var14;
    var5['listFooterContainer'] = var13;
    var13 = {};
    var14 = 0.5;
    var13['opacity'] = var14;
    var5['disabledSection'] = var13;
    var13 = {'marginHorizontal': 16, 'marginTop': 24};
    var5['allChannelsSwitch'] = var13;
    var13 = {};
    var13['marginStart'] = var16;
    var5['addBenefitLabel'] = var13;
    var13 = {};
    var13['height'] = var15;
    var5['separator'] = var13;
    var13 = {'width': 24, 'height': 24, 'marginRight': 16};
    var5['emojiImage'] = var13;
    var13 = {};
    var13['opacity'] = var14;
    var5['disabled'] = var13;
    var5 = var8.bind(var12)(var5);
    var _closure1_slot15 = var5;
    var5 = {};
    var5['CHANNEL'] = var11;
    var8 = 'CHANNEL';
    var5[var11] = var8;
    var5['INTANGIBLE'] = var10;
    var8 = 'INTANGIBLE';
    var5[var10] = var8;
    var5['EMOJI'] = var9;
    var8 = 'EMOJI';
    var5[var9] = var8;
    var _closure1_slot16 = var5;
    var5 = 34;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildRoleSubscriptionTierBenefitsTab'] = var4;
    var4 = function GuildRoleSubscriptionTierChannelBenefitsModal(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var10 = _closure1_slot3;
        var1 = 33;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var9 = _closure1_slot0;
        var6 = 13;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.0eV/GR;
        var7 = var8.bind(var11)(var7);
        var1['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.iMSIWl;
        var6 = var7.bind(var8)(var6);
        var1['description'] = var6;
        var8 = true;
        var1['canProceedToNextStep'] = var8;
        var6 = _closure1_slot11;
        var6 = var6.INTANGIBLE_BENEFITS;
        var1['nextStep'] = var6;
        var12 = arg1;
        var13 = var1;
        var6 = copyDataProperties(var13, var12);
        var7 = false;
        var6 = 'scrollable';
        var1[var6] = var7;
        var7 = _closure1_slot12;
        var6 = _closure1_slot25;
        var5 = {};
        var5['onlyChannels'] = var8;
        var6 = var7.bind(var3)(var6, var5);
        var5 = 'children';
        var1[var5] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['GuildRoleSubscriptionTierChannelBenefitsModal'] = var4;
    var2 = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var10 = _closure1_slot3;
        var1 = 33;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var9 = _closure1_slot0;
        var6 = 13;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.+h9nJC;
        var7 = var8.bind(var11)(var7);
        var1['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.oGS4tL;
        var6 = var7.bind(var8)(var6);
        var1['description'] = var6;
        var8 = true;
        var1['canProceedToNextStep'] = var8;
        var6 = _closure1_slot11;
        var6 = var6.DESIGN;
        var1['nextStep'] = var6;
        var12 = arg1;
        var13 = var1;
        var6 = copyDataProperties(var13, var12);
        var7 = false;
        var6 = 'scrollable';
        var1[var6] = var7;
        var7 = _closure1_slot12;
        var6 = _closure1_slot25;
        var5 = {};
        var5['onlyIntangible'] = var8;
        var6 = var7.bind(var3)(var6, var5);
        var5 = 'children';
        var1[var5] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['GuildRoleSubscriptionTierIntangibleBenefitsModal'] = var2;
    return var1;
})();