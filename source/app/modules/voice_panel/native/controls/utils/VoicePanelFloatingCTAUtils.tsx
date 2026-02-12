// app/modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var10;
    var5 = function useFloatingCTAProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = _closure1_slot4;
            var4 = var8.useContext;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var2 = var4.bind(var8)(var2);
            var4 = var2.showFloatingCTA;
            var2 = 33;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var4 = var2.bind(var3)(var4);
            var2 = function useOverrideFloatingCTAProps(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot4;
                var4 = var6.useContext;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 15;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var7);
                var3 = var4.bind(var6)(var3);
                var6 = var3.setShowFloatingCTA;
                var _closure3_slot1 = var6;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var1 = _closure1_slot12;
                        var3 = var1.BAD_CONNECTION;
                        var1 = null;
                        if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = _closure1_slot22;
                        var3 = undefined;
                        var2 = function() {
                            var3 = _closure3_slot1;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var3)(var2);
case 2:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var2.bind(var3)(var4);
            var2 = function useGuildEventControlsProps(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var2 = var5[var1];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var10 = var2.bind(var1)();
                    var9 = _closure1_slot4;
                    var3 = var9.useContext;
                    var2 = 15;
                    var2 = var5[var2];
                    var2 = var8.bind(var1)(var2);
                    var2 = var3.bind(var9)(var2);
                    var3 = var2.channelId;
                    var2 = 16;
                    var2 = var5[var2];
                    var2 = var8.bind(var1)(var2);
                    var8 = var2.bind(var1)(var3);
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var5[var2];
                    var9 = var3.bind(var1)(var2);
                    var3 = var9.useImminentUpcomingGuildEvents;
                    var5 = null;
                    var11 = var5 == var4;
                    var2 = undefined;
                    if(var11) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = var4.id;
case 4:
                    var2 = var3.bind(var9)(var2);
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 18;
                    var9 = var11[var9];
                    var14 = var3.bind(var1)(var9);
                    var13 = var14.useStateFromStores;
                    var9 = _closure1_slot7;
                    var12 = new Array(1);
                    var12[0] = var9;
                    var9 = new Array(1);
                    var9[0] = var2;
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var3 = _closure1_slot7;
                                var2 = var3.isEventDismissed;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                var1 = !var1;
                                return var1;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 != var2;
                            if(!var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                            var1 = var2;
case 6:
                            return var1;
                        }
                    };
                    var9 = var13.bind(var14)(var12, var2, var9);
                    var _closure3_slot1 = var9;
                    var2 = 19;
                    var2 = var11[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useManageResourcePermissions;
                    var2 = var2.bind(var3)(var4);
                    var2 = var2.canManageGuildEvent;
                    var3 = var2.bind(var1)(var9);
                    var2 = var5 != var9;
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot8;
                    var2 = var4.bind(var1)(var9);
case 8:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var16 = 20;
                    var4 = var4[var16];
                    var11 = var11.bind(var1)(var4);
                    var4 = var11.getNextRecurrenceIdInEvent;
                    var11 = var4.bind(var11)(var9);
                    var12 = var5 != var11;
                    var4 = undefined;
                    if(!var12) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = var11;
case 10:
                    var _closure3_slot2 = var4;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 21;
                    var11 = var13[var11];
                    var13 = var12.bind(var1)(var11);
                    var11 = var5 == var9;
                    var12 = undefined;
                    if(var11) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var12 = var9.guild_id;
case 12:
                    var14 = var5 == var9;
                    var11 = undefined;
                    if(var14) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var11 = var9.id;
case 14:
                    var13 = var13.bind(var1)(var12, var11, var4);
                    var14 = _closure1_slot4;
                    var12 = var14.useCallback;
                    var11 = new Array(2);
                    var11[0] = var9;
                    var11[1] = var4;
                    var4 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = _closure1_slot0;
                            var2 = 23;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.openStartGuildEventModal;
                            var2 = _closure3_slot1;
                            var1 = _closure3_slot2;
                            var1 = var3.bind(var4)(var2, var1);
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var12.bind(var14)(var4, var11);
                    var14 = _closure1_slot4;
                    var12 = var14.useCallback;
                    var11 = new Array(1);
                    var11[0] = var9;
                    var7 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 18; continue _fun0006 }
