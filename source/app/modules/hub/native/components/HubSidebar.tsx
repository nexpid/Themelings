// app/modules/hub/native/components/HubSidebar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_EVENTS_LIST_ACTION_SHEET_KEY;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var11 = 8;
    var4 = var6[var11];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginVertical'] = var13;
    var9['marginHorizontal'] = var11;
    var11 = 9;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['row'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function HubItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.IconComponent;
            var14 = var1.label;
            var7 = var1.handleItemClick;
            var2 = var1.active;
            var9 = var1.unreadCount;
            var1 = _closure1_slot12;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var11 = 10;
            var1 = var1[var11];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ChannelModes;
            if(var2) { _fun0001_ip = 81; continue _fun0001 }
 73:
            var10 = var1.DEFAULT;
            _fun0001_ip = 87; continue _fun0001;
 81:
            var10 = var1.SELECTED;
 87:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = var5[var11];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var12.container;
            var1['style'] = var12;
            var1['accessibilityLabel'] = var14;
            var12 = 'menuitem';
            var1['accessibilityRole'] = var12;
            var1['onPress'] = var7;
            var7 = true;
            var1['disableHighlightOnPress'] = var7;
            var1['mode'] = var10;
            var7 = _closure1_slot0;
            var12 = var5[var11];
            var12 = var7.bind(var4)(var12);
            var13 = var12.BaseChannelName;
            var12 = {};
            var12['name'] = var14;
            var12['mode'] = var10;
            var12 = var3.bind(var4)(var13, var12);
            var1['name'] = var12;
            var5 = var5[var11];
            var5 = var7.bind(var4)(var5);
            var7 = var5.BaseChannelIcon;
            var5 = {};
            var5['mode'] = var10;
            var5['IconComponent'] = var8;
            var5 = var3.bind(var4)(var7, var5);
            var1['icon'] = var5;
            var5 = null;
            var7 = var5 == var9;
            if(var7) { _fun0001_ip = 267; continue _fun0001 }
 231:
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var10 = _closure1_slot3;
            var6 = 11;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['value'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 267:
            var1['channelInfo'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function EventHubItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.guild;
            var _closure2_slot0 = var7;
            var1 = var1.channel;
            var _closure2_slot1 = var1;
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var1 = var7.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackExposure;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['guildId'] = var5;
                var5 = '543af8_3';
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 22;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.useExperiment;
            var1 = {};
            var7 = var7.id;
            var1['guildId'] = var7;
            var7 = '543af8_4';
            var1['location'] = var7;
            var1 = var2.bind(var3)(var1);
            var2 = var1.showHubEventsList;
            var3 = _closure1_slot0;
            var1 = 12;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var1;
                    var1 = 0;
                    if(var2) { _fun0003_ip = 71; continue _fun0003 }
 18:
                    var5 = _closure1_slot6;
                    var4 = var5.getEventDirectoryEntries;
                    var2 = _closure2_slot1;
                    var7 = var3 == var2;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 53; continue _fun0003 }
 44:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
 53:
                    var2 = var4.bind(var5)(var2);
                    if(!(var3 == var2)) { _fun0003_ip = 66; continue _fun0003 }
 62:
                    var2 = new Array(0);
 66:
                    var1 = var2.length;
 71:
                    return var1;
                }
            };
            var10 = var4.bind(var7)(var3, var1);
            var1 = 0;
            if(!(!(var10 > var1))) { _fun0002_ip = 230; continue _fun0002 }
 173:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 16;
            var3 = var9[var1];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.tlopTE;
            var7 = var3.bind(var4)(var1);
            _fun0002_ip = 293; continue _fun0002;
 230:
            var3 = _closure1_slot0;
            var11 = _closure1_slot3;
            var1 = 16;
            var4 = var11[var1];
            var4 = var3.bind(var5)(var4);
            var9 = var4.intl;
            var4 = var9.formatToPlainString;
            var1 = var11[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.t;
            var3 = var1.IBdqSk;
            var1 = {};
            var1['number'] = var10;
            var7 = var4.bind(var9)(var3, var1);
 293:
            var1 = null;
            if(!var2) { _fun0002_ip = 360; continue _fun0002 }
 298:
            var4 = _closure1_slot10;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 23;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.CalendarIcon;
            var2['IconComponent'] = var8;
            var2['label'] = var7;
            var6 = function handleItemClick() {
                var5 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 24;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.fetchDirectoryEntries;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot1;
                var4 = 25;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var8 = _closure1_slot0;
                var4 = 27;
                var4 = var3[var4];
                var8 = var8.bind(var1)(var4);
                var4 = 26;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var8.bind(var1)(var4, var3);
                var3 = _closure1_slot9;
                var2 = {};
                var7 = _closure2_slot0;
                var2['guild'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['handleItemClick'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 360:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/native/components/HubSidebar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var16 = var1.guild;
            var _closure2_slot0 = var16;
            var8 = var1.flashList;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 12;
            var4 = var3[var1];
            var5 = undefined;
            var13 = var2.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var4;
            var6 = var16.id;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getDefaultChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var12.bind(var13)(var9, var6, var7);
            var _closure2_slot1 = var14;
            var6 = _closure1_slot12;
            var7 = var6.bind(var5)();
            var6 = var3[var1];
            var12 = var2.bind(var5)(var6);
            var9 = var12.useStateFromStoresObject;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannels;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var12)(var6, var4);
            var _closure2_slot2 = var4;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 46; continue _fun0005 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannelId;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3 === var2;
 46:
                    return var1;
                }
            };
            var13 = var6.bind(var9)(var4, var1);
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useHubUnreadCount;
            var12 = var1.bind(var2)(var14);
            var6 = null;
            var2 = var6 == var14;
            var1 = null;
            if(var2) { _fun0004_ip = 625; continue _fun0004 }
 217:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = null;
            if(!var8) { _fun0004_ip = 238; continue _fun0004 }
 232:
            var6 = var7.row;
 238:
            var2['style'] = var6;
            var9 = _closure1_slot10;
            var7 = _closure1_slot1;
            var15 = _closure1_slot3;
            var6 = 14;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var16;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(5);
            var6[0] = var7;
            var8 = _closure1_slot14;
            var7 = {};
            var7['guild'] = var16;
            var7['channel'] = var14;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var8 = _closure1_slot13;
            var7 = {};
            var7['active'] = var13;
            var14 = _closure1_slot0;
            var11 = 15;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.CompassIcon;
            var7['IconComponent'] = var11;
            var11 = 16;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.K50GHR;
            var13 = var16.bind(var17)(var13);
            var7['label'] = var13;
            var13 = function handleItemClick() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToChannel;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['handleItemClick'] = var13;
            var7['unreadCount'] = var12;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var7 = {};
            var12 = 18;
            var12 = var15[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.PlusMediumIcon;
            var7['IconComponent'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.emRpdX;
            var12 = var13.bind(var16)(var12);
            var7['label'] = var12;
            var12 = function handleItemClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.open;
                var1 = {};
                var5 = _closure2_slot0;
                var6 = var5.name;
                var1['directoryGuildName'] = var6;
                var5 = var5.id;
                var1['directoryGuildId'] = var5;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var1['directoryChannelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7['handleItemClick'] = var12;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var7 = {};
            var12 = 20;
            var12 = var15[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.UserPlusIcon;
            var7['IconComponent'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.MJQOuL;
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var10 = function handleItemClick() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.handleOpenInviteActionsheet;
                var11 = _closure2_slot0;
                var3 = _closure2_slot1;
                var10 = var3.id;
                var9 = _closure2_slot2;
                var8 = 'Guild Header';
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var7['handleItemClick'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[4] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 625:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();