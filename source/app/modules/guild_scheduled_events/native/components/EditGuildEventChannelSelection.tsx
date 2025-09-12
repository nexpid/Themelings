// app/modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot9 = var7;
    var4 = var4.Permissions;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var11 = 8;
    var4 = var6[var11];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 'column';
    var9['flexDirection'] = var12;
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['channelSelectorButton'] = var9;
    var9 = {};
    var9['marginRight'] = var11;
    var4['channelIcon'] = var9;
    var9 = {'flex': 1, 'marginBottom': 8};
    var4['channelTypeText'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['channelNameText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildEventChannelSelection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.guild;
            var _closure2_slot0 = var12;
            var14 = var2.channelType;
            var3 = var2.channel;
            var _closure2_slot1 = var3;
            var1 = var2.guildEventId;
            var _closure2_slot2 = var1;
            var4 = var2.recurrenceId;
            var _closure2_slot3 = var4;
            var4 = var2.onChangeChannel;
            var _closure2_slot4 = var4;
            var6 = var2.style;
            var2 = _closure1_slot13;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 10;
            var2 = var8[var2];
            var10 = var7.bind(var4)(var2);
            var5 = var10.useInputStyles;
            var2 = {};
            var13 = true;
            var2['hasLeadingIcon'] = var13;
            var17 = var5.bind(var10)(var2);
            var2 = _closure1_slot9;
            var2 = var2.GUILD_STAGE_VOICE;
            var5 = var14 === var2;
            var _closure2_slot5 = var5;
            var2 = 11;
            var2 = var8[var2];
            var13 = var7.bind(var4)(var2);
            var10 = var13.useGetEventChannelsByType;
            var2 = var12.id;
            var2 = var10.bind(var13)(var2, var14);
            var _closure2_slot6 = var2;
            var2 = 12;
            var2 = var8[var2];
            var10 = var7.bind(var4)(var2);
            var2 = var10.useChannelsUserCanStartStageIn;
            var2 = var2.bind(var10)(var12);
            var _closure2_slot7 = var2;
            var10 = _closure1_slot1;
            var2 = 13;
            var2 = var8[var2];
            var2 = var10.bind(var4)(var2);
            var13 = var2.bind(var4)(var3);
            var2 = 14;
            var10 = var8[var2];
            var16 = var7.bind(var4)(var10);
            var14 = var16.useStateFromStores;
            var10 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.MANAGE_CHANNELS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var14.bind(var16)(var12, var10);
            var _closure2_slot8 = var10;
            var2 = var8[var2];
            var10 = var7.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var10)(var7, var1, var2);
            var _closure2_slot9 = var1;
            var8 = null;
            if(!(var8 == var3)) { _fun0001_ip = 338; continue _fun0001 }
 316:
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 16;
            var1 = var7[var1];
            var16 = var2.bind(var4)(var1);
            _fun0001_ip = 369; continue _fun0001;
 338:
            var2 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 15;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIcon;
            var16 = var1.bind(var2)(var3);
 369:
            if(!(var8 == var3)) { _fun0001_ip = 401; continue _fun0001 }
 373:
            var2 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 17;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var14 = var1.LocationIcon;
            _fun0001_ip = 432; continue _fun0001;
 401:
            var2 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 15;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIconComponent;
            var14 = var1.bind(var2)(var3);
 432:
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var21 = 18;
            var2 = var1[var21];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var21];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0001_ip = 492; continue _fun0001 }
 479:
            var5 = var1.7RYWCA;
            var18 = var2.bind(var3)(var5);
            _fun0001_ip = 503; continue _fun0001;
 492:
            var1 = var1.S7GjDw;
            var18 = var2.bind(var3)(var1);
 503:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var15.container;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var20 = _closure1_slot0;
            var12 = _closure1_slot3;
            var10 = 19;
            var5 = var12[var10];
            var5 = var20.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            var19 = var15.channelTypeText;
            var5['style'] = var19;
            var5['children'] = var18;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 20;
            var6 = var12[var6];
            var6 = var20.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var6['accessibilityLabel'] = var18;
            var18 = var12[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var12 = var12[var21];
            var12 = var20.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.AaXbMD;
            var12 = var18.bind(var19)(var12);
            var6['accessibilityHint'] = var12;
            var12 = {};
            var19 = var8 != var13;
            var18 = undefined;
            if(!var19) { _fun0001_ip = 696; continue _fun0001 }
 693:
            var18 = var13;
 696:
            var12['text'] = var18;
            var6['accessibilityValue'] = var12;
            var12 = 'button';
            var6['accessibilityRole'] = var12;
            var18 = var17.padding;
            var12 = new Array(3);
            var12[0] = var18;
            var17 = var17.radius;
            var12[1] = var17;
            var17 = var15.channelSelectorButton;
            var12[2] = var17;
            var6['style'] = var12;
            var11 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissGlobalKeyboard;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot6;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var7 = arg1;
                        var1 = {};
                        var2 = var7.id;
                        var1['value'] = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var3 = 13;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.computeChannelName;
                        var10 = _closure1_slot7;
                        var9 = _closure1_slot6;
                        var8 = true;
                        var12 = var6;
                        var11 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        var1['label'] = var2;
                        return var1;
                    };
                    var10 = var3.bind(var4)(var2);
                    var2 = _closure2_slot7;
                    var4 = var2.length;
                    var2 = null;
                    var3 = 0;
                    var9 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 142; continue _fun0002 }
 78:
                    var3 = _closure2_slot8;
                    var9 = null;
                    if(!var3) { _fun0002_ip = 142; continue _fun0002 }
 87:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 22;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var3['guildId'] = var6;
                    var6 = function onCreate(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 23;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.openCreateOrEditGuildEventModal;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var7 = arg1;
                            var2['channel'] = var7;
                            var8 = _closure2_slot9;
                            var7 = null;
                            var8 = var7 != var8;
                            var7 = undefined;
                            if(!var8) { _fun0003_ip = 66; continue _fun0003 }
 62:
                            var7 = _closure2_slot9;
 66:
                            var2['guildEvent'] = var7;
                            var6 = _closure2_slot3;
                            var2['recurrenceId'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3['onCreate'] = var6;
                    var9 = var5.bind(var1)(var4, var3);
 142:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var4 = 24;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var11 = _closure1_slot0;
                    var4 = 26;
                    var4 = var3[var4];
                    var11 = var11.bind(var1)(var4);
                    var4 = 25;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var11.bind(var1)(var4, var3);
                    var3 = {};
                    var11 = _closure2_slot5;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var12 = 18;
                    var13 = var16[var12];
                    var13 = var15.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var1)(var12);
                    var12 = var12.t;
                    if(var11) { _fun0002_ip = 268; continue _fun0002 }
 255:
                    var11 = var12.7RYWCA;
                    var11 = var13.bind(var14)(var11);
                    _fun0002_ip = 279; continue _fun0002;
 268:
                    var12 = var12.S7GjDw;
                    var11 = var13.bind(var14)(var12);
 279:
                    var3['title'] = var11;
                    var3['items'] = var10;
                    var3['body'] = var9;
                    var7 = function onItemSelect(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var _closure4_slot0 = var1;
                            var4 = _closure2_slot6;
                            var3 = var4.find;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 48; continue _fun0004 }
 37:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 48:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var3['onItemSelect'] = var7;
                    var7 = _closure2_slot1;
                    var9 = var2 == var7;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 324; continue _fun0002 }
 315:
                    var8 = _closure2_slot1;
                    var7 = var8.id;
 324:
                    var8 = var2 != var7;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 336; continue _fun0002 }
 333:
                    var2 = var7;
 336:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectUpdatesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var6['onPress'] = var11;
            if(!(var8 == var14)) { _fun0001_ip = 811; continue _fun0001 }
 763:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var17 = _closure1_slot3;
            var8 = 27;
            var8 = var17[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var8['source'] = var16;
            var16 = var15.channelIcon;
            var8['style'] = var16;
            var11 = var12.bind(var4)(var11, var8);
            _fun0001_ip = 833; continue _fun0001;
 811:
            var12 = _closure1_slot11;
            var8 = {};
            var16 = var15.channelIcon;
            var8['style'] = var16;
            var11 = var12.bind(var4)(var14, var8);
 833:
            var8 = new Array(3);
            var8[0] = var11;
            var11 = _closure1_slot11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot3;
            var10 = var14[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-active'};
            var15 = var15.channelNameText;
            var10['style'] = var15;
            var10['children'] = var13;
            var10 = var11.bind(var4)(var12, var10);
            var8[1] = var10;
            var13 = _closure1_slot1;
            var9 = 27;
            var9 = var14[var9];
            var10 = var13.bind(var4)(var9);
            var9 = {};
            var12 = 28;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var9['source'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();