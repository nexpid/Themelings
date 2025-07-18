// app/modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function customScoreToIndex(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 8;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.ICYMICustomScore;
            var3 = var3.LESS;
            if(!(var3 !== var2)) { _fun0001_ip = 87; continue _fun0001 }
 44:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ICYMICustomScore;
            var1 = var1.MORE;
            if(!(var1 !== var2)) { _fun0001_ip = 82; continue _fun0001 }
 77:
            var1 = 1;
            return var1;
 82:
            var1 = 2;
            return var1;
 87:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function ContentSettingsControl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.initialValue;
            var2 = var1.onValueUpdated;
            var _closure2_slot0 = var2;
            var7 = var1.disabled;
            var1 = _closure1_slot10;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)(var3);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var11 = 0;
            var9 = var2[var11];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot1 = var1;
            var1 = {};
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var2 = var6[var3];
            var2 = var16.bind(var4)(var2);
            var12 = var2.intl;
            var8 = var12.string;
            var2 = var6[var3];
            var2 = var16.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.rdt65O;
            var2 = var8.bind(var12)(var2);
            var1['label'] = var2;
            var2 = '-1';
            var1['id'] = var2;
            var13 = _closure1_slot8;
            var17 = _closure1_slot1;
            var2 = 10;
            var8 = var6[var2];
            var12 = var17.bind(var4)(var8);
            var8 = {};
            var14 = 11;
            var14 = var6[var14];
            var14 = var17.bind(var4)(var14);
            var8['source'] = var14;
            var17 = var15.icon;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = 8;
            var6 = var6[var17];
            var6 = var16.bind(var4)(var6);
            var6 = var6.ICYMICustomScore;
            var18 = var6.LESS;
            var6 = null;
            var16 = null;
            if(!(var9 === var18)) { _fun0002_ip = 241; continue _fun0002 }
 235:
            var16 = var15.iconSelected;
 241:
            var14[1] = var16;
            var8['style'] = var14;
            var8 = var13.bind(var4)(var12, var8);
            var1['icon'] = var8;
            var1['page'] = var6;
            var8 = new Array(3);
            var8[0] = var1;
            var1 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = var18[var3];
            var12 = var19.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var12 = var18[var3];
            var12 = var19.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.SnrG09;
            var12 = var13.bind(var14)(var12);
            var1['label'] = var12;
            var12 = '0';
            var1['id'] = var12;
            var14 = _closure1_slot8;
            var20 = _closure1_slot1;
            var12 = var18[var2];
            var13 = var20.bind(var4)(var12);
            var12 = {};
            var16 = 12;
            var16 = var18[var16];
            var16 = var20.bind(var4)(var16);
            var12['source'] = var16;
            var20 = var15.icon;
            var16 = new Array(2);
            var16[0] = var20;
            var18 = var18[var17];
            var18 = var19.bind(var4)(var18);
            var18 = var18.ICYMICustomScore;
            var19 = var18.DEFAULT;
            var18 = null;
            if(!(var9 === var19)) { _fun0002_ip = 421; continue _fun0002 }
 415:
            var18 = var15.iconSelected;
 421:
            var16[1] = var18;
            var12['style'] = var16;
            var12 = var14.bind(var4)(var13, var12);
            var1['icon'] = var12;
            var1['page'] = var6;
            var8[1] = var1;
            var1 = {};
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = var14[var3];
            var12 = var16.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var14[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.Rxe3jI;
            var3 = var12.bind(var13)(var3);
            var1['label'] = var3;
            var3 = '1';
            var1['id'] = var3;
            var12 = _closure1_slot8;
            var18 = _closure1_slot1;
            var2 = var14[var2];
            var3 = var18.bind(var4)(var2);
            var2 = {};
            var13 = 13;
            var13 = var14[var13];
            var13 = var18.bind(var4)(var13);
            var2['source'] = var13;
            var18 = var15.icon;
            var13 = new Array(2);
            var13[0] = var18;
            var14 = var14[var17];
            var14 = var16.bind(var4)(var14);
            var14 = var14.ICYMICustomScore;
            var16 = var14.MORE;
            var14 = null;
            if(!(var9 === var16)) { _fun0002_ip = 597; continue _fun0002 }
 591:
            var14 = var15.iconSelected;
 597:
            var13[1] = var14;
            var2['style'] = var13;
            var2 = var12.bind(var4)(var3, var2);
            var1['icon'] = var2;
            var1['page'] = var6;
            var8[2] = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useSegmentedControlState;
            var1 = {};
            var1['pageWidth'] = var11;
            var10 = function onSetActiveIndex(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 8;
                    var3 = var1[var5];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.ICYMICustomScore;
                    var3 = var3.DEFAULT;
                    var4 = 0;
                    if(!(var4 !== var6)) { _fun0003_ip = 84; continue _fun0003 }
 46:
                    var4 = 2;
                    if(!(var4 === var6)) { _fun0003_ip = 113; continue _fun0003 }
 53:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var5];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.ICYMICustomScore;
                    var3 = var4.MORE;
                    _fun0003_ip = 113; continue _fun0003;
 84:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ICYMICustomScore;
                    var3 = var2.LESS;
 113:
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var1)(var3);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var1['onSetActiveIndex'] = var10;
            var1['items'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.bind(var4)(var9);
            var1['defaultIndex'] = var8;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = null;
            if(!var7) { _fun0002_ip = 727; continue _fun0002 }
 708:
            var9 = {};
            var10 = 0.7;
            var9['opacity'] = var10;
            var6 = var9;
 727:
            var1['style'] = var6;
            var6 = 'auto';
            if(!var7) { _fun0002_ip = 742; continue _fun0002 }
 738:
            var6 = 'none';
 742:
            var1['pointerEvents'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 15;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SegmentedControl;
            var5 = {};
            var9 = 'experimental_Large';
            var5['variant'] = var9;
            var5['state'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginVertical'] = var12;
    var4['customScoreWrapper'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['marginHorizontal'] = var12;
    var4['warningText'] = var9;
    var9 = {'width': 24, 'height': 24};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9['tintColor'] = var12;
    var4['icon'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var9['tintColor'] = var12;
    var4['iconSelected'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginTop'] = var10;
    var4['muted'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildScoreSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var21 = var2.guild;
            var6 = var21.id;
            var _closure2_slot0 = var6;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 16;
            var2 = var12[var2];
            var4 = undefined;
            var8 = var14.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCustomGuildScore;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var5.bind(var8)(var3, var2);
            var2 = 8;
            var3 = var12[var2];
            var5 = var14.bind(var4)(var3);
            var3 = var5.numberToCustomScore;
            var20 = var3.bind(var5)(var8);
            var _closure2_slot1 = var20;
            var2 = var12[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            var19 = var20 === var2;
            var8 = _closure1_slot4;
            var5 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.customScoreGuild;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var7 = var9[var5];
                    var8 = var6.bind(var1)(var7);
                    var7 = var8.customScoreToNumber;
                    var5 = var9[var5];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.ICYMICustomScore;
                    var5 = arg1;
                    if(var5) { _fun0005_ip = 104; continue _fun0005 }
 91:
                    var5 = var6.MUTED;
                    var5 = var7.bind(var8)(var5);
                    _fun0005_ip = 115; continue _fun0005;
 104:
                    var6 = var6.DEFAULT;
                    var5 = var7.bind(var8)(var6);
 115:
                    var2['guildScore'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var18 = var5.bind(var8)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var6;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = arg1;
                    var1 = _closure2_slot1;
                    if(!(var1 !== var6)) { _fun0006_ip = 92; continue _fun0006 }
 14:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.customScoreGuild;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var5 = _closure1_slot0;
                    var4 = 8;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.customScoreToNumber;
                    var4 = var4.bind(var5)(var6);
                    var1['guildScore'] = var4;
                    var1 = var2.bind(var3)(var1);
 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = _closure1_slot8;
            var6 = 18;
            var5 = var12[var6];
            var5 = var14.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var13 = 9;
            var11 = var12[var13];
            var11 = var14.bind(var4)(var11);
            var16 = var11.intl;
            var15 = var16.string;
            var11 = var12[var13];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Clq6kp;
            var11 = var15.bind(var16)(var11);
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(5);
            var5[0] = var8;
            var11 = _closure1_slot8;
            var8 = var12[var6];
            var8 = var14.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var15 = var12[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var12 = var12[var13];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var14 = var12.0DhU2N;
            var12 = {};
            var21 = var21.name;
            var12['guildName'] = var21;
            var12 = var15.bind(var16)(var14, var12);
            var8['children'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var8 = null;
            if(var19) { _fun0004_ip = 476; continue _fun0004 }
 420:
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var9 = {};
            var14 = var10.customScoreWrapper;
            var9['style'] = var14;
            var16 = _closure1_slot8;
            var15 = _closure1_slot12;
            var14 = {};
            var14['initialValue'] = var20;
            var14['onValueUpdated'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var12.bind(var4)(var11, var9);
 476:
            var5[2] = var8;
            var14 = _closure1_slot8;
            var11 = _closure1_slot5;
            var8 = {};
            var9 = var19;
            if(!var9) { _fun0004_ip = 502; continue _fun0004 }
 496:
            var9 = var10.muted;
 502:
            var8['style'] = var9;
            var17 = _closure1_slot8;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 19;
            var15 = var9[var15];
            var15 = var12.bind(var4)(var15);
            var16 = var15.TableSwitchRow;
            var15 = {};
            var19 = !var19;
            var15['value'] = var19;
            var15['onValueChange'] = var18;
            var18 = var9[var13];
            var18 = var12.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var9[var13];
            var18 = var12.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.oujX7+;
            var18 = var19.bind(var20)(var18);
            var15['label'] = var18;
            var18 = true;
            var15['start'] = var18;
            var15['end'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var8['children'] = var15;
            var8 = var14.bind(var4)(var11, var8);
            var5[3] = var8;
            var8 = _closure1_slot8;
            var6 = var9[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var10 = var10.warningText;
            var6['style'] = var10;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.vRVs09;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildScoreSettings'] = var4;
    var2 = function ChannelScoreSettings(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var2 = var3.guild;
            var9 = var3.channel;
            var6 = var2.id;
            var _closure2_slot0 = var6;
            var8 = var9.id;
            var _closure2_slot1 = var8;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 16;
            var2 = var12[var3];
            var4 = undefined;
            var13 = var14.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot7;
            var10 = new Array(2);
            var10[0] = var2;
            var5 = _closure1_slot6;
            var10[1] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = _closure1_slot7;
                    var5 = var6.getCustomChannelScore;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var5.bind(var6)(var4, var1);
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 8;
                    var4 = var4[var6];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.ICYMICustomScore;
                    var4 = var4.UNKNOWN;
                    if(!(var1 === var4)) { _fun0008_ip = 135; continue _fun0008 }
 68:
                    var8 = _closure1_slot6;
                    var7 = var8.isChannelMuted;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var7.bind(var8)(var4, var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.ICYMICustomScore;
                    if(var2) { _fun0008_ip = 126; continue _fun0008 }
 118:
                    var2 = var3.DEFAULT;
                    _fun0008_ip = 132; continue _fun0008;
 126:
                    var2 = var3.MUTED;
 132:
                    var1 = var2;
 135:
                    return var1;
                }
            };
            var22 = var11.bind(var13)(var10, var5);
            var _closure2_slot2 = var22;
            var10 = _closure1_slot1;
            var5 = 20;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var18 = true;
            var23 = var5.bind(var4)(var9, var18);
            var3 = var12[var3];
            var9 = var14.bind(var4)(var3);
            var5 = var9.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCustomGuildScore;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var5.bind(var9)(var3, var2);
            var2 = 8;
            var3 = var12[var2];
            var5 = var14.bind(var4)(var3);
            var3 = var5.numberToCustomScore;
            var5 = var3.bind(var5)(var9);
            var3 = var12[var2];
            var3 = var14.bind(var4)(var3);
            var3 = var3.ICYMICustomScore;
            var3 = var3.MUTED;
            var19 = var5 === var3;
            var2 = var12[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            var21 = var22 === var2;
            var9 = _closure1_slot4;
            var5 = var9.useCallback;
            var3 = new Array(3);
            var3[0] = var22;
            var3[1] = var6;
            var3[2] = var8;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var7 = arg1;
                    var1 = _closure2_slot2;
                    if(!(var1 !== var7)) { _fun0009_ip = 115; continue _fun0009 }
 14:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 17;
                    var1 = var9[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.customScoreGuild;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var5 = {};
                    var6 = _closure2_slot1;
                    var5['channelId'] = var6;
                    var6 = _closure1_slot0;
                    var4 = 8;
                    var4 = var9[var4];
                    var6 = var6.bind(var8)(var4);
                    var4 = var6.customScoreToNumber;
                    var4 = var4.bind(var6)(var7);
                    var5['score'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['channelScores'] = var4;
                    var1 = var2.bind(var3)(var1);
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var5.bind(var9)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var6;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.customScoreGuild;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var6 = {};
                    var7 = _closure2_slot1;
                    var6['channelId'] = var7;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 8;
                    var8 = var10[var5];
                    var9 = var7.bind(var1)(var8);
                    var8 = var9.customScoreToNumber;
                    var5 = var10[var5];
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.ICYMICustomScore;
                    var5 = arg1;
                    if(var5) { _fun0010_ip = 114; continue _fun0010 }
 101:
                    var5 = var7.MUTED;
                    var5 = var8.bind(var9)(var5);
                    _fun0010_ip = 125; continue _fun0010;
 114:
                    var7 = var7.DEFAULT;
                    var5 = var8.bind(var9)(var7);
 125:
                    var6['score'] = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['channelScores'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var20 = var3.bind(var5)(var1, var2);
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = _closure1_slot8;
            var6 = 18;
            var5 = var12[var6];
            var5 = var14.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var13 = 9;
            var11 = var12[var13];
            var11 = var14.bind(var4)(var11);
            var16 = var11.intl;
            var15 = var16.string;
            var11 = var12[var13];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.0jRosr;
            var11 = var15.bind(var16)(var11);
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(5);
            var5[0] = var8;
            var11 = _closure1_slot8;
            var8 = var12[var6];
            var8 = var14.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var15 = var12[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var12 = var12[var13];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var14 = var12.KzkF1t;
            var12 = {};
            var12['channelName'] = var23;
            var12 = var15.bind(var16)(var14, var12);
            var8['children'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var8 = null;
            if(var21) { _fun0007_ip = 587; continue _fun0007 }
 527:
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var9 = {};
            var14 = var10.customScoreWrapper;
            var9['style'] = var14;
            var16 = _closure1_slot8;
            var15 = _closure1_slot12;
            var14 = {};
            var14['disabled'] = var19;
            var14['initialValue'] = var22;
            var14['onValueUpdated'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var12.bind(var4)(var11, var9);
 587:
            var5[2] = var8;
            var14 = _closure1_slot8;
            var11 = _closure1_slot5;
            var8 = {};
            var9 = var21;
            if(!var9) { _fun0007_ip = 613; continue _fun0007 }
 607:
            var9 = var10.muted;
 613:
            var8['style'] = var9;
            var17 = _closure1_slot8;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 19;
            var15 = var9[var15];
            var15 = var12.bind(var4)(var15);
            var16 = var15.TableSwitchRow;
            var15 = {};
            var21 = !var21;
            var15['value'] = var21;
            var15['onValueChange'] = var20;
            var20 = var9[var13];
            var20 = var12.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var9[var13];
            var20 = var12.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.W2aJRU;
            var20 = var21.bind(var22)(var20);
            var15['label'] = var20;
            var15['disabled'] = var19;
            var15['start'] = var18;
            var15['end'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var8['children'] = var15;
            var8 = var14.bind(var4)(var11, var8);
            var5[3] = var8;
            var8 = _closure1_slot8;
            var6 = var9[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var10 = var10.warningText;
            var6['style'] = var10;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.5lP6Aw;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelScoreSettings'] = var2;
    return var1;
})();