case 17:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 24;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.dismissEventBanner;
                            var1 = _closure3_slot1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 18:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = var12.bind(var14)(var7, var11);
                    if(!var8) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    if(!(var5 != var9)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                    if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 22:
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 23:
                    var18 = var9.scheduled_start_time;
                    var3 = var9.name;
                    var15 = var9.entity_type;
                    var2 = _closure1_slot10;
                    var14 = var2.STAGE_INSTANCE;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 25;
                    var2 = var12[var2];
                    var8 = var11.bind(var1)(var2);
                    var5 = var8.getGuildScheduledEventHeaderProps;
                    var2 = {};
                    var16 = var12[var16];
                    var17 = var11.bind(var1)(var16);
                    var16 = var17.getEventTimeData;
                    var16 = var16.bind(var17)(var18);
                    var2['eventTimeData'] = var16;
                    var14 = var15 === var14;
                    var2['isStage'] = var14;
                    var2['theme'] = var10;
                    var2['event'] = var9;
                    var2 = var5.bind(var8)(var2);
                    var10 = var2.text;
                    var2 = {};
                    var2['onPress'] = var4;
                    var4 = _closure1_slot13;
                    var2['icon'] = var4;
                    var2['label'] = var3;
                    var8 = 26;
                    var3 = var12[var8];
                    var3 = var11.bind(var1)(var3);
                    var9 = var3.intl;
                    var5 = var9.formatToPlainString;
                    var3 = var12[var8];
                    var3 = var11.bind(var1)(var3);
                    var3 = var3.t;
                    var4 = var3.NywdIj;
                    var3 = {};
                    var3['count'] = var13;
                    var9 = var5.bind(var9)(var4, var3);
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = ' • ';
                    var3 = var5.bind(var4)(var10, var3, var9);
                    var2['subLabel'] = var3;
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var9 = 'button';
                    var3['accessibilityRole'] = var9;
                    var9 = var12[var8];
                    var9 = var11.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.cpT0Cq;
                    var8 = var9.bind(var10)(var8);
                    var3['accessibilityLabel'] = var8;
                    var3['onPress'] = var7;
                    var6 = _closure1_slot14;
                    var3['children'] = var6;
                    var3 = var5.bind(var1)(var4, var3);
                    var2['trailing'] = var3;
                    return var2;
case 19:
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var5);
            var1 = function useCallInviteProps(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var8 = _closure1_slot4;
                    var3 = var8.useContext;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 15;
                    var2 = var7[var2];
                    var9 = undefined;
                    var2 = var5.bind(var9)(var2);
                    var2 = var3.bind(var8)(var2);
                    var3 = var2.channelId;
                    var2 = 16;
                    var2 = var7[var2];
                    var2 = var5.bind(var9)(var2);
                    var5 = var2.bind(var9)(var3);
                    var3 = _closure1_slot0;
                    var2 = 18;
                    var2 = var7[var2];
                    var10 = var3.bind(var9)(var2);
                    var8 = var10.useStateFromStores;
                    var11 = _closure1_slot6;
                    var2 = new Array(1);
                    var2[0] = var11;
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = null;
                            var4 = var3 == var1;
                            var1 = undefined;
                            if(var4) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                            var4 = _closure3_slot0;
                            var1 = var4.id;
case 24:
                            var1 = var3 != var1;
                            if(!var1) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                            var4 = _closure1_slot6;
                            var3 = var4.getParticipants;
                            var2 = _closure3_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.length;
                            var2 = 1;
                            var1 = var2 === var3;
case 26:
                            return var1;
                        }
                    };
                    var2 = var8.bind(var10)(var2, var1);
                    var1 = 29;
                    var1 = var7[var1];
                    var8 = var3.bind(var9)(var1);
                    var7 = var8.useInviteMembersCallback;
                    var1 = null;
                    var10 = var1 == var6;
                    var3 = undefined;
                    if(var10) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = var6.id;
case 28:
                    var3 = var7.bind(var8)(var3);
                    var6 = var1 != var6;
                    var1 = undefined;
                    if(!var6) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var1 = undefined;
                    if(!var5) { _fun0007_ip = 30; continue _fun0007 }
case 32:
                    var1 = undefined;
                    if(!var2) { _fun0007_ip = 30; continue _fun0007 }
