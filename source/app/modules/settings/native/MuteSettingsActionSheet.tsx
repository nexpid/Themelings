// app/modules/settings/native/MuteSettingsActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserNotificationSettings;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/MuteSettingsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function MuteSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var9 = var1.channelId;
            var _closure2_slot1 = var9;
            var4 = var1.onOptionPress;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot5;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var3);
            var _closure2_slot3 = var2;
            var7 = _closure1_slot4;
            var1 = var7.getChannel;
            var14 = var1.bind(var7)(var9);
            var _closure2_slot4 = var14;
            var7 = _closure1_slot3;
            var10 = var7.useMemo;
            var8 = new Array(1);
            var8[0] = var9;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getMuteSettings;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var7)(var1, var8);
            var13 = var1.muteConfig;
            var1 = var1.muted;
            var10 = var7.useCallback;
            var8 = new Array(3);
            var8[0] = var9;
            var8[1] = var3;
            var8[2] = var4;
            var4 = function(arg1) {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleMuteSettingPress;
                var2 = {};
                var6 = _closure2_slot1;
                var2['channelId'] = var6;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = arg1;
                var2['muteDurationSeconds'] = var6;
                var5 = _closure2_slot2;
                var2['onOptionPress'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var10.bind(var7)(var4, var8);
            var _closure2_slot5 = var4;
            var8 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var3;
            var3 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.handleUnmutePress;
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var18 = var8.bind(var7)(var3, var4);
            var8 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var2;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMuteSettingLabel;
                var2 = _closure2_slot4;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var8.bind(var7)(var3, var4);
            var4 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMuteSettingSublabel;
                var2 = _closure2_slot4;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var4.bind(var7)(var2, var3);
            var2 = null;
            if(!(var2 != var14)) { _fun0001_ip = 251; continue _fun0001 }
 248:
            if(var1) { _fun0001_ip = 339; continue _fun0001 }
 251:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.getMuteOptions;
            var8 = var1.bind(var3)();
            var3 = _closure1_slot9;
            var1 = 11;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = var1.label;
                var1 = var1.duration;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1['label'] = var5;
                var6 = function onPress() {
                    var3 = _closure2_slot5;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var1['children'] = var6;
            var6 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 671; continue _fun0001;
 339:
            var4 = _closure1_slot11;
            var3 = _closure1_slot10;
            var2 = {};
            var12 = _closure1_slot9;
            var24 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var7 = var8[var1];
            var1 = undefined;
            var7 = var24.bind(var1)(var7);
            var15 = var7.TableRowGroup;
            var7 = {};
            var11 = 12;
            var11 = var8[var11];
            var11 = var24.bind(var1)(var11);
            var17 = var11.TableRow;
            var16 = {};
            var11 = _closure1_slot1;
            var19 = 13;
            var19 = var8[var19];
            var20 = var11.bind(var1)(var19);
            var19 = {};
            var27 = true;
            var19['disableColor'] = var27;
            var21 = 14;
            var21 = var8[var21];
            var21 = var11.bind(var1)(var21);
            var19['source'] = var21;
            var19 = var12.bind(var1)(var20, var19);
            var16['icon'] = var19;
            var19 = 8;
            var20 = var8[var19];
            var20 = var24.bind(var1)(var20);
            var22 = var20.intl;
            var21 = var22.format;
            var19 = var8[var19];
            var19 = var24.bind(var1)(var19);
            var19 = var19.t;
            var20 = var19.eC+9rq;
            var19 = {};
            var23 = 15;
            var23 = var8[var23];
            var26 = var24.bind(var1)(var23);
            var25 = var26.computeChannelName;
            var30 = _closure1_slot7;
            var29 = _closure1_slot6;
            var32 = var26;
            var31 = var14;
            var28 = true;
            var23 = var32[var25](var31, var30, var29, var28, var27);
            var19['name'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var16['label'] = var19;
            var16['onPress'] = var18;
            var16 = var12.bind(var1)(var17, var16);
            var7['children'] = var16;
            var15 = var12.bind(var1)(var15, var7);
            var7 = new Array(2);
            var7[0] = var15;
            var16 = 16;
            var8 = var8[var16];
            var11 = var11.bind(var1)(var8);
            var8 = {};
            var8['muteConfig'] = var13;
            var13 = var14.isPrivate;
            var13 = var13.bind(var14)();
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var15.bind(var1)(var14);
            var14 = var14.MuteSettingType;
            if(var13) { _fun0001_ip = 641; continue _fun0001 }
 633:
            var13 = var14.CHANNEL;
            _fun0001_ip = 647; continue _fun0001;
 641:
            var13 = var14.DM;
 647:
            var8['type'] = var13;
            var8 = var12.bind(var1)(var11, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var6 = var4.bind(var1)(var3, var2);
 671:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var8 = _closure1_slot9;
            var5 = 18;
            var5 = var11[var5];
            var5 = var7.bind(var3)(var5);
            var7 = var5.BottomSheetTitleHeader;
            var5 = {};
            var5['title'] = var10;
            var5['subtitle'] = var9;
            var7 = var8.bind(var3)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function MuteSettingsHint(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.isMuted;
            var2 = var1.isGuildMuted;
            var8 = var1.guildMessageNotifications;
            var6 = var1.showVoiceActivityNotificationOptions;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 37; continue _fun0002 }
 35:
            var6 = false;
 37:
            if(var3) { _fun0002_ip = 533; continue _fun0002 }
 46:
            if(var2) { _fun0002_ip = 416; continue _fun0002 }
 52:
            var2 = _closure1_slot8;
            var2 = var2.NO_MESSAGES;
            if(!(var8 !== var2)) { _fun0002_ip = 299; continue _fun0002 }
 69:
            var2 = _closure1_slot8;
            var2 = var2.ALL_MESSAGES;
            if(!(var8 !== var2)) { _fun0002_ip = 101; continue _fun0002 }
 83:
            var2 = _closure1_slot8;
            var2 = var2.ONLY_MENTIONS;
            if(!(var8 !== var2)) { _fun0002_ip = 101; continue _fun0002 }
 97:
            var2 = null;
            return var2;
 101:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 8;
            var3 = var2[var12];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var12];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            if(var6) { _fun0002_ip = 163; continue _fun0002 }
 148:
            var6 = var2.mUbulZ;
            var6 = var3.bind(var5)(var6);
            _fun0002_ip = 176; continue _fun0002;
 163:
            var2 = var2.l3yoAQ;
            var6 = var3.bind(var5)(var2);
 176:
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var7 = _closure1_slot8;
            var7 = var7.ALL_MESSAGES;
            if(!(var8 !== var7)) { _fun0002_ip = 287; continue _fun0002 }
 233:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var12];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var12];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.GGAdHR;
            var6 = var8.bind(var9)(var7);
 287:
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 299:
            var5 = _closure1_slot9;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var6 = 8;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.nRwUIC;
            var6 = {};
            var11 = function notificationHook(arg1, arg2) {
                var5 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-warning'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6['notificationHook'] = var11;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 416:
            var5 = _closure1_slot9;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var6 = 8;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.O34r19;
            var6 = {};
            var10 = function mutedHook(arg1, arg2) {
                var5 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-danger'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6['mutedHook'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 533:
            var3 = _closure1_slot9;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var5 = 8;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.t0mEt7;
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MuteSettingsHint'] = var2;
    return var1;
})();