case 33:
                    var2 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 26;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.N4nebq;
                    var6 = var7.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.o2XPr2;
                    var5 = var6.bind(var7)(var5);
                    var2['subLabel'] = var5;
                    var4 = _closure1_slot15;
                    var2['icon'] = var4;
                    var2['onPress'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            var1 = var1.bind(var3)(var5);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = var4;
case 34:
            if(!(var3 != var2)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function getBadConnectionCTAProps(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var8 = 26;
        var2 = var12[var8];
        var5 = undefined;
        var2 = var11.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.string;
        var2 = var12[var8];
        var2 = var11.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.uv1tVh;
        var2 = var3.bind(var4)(var2);
        var1['label'] = var2;
        var2 = var12[var8];
        var2 = var11.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.string;
        var2 = var12[var8];
        var2 = var11.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.gQ14+g;
        var2 = var3.bind(var4)(var2);
        var1['subLabel'] = var2;
        var2 = _closure1_slot16;
        var1['icon'] = var2;
        var2 = function onPress() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var4 = var1 == var3;
                var3 = undefined;
                var1 = undefined;
                if(var4) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                var2 = _closure2_slot0;
                var1 = var2.bind(var3)();
case 38:
                return var1;
            }
        };
        var1['onPress'] = var2;
        var4 = _closure1_slot11;
        var3 = _closure1_slot5;
        var2 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'hitSlop': 4};
        var9 = var12[var8];
        var9 = var11.bind(var5)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.cpT0Cq;
        var8 = var9.bind(var10)(var8);
        var2['accessibilityLabel'] = var8;
        var7 = function onPress() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 37;
                var2 = var5[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var4 = var2.VOICE_PANEL_BAD_CONNECTION_CTA;
                var2 = 34;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                var2 = var2.bind(var3)(var4);
                var4 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var4)) { _fun0010_ip = 40; continue _fun0010 }
case 26:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
case 40:
                return var1;
            }
        };
        var2['onPress'] = var7;
        var6 = _closure1_slot17;
        var2['children'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['trailing'] = var2;
        return var1;
    };
    var _closure1_slot22 = var4;
    var1 = function handleSoundboardMobileFloatingCtaClose() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 34;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var2);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 37;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.SOUNDBOARD_MOBILE_FLOATING_CTA;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var2 = function getDismissableCTAProps(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = var1.dismissableContent;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 37;
            var3 = var2[var6];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.VOICE_PANEL_BAD_CONNECTION_CTA;
            if(!(var3 !== var5)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var7.bind(var2)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.SOUNDBOARD_MOBILE_FLOATING_CTA;
            if(!(var3 !== var5)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.DONUT_MOBILE_NUX;
            var3 = null;
            return var3;
case 43:
            var3 = {};
            var5 = _closure1_slot19;
            var3['icon'] = var5;
            var4 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0012_ip = 42; continue _fun0012 }
case 17:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 38;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.showSoundboardSoundPickerActionSheet;
                    var1 = {};
                    var1['channel'] = var4;
                    var4 = 'SOUNDBOARD_MOBILE_FLOATING_CTA';
                    var1['analyticsSource'] = var4;
                    var1 = var2.bind(var3)(var1);
case 42:
                    var2 = _closure1_slot23;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var3['onPress'] = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 26;
            var5 = var8[var4];
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var2)(var4);
            var4 = var4.t;
            var4 = var4.IJgkPX;
            var4 = var5.bind(var6)(var4);
            var3['label'] = var4;
            var4 = _closure1_slot20;
            var3['trailing'] = var4;
            return var3;
case 41:
            var1 = _closure1_slot22;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot24 = var2;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var14.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var8 = var10[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.Pressable;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.isGuildScheduledEventActive;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var12 = var7.jsx;
    var _closure1_slot11 = var12;
    var7 = {};
    var8 = 'BAD_CONNECTION';
    var7['BAD_CONNECTION'] = var8;
    var _closure1_slot12 = var7;
    var11 = 9;
    var8 = var10[var11];
    var8 = var9.bind(var1)(var8);
    var8 = var8.RowButton;
    var13 = var8.Icon;
    var8 = {};
    var15 = 10;
    var15 = var10[var15];
    var15 = var9.bind(var1)(var15);
    var15 = var15.CalendarIcon;
    var8['IconComponent'] = var15;
    var15 = 11;
    var15 = var10[var15];
    var15 = var14.bind(var1)(var15);
    var8['source'] = var15;
    var16 = 'translucent';
    var8['variant'] = var16;
    var8 = var12.bind(var1)(var13, var8);
    var _closure1_slot13 = var8;
    var8 = 12;
    var13 = var10[var8];
    var17 = var14.bind(var1)(var13);
    var13 = {};
    var15 = 13;
    var18 = var10[var15];
    var18 = var14.bind(var1)(var18);
    var13['source'] = var18;
    var13 = var12.bind(var1)(var17, var13);
    var _closure1_slot14 = var13;
    var13 = var10[var11];
    var13 = var9.bind(var1)(var13);
    var13 = var13.RowButton;
    var17 = var13.Icon;
    var13 = {};
    var18 = 27;
    var18 = var10[var18];
    var18 = var9.bind(var1)(var18);
    var18 = var18.GroupPlusIcon;
    var13['IconComponent'] = var18;
    var18 = 28;
    var18 = var10[var18];
    var18 = var14.bind(var1)(var18);
    var13['source'] = var18;
    var13['variant'] = var16;
    var13 = var12.bind(var1)(var17, var13);
    var _closure1_slot15 = var13;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.RowButton;
    var13 = var11.Icon;
    var11 = {};
    var17 = 35;
    var17 = var10[var17];
    var17 = var9.bind(var1)(var17);
    var17 = var17.CircleErrorIcon;
    var11['IconComponent'] = var17;
    var17 = 36;
    var17 = var10[var17];
    var17 = var14.bind(var1)(var17);
    var11['source'] = var17;
    var11['variant'] = var16;
    var11 = var12.bind(var1)(var13, var11);
    var _closure1_slot16 = var11;
    var11 = var10[var8];
    var13 = var14.bind(var1)(var11);
    var11 = {};
    var16 = var10[var15];
    var16 = var14.bind(var1)(var16);
    var11['source'] = var16;
    var11 = var12.bind(var1)(var13, var11);
    var _closure1_slot17 = var11;
    var11 = var10[var8];
    var13 = var14.bind(var1)(var11);
    var11 = {};
    var15 = var10[var15];
    var15 = var14.bind(var1)(var15);
    var11['source'] = var15;
    var11 = var12.bind(var1)(var13, var11);
    var _closure1_slot18 = var11;
    var8 = var10[var8];
    var11 = var14.bind(var1)(var8);
    var8 = {};
    var13 = 39;
    var13 = var10[var13];
    var13 = var14.bind(var1)(var13);
    var8['source'] = var13;
    var8 = var12.bind(var1)(var11, var8);
    var _closure1_slot19 = var8;
    var11 = function CloseSoundboardMobileFloatingCtaIcon() {
        var4 = _closure1_slot11;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = 'button';
        var2['accessibilityRole'] = var1;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 26;
        var7 = var10[var6];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.cpT0Cq;
        var6 = var7.bind(var8)(var6);
        var2['accessibilityLabel'] = var6;
        var6 = _closure1_slot23;
        var2['onPress'] = var6;
        var5 = _closure1_slot18;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = {};
    var8 = var12.bind(var1)(var11, var8);
    var _closure1_slot20 = var8;
    var8 = 40;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = 5000;
    var3['FLOATING_CTA_HIDE_TIMEOUT'] = var8;
    var3['OverrideFloatingCTA'] = var7;
    var6 = function useShouldShowFloatingCTA(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 30;
            var3 = var8[var3];
            var5 = undefined;
            var3 = var9.bind(var5)(var3);
            var10 = var3.bind(var5)(var6);
            var7 = _closure1_slot0;
            var3 = 31;
            var3 = var8[var3];
            var4 = var7.bind(var5)(var3);
            var3 = var4.useGetDismissibleContent;
            var10 = var3.bind(var4)(var10);
            var4 = _closure1_slot3;
            var3 = 1;
            var4 = var4.bind(var5)(var10, var3);
            var3 = 0;
            var12 = var4[var3];
            var _closure2_slot1 = var12;
            var3 = 18;
            var3 = var8[var3];
            var11 = var7.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var4, var3);
            var _closure2_slot2 = var3;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var4 = new Array(2);
            var4[0] = var12;
            var4[1] = var3;
            var1 = function() {
                var3 = _closure1_slot24;
                var2 = {};
                var4 = _closure2_slot1;
                var2['dismissableContent'] = var4;
                var1 = _closure2_slot2;
                var2['channel'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var10.bind(var11)(var1, var4);
            var2 = _closure1_slot21;
            var4 = var2.bind(var5)(var3);
            var2 = 32;
            var3 = var8[var2];
            var3 = var9.bind(var5)(var3);
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.SoundboardButtonLocation;
            var2 = var2.FLOATING_BUTTON;
            var2 = var3.bind(var5)(var6, var2);
            var2 = var2.visible;
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0013_ip = 45; continue _fun0013 }
case 46:
            var1 = var3 != var4;
case 45:
            if(var1) { _fun0013_ip = 47; continue _fun0013 }
case 48:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var3['useShouldShowFloatingCTA'] = var6;
    var3['useFloatingCTAProps'] = var5;
    var3['getBadConnectionCTAProps'] = var4;
    var3['getDismissableCTAProps'] = var2;
    return var1;
})();