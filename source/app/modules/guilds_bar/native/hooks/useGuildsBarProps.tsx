// app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var1 = function findGuildSectionIndex(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var16 = arg1;
            var2 = _closure1_slot22;
            var3 = _closure1_slot14;
            var1 = var3.getFastListGuildFolders;
            var1 = var1.bind(var3)();
            var15 = undefined;
            var14 = var2.bind(var15)(var1);
            var5 = var14.bind(var15)();
            var1 = var5.done;
            var10 = -1;
            var9 = false;
            var11 = var5;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = var10;
            var3 = 0;
            var2 = false;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 35:
            var24 = var11.value;
            var19 = var10 + 1;
            var17 = var24.type;
            var1 = _closure1_slot15;
            var1 = var1.GUILD;
            if(!(var17 === var1)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var1 = var24.id;
            var5 = var19;
            var3 = 0;
            var2 = true;
            if(!(var1 !== var16)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var21 = var24.type;
            var1 = _closure1_slot15;
            var1 = var1.FOLDER;
            var18 = 0;
            var17 = var9;
            var20 = var6;
            if(!(var21 === var1)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var21 = _closure1_slot22;
            var1 = var24.children;
            var21 = var21.bind(var15)(var1);
            var22 = var21.bind(var15)();
            var1 = var22.done;
            var27 = 0;
            var26 = var22;
            var18 = 0;
            var17 = var9;
            var8 = var26;
            var7 = var21;
            var20 = var6;
            if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var1 = var26.value;
            var28 = var1.type;
            var22 = _closure1_slot15;
            var25 = var22.GUILD;
            var23 = var27;
            var22 = var26;
            var29 = var23;
            if(!(var28 === var25)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var25 = var1.id;
            if(!(var25 !== var16)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var29 = var23 + 1;
case 42:
            var28 = var21.bind(var15)();
            var25 = var28.done;
            var27 = var29;
            var26 = var28;
            var18 = var27;
            var17 = var9;
            var8 = var26;
            var7 = var21;
            var20 = var1;
            if(var25) { _fun0004_ip = 39; continue _fun0004 }
case 46:
            _fun0004_ip = 41; continue _fun0004;
case 44:
            var24 = var24.expanded;
            if(var24) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var23 = 0;
case 47:
            var18 = var23;
            var17 = true;
            var8 = var22;
            var7 = var21;
            var20 = var1;
case 39:
            var5 = var19;
            var3 = var18;
            var2 = var17;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 49:
            var21 = var14.bind(var15)();
            var1 = var21.done;
            var11 = var21;
            var10 = var19;
            var9 = var17;
            var6 = var20;
            var5 = var10;
            var3 = var18;
            var2 = var9;
            if(!var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var1 = null;
            if(!var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var2 = {};
            var4 = _closure1_slot17;
            var4 = var4.GUILDS;
            var4 = var5 + var4;
            var2['section'] = var4;
            var2['item'] = var3;
            var1 = var2;
case 50:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function isAnchorIdEqual(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg3;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = '';
            var3 = arg1;
            var2 = ':';
            var3 = var5.bind(var4)(var3, var2, var6);
            var2 = arg2;
            var1 = var2 === var3;
case 52:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
    var4 = metroImportAll;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FastListRenderSections;
    var _closure1_slot17 = var7;
    var4 = var4.useGuildWrapperSize;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'section-messages';
    var4['MESSAGES'] = var7;
    var7 = 'section-favorites';
    var4['FAVORITES'] = var7;
    var7 = 'section-pending-join-requests';
    var4['PENDING_JOIN_REQUESTS'] = var7;
    var7 = 'section-lurking-guilds';
    var4['LURKING_GUILDS'] = var7;
    var7 = 'section-guest-guilds';
    var4['GUEST_GUILDS'] = var7;
    var7 = 'section-private-channels';
    var4['UNREAD_PRIVATE_CHANNELS'] = var7;
    var7 = 'section-separator';
    var4['SEPARATOR'] = var7;
    var7 = 'section-guilds';
    var4['GUILDS'] = var7;
    var _closure1_slot21 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarProps(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot18;
            var11 = undefined;
            var6 = var3.bind(var11)();
            var _closure2_slot1 = var6;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 30;
            var3 = var9[var3];
            var10 = var5.bind(var11)(var3);
            var7 = var10.useToken;
            var8 = _closure1_slot1;
            var3 = 31;
            var3 = var9[var3];
            var3 = var8.bind(var11)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.GUILD_BAR_ITEM_MARGIN;
            var7 = var7.bind(var10)(var3);
            var _closure2_slot2 = var7;
            var3 = 32;
            var3 = var9[var3];
            var3 = var8.bind(var11)(var3);
            var3 = var3.bind(var11)();
            var27 = var3.top;
            var _closure2_slot3 = var27;
            var25 = var3.bottom;
            var _closure2_slot4 = var25;
            var3 = 33;
            var3 = var9[var3];
            var5 = var5.bind(var11)(var3);
            var3 = var5.useMobileQuestDockHeight;
            var26 = var3.bind(var5)();
            var _closure2_slot5 = var26;
            var5 = _closure1_slot19;
            var24 = var5.bind(var11)();
            var _closure2_slot6 = var24;
            var3 = 4;
            var3 = var5.bind(var11)(var3);
            var _closure2_slot7 = var3;
            var13 = _closure1_slot3;
            var12 = var13.useEffect;
            var10 = new Array(3);
            var10[0] = var26;
            var10[1] = var27;
            var10[2] = var24;
            var5 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var3 = var1.listInsets;
                var2 = var3.set;
                var1 = {};
                var5 = _closure2_slot3;
                var1['start'] = var5;
                var5 = _closure2_slot5;
                var4 = _closure2_slot6;
                var4 = var5 + var4;
                var1['end'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var12.bind(var13)(var5, var10);
            var5 = 34;
            var5 = var9[var5];
            var8 = var8.bind(var11)(var5);
            var5 = 'useGuildsBarProps';
            var5 = var8.bind(var11)(var5);
            var20 = 0;
            if(!var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var20 = 1;
case 54:
            var _closure2_slot8 = var20;
            var14 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 35;
            var8 = var22[var5];
            var13 = var14.bind(var11)(var8);
            var12 = var13.useStateFromStoresArray;
            var8 = _closure1_slot12;
            var10 = new Array(3);
            var10[0] = var8;
            var8 = _closure1_slot6;
            var10[1] = var8;
            var8 = _closure1_slot7;
            var10[2] = var8;
            var9 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getUnreadPrivateChannelIds;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.filterOutMessageRequestsAndSpamById;
                var6 = _closure1_slot6;
                var1 = new Array(2);
                var1[0] = var6;
                var5 = _closure1_slot7;
                var1[1] = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var8 = new Array(0);
            var16 = var12.bind(var13)(var10, var9, var8);
            var _closure2_slot9 = var16;
            var8 = 37;
            var8 = var22[var8];
            var8 = var14.bind(var11)(var8);
            var10 = var8.MobileHomeDrawerExperiment;
            var9 = var10.useConfig;
            var8 = {};
            var12 = 'guilds-bar';
            var8['location'] = var12;
            var8 = var9.bind(var10)(var8);
            var8 = var8.enableHome;
            var _closure2_slot10 = var8;
            var9 = var22[var5];
            var13 = var14.bind(var11)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var12.bind(var13)(var10, var9);
            var _closure2_slot11 = var13;
            var9 = var22[var5];
            var15 = var14.bind(var11)(var9);
            var12 = var15.useStateFromStoresArray;
            var9 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGeoRestrictedGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var12.bind(var15)(var10, var9);
            var _closure2_slot12 = var15;
            var9 = var22[var5];
            var17 = var14.bind(var11)(var9);
            var12 = var17.useStateFromStores;
            var9 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot5;
                var1 = var2.lurkingGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var12.bind(var17)(var10, var9);
            var _closure2_slot13 = var18;
            var9 = var22[var5];
            var17 = var14.bind(var11)(var9);
            var12 = var17.useStateFromStoresArray;
            var9 = _closure1_slot11;
            var10 = new Array(2);
            var10[0] = var9;
            var9 = _closure1_slot10;
            var10[1] = var9;
            var9 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getGuildIds;
                var3 = var1.bind(var2)();
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot10;
                    var2 = var3.isCurrentUserGuest;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var12.bind(var17)(var10, var9);
            var _closure2_slot14 = var17;
            var9 = var22[var5];
            var28 = var14.bind(var11)(var9);
            var23 = var28.useStateFromStores;
            var9 = _closure1_slot14;
            var19 = new Array(1);
            var19[0] = var9;
            var21 = _closure1_slot1;
            var9 = 38;
            var9 = var22[var9];
            var29 = var21.bind(var11)(var9);
            var31 = function() {
                var1 = {};
                var4 = _closure1_slot14;
                var3 = var4.getFastListGuildFolders;
                var3 = var3.bind(var4)();
                var1['guildsNFolders'] = var3;
                var3 = _closure1_slot14;
                var2 = var3.getGuildsTree;
                var2 = var2.bind(var3)();
                var2 = var2.version;
                var1['version'] = var2;
                return var1;
            };
            var30 = new Array(0);
            var33 = var28;
            var32 = var19;
            var9 = var33[var23](var32, var31, var30, var29, var28);
            var12 = var9.guildsNFolders;
            var _closure2_slot15 = var12;
            var10 = var9.version;
            var9 = 39;
            var9 = var22[var9];
            var9 = var21.bind(var11)(var9);
            var19 = var9.bind(var11)();
            var9 = var19.expanded;
            var _closure2_slot16 = var9;
            var19 = var19.pendingFolderNode;
            var _closure2_slot17 = var19;
            var5 = var22[var5];
            var28 = var14.bind(var11)(var5);
            var23 = var28.useStateFromStores;
            var5 = _closure1_slot9;
            var14 = new Array(1);
            var14[0] = var5;
            var5 = function() {
                var1 = _closure1_slot9;
                var1 = var1.totalUnavailableGuilds;
                return var1;
            };
            var14 = var23.bind(var28)(var14, var5);
            var _closure2_slot18 = var14;
            var5 = _closure1_slot3;
            var23 = var5.useMemo;
            var4 = new Array(6);
            var4[0] = var27;
            var4[1] = var26;
            var4[2] = var25;
            var4[3] = var24;
            var4[4] = var3;
            var4[5] = var7;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var4 = _closure2_slot2;
                    var6 = 3;
                    var4 = var6 * var4;
                    var3['top'] = var4;
                    var5 = _closure2_slot6;
                    var4 = 0;
                    if(!(!(var5 > var4))) { _fun0007_ip = 52; continue _fun0007 }
case 56:
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot2;
                    var4 = var6 * var4;
                    var4 = var5 + var4;
                    _fun0007_ip = 7; continue _fun0007;
case 52:
                    var6 = _closure2_slot6;
                    var5 = 16;
                    var4 = var6 - var5;
case 7:
                    var3['bottom'] = var4;
                    var1['scrollIndicatorInsets'] = var3;
                    var6 = _closure2_slot3;
                    var5 = _closure2_slot2;
                    var3 = 2;
                    var4 = var3 * var5;
                    var4 = var6 + var4;
                    var1['insetStart'] = var4;
                    var4 = _closure2_slot5;
                    var3 = var3 * var5;
                    var3 = var4 + var3;
                    var2 = _closure2_slot7;
                    var2 = var3 + var2;
                    var1['insetEnd'] = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getWindowDimensions;
                    var2 = var2.bind(var3)();
                    var2 = var2.height;
                    var1['chunkBase'] = var2;
                    return var1;
                }
            };
            var3 = var23.bind(var5)(var3, var4);
            var _closure2_slot19 = var3;
            var23 = var5.useCallback;
            var24 = var3.insetStart;
            var4 = new Array(3);
            var4[0] = var24;
            var24 = var3.insetEnd;
            var4[1] = var24;
            var4[2] = var2;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var1 = _closure2_slot0;
                    var6 = var1.current;
                    if(!(var2 != var6)) { _fun0008_ip = 59; continue _fun0008 }
case 34:
                    var5 = var6.scrollTo;
                    var3 = 0;
                    var1 = arg2;
                    var1 = var5.bind(var6)(var3, var1);
                    _fun0008_ip = 59; continue _fun0008;
case 57:
                    var3 = _closure1_slot24;
                    var1 = undefined;
                    var6 = var3.bind(var1)(var4);
                    if(!(var2 != var6)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0008_ip = 59; continue _fun0008 }
case 62:
                    var3 = var4.scrollToLocation;
                    var2 = {};
                    var9 = var2;
                    var8 = var6;
                    var6 = copyDataProperties(var9, var8);
                    var7 = 'visible';
                    var6 = 'orientation';
                    var2[5] = var7;
                    var6 = _closure2_slot19;
                    var7 = var6.insetStart;
                    var6 = 'paddingStart';
                    var2[5] = var7;
                    var5 = _closure2_slot19;
                    var6 = var5.insetEnd;
                    var5 = 'paddingEnd';
                    var2[4] = var6;
                    var2 = var3.bind(var4)(var2);
case 59:
                    var2 = undefined;
                    return var2;
case 60:
                    return var1;
                }
            };
            var4 = var23.bind(var5)(var2, var4);
            var2 = 41;
            var2 = var22[var2];
            var2 = var21.bind(var11)(var2);
            var2 = var2.bind(var11)(var4);
            var11 = var5.useMemo;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.getGuildId;
                    var5 = var1.bind(var2)();
                    var3 = null;
                    var6 = var3 != var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(!var6) { _fun0009_ip = 63; continue _fun0009 }
case 3:
                    var4 = _closure1_slot24;
                    var2 = var4.bind(var1)(var5);
case 63:
                    if(!(var3 == var2)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    return var1;
case 64:
                    var1 = {};
                    var3 = var2.item;
                    var1['initialScrollItem'] = var3;
                    var2 = var2.section;
                    var1['initialScrollSection'] = var2;
                    return var1;
                }
            };
            var2 = new Array(0);
            var11 = var11.bind(var5)(var4, var2);
            var _closure2_slot20 = var11;
            var4 = var5.useMemo;
            var2 = new Array(15);
            var2[0] = var20;
            var2[1] = var19;
            var2[2] = var18;
            var2[3] = var17;
            var2[4] = var16;
            var2[5] = var15;
            var2[6] = var14;
            var2[7] = var13;
            var2[8] = var12;
            var2[9] = var11;
            var2[10] = var10;
            var2[11] = var9;
            var2[12] = var8;
            var2[13] = var7;
            var2[14] = var6;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var4 = [1];
                    var4[1] = var1;
                    var5 = _closure2_slot17;
                    var1 = null;
                    var5 = var1 == var5;
                    var7 = 0;
                    var1 = 0;
                    if(var5) { _fun0010_ip = 30; continue _fun0010 }
case 66:
                    var6 = _closure2_slot16;
                    var5 = 1;
                    if(!var6) { _fun0010_ip = 67; continue _fun0010 }
case 52:
                    var6 = _closure2_slot17;
                    var6 = var6.children;
                    var5 = var6.length;
case 67:
                    var1 = var5;
case 30:
                    var4[2] = var1;
                    var1 = _closure2_slot13;
                    var1 = var1.length;
                    var4[3] = var1;
                    var1 = _closure2_slot14;
                    var1 = var1.length;
                    var4[4] = var1;
                    var1 = global;
                    var8 = var1.Math;
                    var6 = var8.min;
                    var1 = _closure2_slot9;
                    var5 = var1.length;
                    var1 = 10;
                    var1 = var6.bind(var8)(var5, var1);
                    var4[5] = var1;
                    var10 = 1;
                    var4[6] = var10;
                    var5 = _closure1_slot22;
                    var1 = _closure2_slot15;
                    var8 = undefined;
                    var6 = var5.bind(var8)(var1);
                    var5 = var6.bind(var8)();
                    var1 = var5.done;
                    if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var1 = var5.value;
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.GUILD;
                    if(!(var12 !== var11)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.FOLDER;
                    if(!(var12 === var11)) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var12 = var1.expanded;
                    var11 = var4.push;
                    if(var12) { _fun0010_ip = 21; continue _fun0010 }
case 74:
                    var12 = var11.bind(var4)(var10);
                    _fun0010_ip = 72; continue _fun0010;
case 21:
                    var1 = var1.children;
                    var1 = var1.length;
                    var1 = var11.bind(var4)(var1);
                    _fun0010_ip = 72; continue _fun0010;
case 70:
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var10);
case 72:
                    var11 = var6.bind(var8)();
                    var1 = var11.done;
                    var5 = var11;
                    if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 68:
                    var1 = _closure2_slot12;
                    var1 = var1.length;
                    if(!(var1 > var7)) { _fun0010_ip = 49; continue _fun0010 }
case 25:
                    var5 = var4.push;
                    var1 = _closure2_slot12;
                    var1 = var1.length;
                    var1 = var5.bind(var4)(var1);
case 49:
                    var6 = new Array(0);
                    var _closure3_slot0 = var6;
                    var1 = _closure2_slot18;
                    if(!(var1 > var7)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var5 = var6.push;
                    var1 = 'unavailable-guilds';
                    var1 = var5.bind(var6)(var1);
case 75:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var5 = _closure2_slot15;
                    var5 = var5.length;
                    var1 = var7 === var5;
case 77:
                    if(!var1) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                    var5 = _closure2_slot18;
                    var1 = var7 === var5;
case 79:
                    if(!var1) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                    var5 = var6.push;
                    var1 = 'empty-nux';
                    var1 = var5.bind(var6)(var1);
case 81:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var5 = var6.push;
                    var1 = 'create-join-guild';
                    var1 = var5.bind(var6)(var1);
case 83:
                    var1 = {};
                    var13 = _closure2_slot20;
                    var14 = var1;
                    var3 = copyDataProperties(var14, var13);
                    var3 = 'sections';
                    var1[2] = var4;
                    var4 = function sectionSize(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var7 = arg1;
                            var5 = _closure2_slot15;
                            var6 = _closure2_slot17;
                            var3 = _closure2_slot1;
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var7 === var1)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                            var2 = null;
                            var1 = var3;
                            if(!(var2 == var6)) { _fun0011_ip = 87; continue _fun0011 }
case 85:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var7 >= var2;
                            var1 = 0;
                            if(!var2) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var7 - var2;
                            var5 = var5[var2];
                            var2 = null;
                            var7 = var2 == var5;
                            var2 = 0;
                            if(var7) { _fun0011_ip = 37; continue _fun0011 }
case 89:
                            var5 = var5.type;
                            var4 = _closure1_slot15;
                            var4 = var4.FOLDER;
                            var2 = 0;
                            if(!(var5 === var4)) { _fun0011_ip = 37; continue _fun0011 }
case 90:
                            var2 = var3;
case 37:
                            var1 = var2;
case 87:
                            return var1;
                        }
                    };
                    var3 = 'sectionSize';
                    var1[2] = var4;
                    var4 = function itemSize(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = {};
                            var2 = arg1;
                            var1['section'] = var2;
                            var2 = arg2;
                            var1['row'] = var2;
                            var3 = _closure2_slot15;
                            var1['guildsNFolders'] = var3;
                            var3 = _closure2_slot17;
                            var1['pendingFolderNode'] = var3;
                            var3 = _closure2_slot9;
                            var1['privateChannelIds'] = var3;
                            var3 = _closure2_slot12;
                            var1['geoRestrictedGuilds'] = var3;
                            var3 = _closure2_slot1;
                            var1['itemSize'] = var3;
                            var2 = _closure2_slot2;
                            var1['itemMargin'] = var2;
                            var13 = var1.section;
                            var6 = var1.row;
                            var8 = var1.guildsNFolders;
                            var7 = var1.pendingFolderNode;
                            var5 = var1.privateChannelIds;
                            var12 = var1.geoRestrictedGuilds;
                            var3 = var1.itemSize;
                            var4 = var1.itemMargin;
                            var1 = _closure1_slot17;
                            var2 = var1.MESSAGES;
                            var1 = var3;
                            if(!(var2 !== var13)) { _fun0012_ip = 91; continue _fun0012 }
case 40:
                            var2 = _closure1_slot17;
                            var2 = var2.FAVORITES;
                            var1 = var3;
                            if(!(var2 !== var13)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                            var2 = _closure1_slot17;
                            var2 = var2.LURKING_GUILDS;
                            var1 = var3;
                            if(!(var2 !== var13)) { _fun0012_ip = 91; continue _fun0012 }
case 93:
                            var2 = _closure1_slot17;
                            var2 = var2.GUEST_GUILDS;
                            var1 = var3;
                            if(!(var2 !== var13)) { _fun0012_ip = 91; continue _fun0012 }
case 94:
                            var2 = _closure1_slot17;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            if(!(var2 !== var13)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                            var2 = _closure1_slot17;
                            var2 = var2.SEPARATOR;
                            if(!(var2 !== var13)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                            var2 = _closure1_slot17;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            if(!(var2 !== var13)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                            var10 = null;
                            var2 = var10 == var6;
                            var9 = 0;
                            var1 = 0;
                            if(var2) { _fun0012_ip = 91; continue _fun0012 }
case 101:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var13 - var2;
                            var13 = var8.length;
                            if(!(var13 >= var2)) { _fun0012_ip = 102; continue _fun0012 }
case 39:
                            var12 = var12[var6];
                            var1 = var3;
                            if(!(var10 == var12)) { _fun0012_ip = 91; continue _fun0012 }
case 102:
                            var8 = var8[var2];
                            var12 = var10 == var8;
                            var2 = 0;
                            if(var12) { _fun0012_ip = 103; continue _fun0012 }
case 8:
                            var13 = var8.type;
                            var12 = _closure1_slot15;
                            var12 = var12.ROOT;
                            var2 = 0;
                            if(!(var13 !== var12)) { _fun0012_ip = 103; continue _fun0012 }
case 36:
                            var13 = var8.type;
                            var12 = _closure1_slot15;
                            var12 = var12.GUILD;
                            if(!(var13 === var12)) { _fun0012_ip = 104; continue _fun0012 }
case 80:
                            var12 = var6 > var9;
                            var2 = 0;
                            if(var12) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                            var12 = var8.type;
                            var11 = _closure1_slot15;
                            var11 = var11.FOLDER;
                            if(!(var12 === var11)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                            var11 = var8.expanded;
                            var2 = 0;
                            if(!var11) { _fun0012_ip = 103; continue _fun0012 }
case 107:
                            var8 = var8.children;
                            var8 = var8[var6];
                            var8 = var10 == var8;
                            var2 = 0;
                            if(var8) { _fun0012_ip = 103; continue _fun0012 }
case 105:
                            var2 = var3;
case 103:
                            var1 = var2;
                            _fun0012_ip = 91; continue _fun0012;
case 99:
                            var9 = null;
                            var10 = var9 != var6;
                            var2 = 0;
                            if(!var10) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                            var10 = var9 != var7;
                            var2 = 0;
                            if(!var10) { _fun0012_ip = 108; continue _fun0012 }
case 110:
                            var10 = var7.expanded;
                            var2 = 0;
                            if(!var10) { _fun0012_ip = 108; continue _fun0012 }
case 111:
                            var7 = var7.children;
                            var7 = var7[var6];
                            var7 = var9 != var7;
                            var2 = 0;
                            if(!var7) { _fun0012_ip = 108; continue _fun0012 }
case 112:
                            var2 = var3;
case 108:
                            var1 = var2;
                            _fun0012_ip = 91; continue _fun0012;
case 97:
                            var2 = 2;
                            var4 = var2 * var4;
                            var2 = 1;
                            var1 = var2 + var4;
                            _fun0012_ip = 91; continue _fun0012;
case 95:
                            var4 = null;
                            var7 = var4 != var6;
                            var2 = -1;
                            if(!var7) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                            var2 = var6;
case 113:
                            var2 = var5[var2];
                            var4 = var4 == var2;
                            var2 = 0;
                            if(var4) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                            var2 = var3;
case 115:
                            var1 = var2;
case 91:
                            return var1;
                        }
                    };
                    var3 = 'itemSize';
                    var1[2] = var4;
                    var4 = function footerSize() {
                        var1 = _closure3_slot0;
                        var2 = _closure2_slot1;
                        var1 = var1.length;
                        var2 = var1 * var2;
                        var1 = 8;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var3 = 'footerSize';
                    var1[2] = var4;
                    var4 = function renderSection(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var5 = arg1;
                            var4 = _closure2_slot15;
                            var9 = _closure2_slot17;
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            if(!(!(var5 >= var1))) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                            var1 = _closure1_slot17;
                            var3 = var1.PENDING_JOIN_REQUESTS;
                            var6 = null;
                            var1 = null;
                            if(!(var5 === var3)) { _fun0013_ip = 70; continue _fun0013 }
case 119:
                            var3 = var6 != var9;
                            var1 = null;
                            if(!var3) { _fun0013_ip = 70; continue _fun0013 }
case 67:
                            var8 = _closure1_slot20;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 17;
                            var3 = var7[var3];
                            var7 = undefined;
                            var6 = var6.bind(var7)(var3);
                            var3 = {};
                            var10 = var9.id;
                            var3['id'] = var10;
                            var10 = var9.expanded;
                            var3['expanded'] = var10;
                            var9 = var9.children;
                            var3['childNodes'] = var9;
                            var1 = var8.bind(var7)(var6, var3);
                            _fun0013_ip = 70; continue _fun0013;
case 117:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var5 - var3;
                            var6 = var4[var3];
                            var4 = var6.type;
                            var3 = _closure1_slot15;
                            var3 = var3.FOLDER;
                            var1 = null;
                            if(!(var4 === var3)) { _fun0013_ip = 70; continue _fun0013 }
case 17:
                            var5 = _closure1_slot20;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 16;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var7 = var6.id;
                            var2['id'] = var7;
                            var7 = var6.expanded;
                            var2['expanded'] = var7;
                            var7 = var6.name;
                            var2['name'] = var7;
                            var7 = var6.color;
                            var2['color'] = var7;
                            var6 = var6.children;
                            var2['childNodes'] = var6;
                            var1 = var5.bind(var4)(var3, var2);
case 70:
                            return var1;
                        }
                    };
                    var3 = 'renderSection';
                    var1[2] = var4;
                    var4 = function renderItem(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var10 = arg1;
                            var4 = arg2;
                            var9 = _closure2_slot15;
                            var6 = _closure2_slot9;
                            var3 = _closure2_slot13;
                            var5 = _closure2_slot14;
                            var8 = _closure2_slot12;
                            var7 = _closure2_slot17;
                            var1 = _closure1_slot17;
                            var1 = var1.MESSAGES;
                            if(!(var1 !== var10)) { _fun0014_ip = 120; continue _fun0014 }
case 121:
                            var1 = _closure1_slot17;
                            var1 = var1.FAVORITES;
                            if(!(var1 !== var10)) { _fun0014_ip = 122; continue _fun0014 }
case 35:
                            var1 = _closure1_slot17;
                            var1 = var1.LURKING_GUILDS;
                            if(!(var1 !== var10)) { _fun0014_ip = 123; continue _fun0014 }
case 124:
                            var1 = _closure1_slot17;
                            var1 = var1.GUEST_GUILDS;
                            if(!(var1 !== var10)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
                            var1 = _closure1_slot17;
                            var1 = var1.UNREAD_PRIVATE_CHANNELS;
                            if(!(var1 !== var10)) { _fun0014_ip = 127; continue _fun0014 }
case 128:
                            var1 = _closure1_slot17;
                            var1 = var1.SEPARATOR;
                            if(!(var1 !== var10)) { _fun0014_ip = 129; continue _fun0014 }
case 130:
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var1 !== var10)) { _fun0014_ip = 131; continue _fun0014 }
case 59:
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            var1 = var10 - var1;
                            var10 = var9.length;
                            if(!(!(var1 >= var10))) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                            var9 = var9[var1];
                            var12 = null;
                            var10 = var12 == var9;
                            var1 = null;
                            if(var10) { _fun0014_ip = 77; continue _fun0014 }
case 134:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.ROOT;
                            var1 = null;
                            if(!(var11 !== var10)) { _fun0014_ip = 77; continue _fun0014 }
case 96:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if(!(var11 === var10)) { _fun0014_ip = 135; continue _fun0014 }
case 136:
                            var10 = 0;
                            var10 = var4 > var10;
                            var1 = null;
                            if(var10) { _fun0014_ip = 77; continue _fun0014 }
case 135:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            var14 = var9;
                            if(!(var11 === var10)) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                            var9 = var9.children;
                            var14 = var9[var4];
case 137:
                            var10 = var12 == var14;
                            var9 = null;
                            if(var10) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                            var11 = var14.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            var9 = null;
                            if(!(var11 === var10)) { _fun0014_ip = 139; continue _fun0014 }
case 141:
                            var13 = _closure1_slot20;
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 20;
                            var10 = var12[var10];
                            var12 = undefined;
                            var11 = var11.bind(var12)(var10);
                            var10 = {};
                            var14 = var14.id;
                            var10['guildId'] = var14;
                            var9 = var13.bind(var12)(var11, var10);
case 139:
                            var1 = var9;
case 77:
                            _fun0014_ip = 142; continue _fun0014;
case 132:
                            var13 = var8[var4];
                            var8 = null;
                            var9 = var8 != var13;
                            if(!var9) { _fun0014_ip = 143; continue _fun0014 }
case 144:
                            var12 = _closure1_slot20;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 24;
                            var9 = var11[var9];
                            var11 = undefined;
                            var10 = var10.bind(var11)(var9);
                            var9 = {};
                            var9['restrictedGuild'] = var13;
                            var8 = var12.bind(var11)(var10, var9);
case 143:
                            var1 = var8;
                            _fun0014_ip = 142; continue _fun0014;
case 131:
                            var10 = null;
                            var8 = var10 == var7;
                            var1 = null;
                            if(var8) { _fun0014_ip = 142; continue _fun0014 }
case 109:
                            var7 = var7.children;
                            var12 = var7[var4];
                            var8 = var10 == var12;
                            var7 = null;
                            if(var8) { _fun0014_ip = 145; continue _fun0014 }
case 146:
                            var9 = var12.type;
                            var8 = _closure1_slot15;
                            var8 = var8.GUILD;
                            var7 = null;
                            if(!(var9 === var8)) { _fun0014_ip = 145; continue _fun0014 }
case 147:
                            var11 = _closure1_slot20;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 23;
                            var8 = var10[var8];
                            var10 = undefined;
                            var9 = var9.bind(var10)(var8);
                            var8 = {};
                            var12 = var12.id;
                            var8['guildId'] = var12;
                            var7 = var11.bind(var10)(var9, var8);
case 145:
                            var1 = var7;
                            _fun0014_ip = 142; continue _fun0014;
case 129:
                            var10 = _closure1_slot20;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 22;
                            var7 = var9[var7];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var7);
                            var7 = {};
                            var1 = var10.bind(var9)(var8, var7);
                            _fun0014_ip = 142; continue _fun0014;
case 127:
                            var11 = var6[var4];
                            var6 = null;
                            var7 = var6 == var11;
                            if(var7) { _fun0014_ip = 148; continue _fun0014 }
case 149:
                            var10 = _closure1_slot20;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 21;
                            var7 = var9[var7];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var7);
                            var7 = {};
                            var7['channelId'] = var11;
                            var6 = var10.bind(var9)(var8, var7);
case 148:
                            var1 = var6;
                            _fun0014_ip = 142; continue _fun0014;
case 125:
                            var10 = var5[var4];
                            var5 = null;
                            var6 = var5 == var10;
                            if(var6) { _fun0014_ip = 150; continue _fun0014 }
case 151:
                            var9 = _closure1_slot20;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 20;
                            var6 = var8[var6];
                            var8 = undefined;
                            var7 = var7.bind(var8)(var6);
                            var6 = {};
                            var6['guildId'] = var10;
                            var5 = var9.bind(var8)(var7, var6);
case 150:
                            var1 = var5;
                            _fun0014_ip = 142; continue _fun0014;
case 123:
                            var8 = var3[var4];
                            var3 = null;
                            var4 = var3 == var8;
                            if(var4) { _fun0014_ip = 152; continue _fun0014 }
case 153:
                            var7 = _closure1_slot20;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 20;
                            var4 = var6[var4];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var4);
                            var4 = {};
                            var4['guildId'] = var8;
                            var3 = var7.bind(var6)(var5, var4);
case 152:
                            var1 = var3;
                            _fun0014_ip = 142; continue _fun0014;
case 122:
                            var6 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = {};
                            var1 = var6.bind(var5)(var4, var3);
                            _fun0014_ip = 142; continue _fun0014;
case 120:
                            var5 = _closure1_slot20;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var1 = var5.bind(var4)(var3, var2);
case 142:
                            return var1;
                        }
                    };
                    var3 = 'renderItem';
                    var1[2] = var4;
                    var4 = function renderFooter() {
                        var3 = _closure3_slot0;
                        var2 = function renderFooterJSX(arg1) {
                            var7 = arg1;
                            var4 = _closure1_slot20;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = var7.map;
                            var5 = function(arg1) {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                    var5 = arg1;
                                    var1 = 'unavailable-guilds';
                                    if(!(var1 !== var5)) { _fun0015_ip = 154; continue _fun0015 }
case 155:
                                    var1 = 'empty-nux';
                                    if(!(var1 !== var5)) { _fun0015_ip = 156; continue _fun0015 }
case 31:
                                    var1 = 'create-join-guild';
                                    if(!(var1 !== var5)) { _fun0015_ip = 157; continue _fun0015 }
case 33:
                                    var1 = undefined;
                                    return var1;
case 157:
                                    var4 = _closure1_slot20;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 28;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
case 156:
                                    var4 = _closure1_slot20;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 27;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
case 154:
                                    var4 = _closure1_slot20;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 26;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
                                }
                            };
                            var5 = var6.bind(var7)(var5);
                            var1['children'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var3 = 'renderFooter';
                    var1[2] = var4;
                    var4 = function getRecyclerKey(arg1, arg2, arg3) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var3 = arg1;
                            var4 = arg2;
                            var5 = arg3;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 42;
                            var2 = var1[var8];
                            var1 = undefined;
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.FastListItemTypes;
                            var2 = var2.ITEM;
                            if(!(var2 !== var3)) { _fun0016_ip = 158; continue _fun0016 }
case 52:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.FastListItemTypes;
                            var2 = var2.SECTION;
                            if(!(var2 !== var3)) { _fun0016_ip = 158; continue _fun0016 }
case 159:
                            return var1;
case 158:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            if(!(!(var4 < var2))) { _fun0016_ip = 44; continue _fun0016 }
case 160:
                            var3 = _closure2_slot15;
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var4 - var2;
                            var2 = var3[var2];
                            var4 = null;
                            if(!(var4 != var2)) { _fun0016_ip = 44; continue _fun0016 }
case 161:
                            var7 = var2.type;
                            var3 = _closure1_slot15;
                            var3 = var3.ROOT;
                            if(!(var7 !== var3)) { _fun0016_ip = 44; continue _fun0016 }
case 59:
                            var8 = var2.type;
                            var3 = _closure1_slot15;
                            var7 = var3.FOLDER;
                            var3 = var2;
                            if(!(var8 === var7)) { _fun0016_ip = 162; continue _fun0016 }
case 163:
                            if(!(var4 != var5)) { _fun0016_ip = 136; continue _fun0016 }
case 133:
                            var7 = var2.children;
                            var3 = var7[var5];
case 162:
                            var7 = var3.type;
                            var6 = _closure1_slot15;
                            var6 = var6.GUILD;
                            if(!(var7 === var6)) { _fun0016_ip = 73; continue _fun0016 }
case 164:
                            if(!(var4 != var5)) { _fun0016_ip = 44; continue _fun0016 }
case 73:
                            var5 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var3 = var4.bind(var3)(var5);
                            return var3;
case 136:
                            var4 = var2.id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = '';
                            var2 = var3.bind(var2)(var4);
                            return var2;
case 44:
                            return var1;
                        }
                    };
                    var3 = 'getRecyclerKey';
                    var1[2] = var4;
                    var4 = function renderAccessory(arg1) {
                        var4 = _closure1_slot20;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 29;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = arg1;
                        var1['fastList'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3 = 'renderAccessory';
                    var1[2] = var4;
                    var4 = function getAnchorIdFromIndex(arg1, arg2) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dropSpecs;
                            var4 = null;
                            if(!(var4 == var1)) { _fun0017_ip = 121; continue _fun0017 }
case 165:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dragSpecs;
                            if(!(var4 != var1)) { _fun0017_ip = 166; continue _fun0017 }
case 121:
                            var1 = undefined;
                            return var1;
case 166:
                            var9 = {};
                            var1 = arg1;
                            var9['section'] = var1;
                            var1 = arg2;
                            var9['item'] = var1;
                            var3 = _closure2_slot13;
                            var9['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot14;
                            var9['guestGuildIds'] = var3;
                            var3 = _closure2_slot9;
                            var9['privateChannelIds'] = var3;
                            var3 = _closure2_slot15;
                            var9['guildsNFolders'] = var3;
                            var3 = _closure2_slot17;
                            var9['pendingFolderNode'] = var3;
                            var1 = _closure2_slot12;
                            var9['geoRestrictedGuilds'] = var1;
                            var11 = var9.section;
                            var6 = var9.item;
                            var3 = var9.lurkingGuildsIds;
                            var7 = var9.guestGuildIds;
                            var8 = var9.privateChannelIds;
                            var1 = var9.guildsNFolders;
                            var5 = var9.pendingFolderNode;
                            var10 = var9.geoRestrictedGuilds;
                            var9 = _closure1_slot17;
                            var9 = var9.MESSAGES;
                            if(!(var9 !== var11)) { _fun0017_ip = 167; continue _fun0017 }
case 20:
                            var9 = _closure1_slot17;
                            var9 = var9.FAVORITES;
                            if(!(var9 !== var11)) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                            var9 = _closure1_slot17;
                            var9 = var9.PENDING_JOIN_REQUESTS;
                            if(!(var9 !== var11)) { _fun0017_ip = 170; continue _fun0017 }
case 171:
                            var9 = _closure1_slot17;
                            var9 = var9.LURKING_GUILDS;
                            if(!(var9 !== var11)) { _fun0017_ip = 172; continue _fun0017 }
case 173:
                            var9 = _closure1_slot17;
                            var9 = var9.GUEST_GUILDS;
                            if(!(var9 !== var11)) { _fun0017_ip = 174; continue _fun0017 }
case 175:
                            var9 = _closure1_slot17;
                            var9 = var9.UNREAD_PRIVATE_CHANNELS;
                            if(!(var9 !== var11)) { _fun0017_ip = 176; continue _fun0017 }
case 48:
                            var9 = _closure1_slot17;
                            var9 = var9.SEPARATOR;
                            if(!(var9 !== var11)) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = var11 - var9;
                            var11 = var1[var9];
                            if(!(var4 != var11)) { _fun0017_ip = 132; continue _fun0017 }
case 179:
                            if(!(var4 != var6)) { _fun0017_ip = 180; continue _fun0017 }
case 181:
                            var12 = var11.children;
                            var12 = var12[var6];
                            var14 = var4 == var12;
                            var13 = undefined;
                            if(var14) { _fun0017_ip = 182; continue _fun0017 }
case 183:
                            var13 = var12.id;
case 182:
                            _fun0017_ip = 80; continue _fun0017;
case 180:
                            var13 = var11.id;
case 80:
                            _fun0017_ip = 184; continue _fun0017;
case 132:
                            var1 = var1.length;
                            var11 = var9 >= var1;
                            var1 = undefined;
                            if(!var11) { _fun0017_ip = 185; continue _fun0017 }
case 186:
                            var11 = var4 != var6;
                            var1 = undefined;
                            if(!var11) { _fun0017_ip = 185; continue _fun0017 }
case 187:
                            var10 = var10[var6];
                            var11 = var4 == var10;
                            var9 = undefined;
                            if(var11) { _fun0017_ip = 188; continue _fun0017 }
case 189:
                            var9 = var10.id;
case 188:
                            var1 = var9;
case 185:
                            var13 = var1;
case 184:
                            var9 = var4 != var13;
                            var1 = undefined;
                            if(!var9) { _fun0017_ip = 111; continue _fun0017 }
case 190:
                            var9 = _closure1_slot21;
                            var12 = var9.GUILDS;
                            var9 = global;
                            var9 = var9.HermesInternal;
                            var11 = var9.concat;
                            var10 = '';
                            var9 = ':';
                            var1 = var11.bind(var10)(var12, var9, var13);
case 111:
                            _fun0017_ip = 191; continue _fun0017;
case 177:
                            var9 = _closure1_slot21;
                            var1 = var9.SEPARATOR;
                            _fun0017_ip = 191; continue _fun0017;
case 176:
                            if(!(var4 != var6)) { _fun0017_ip = 192; continue _fun0017 }
case 193:
                            var9 = _closure1_slot21;
                            var12 = var9.UNREAD_PRIVATE_CHANNELS;
                            var11 = var8[var6];
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var9 = '';
                            var8 = ':';
                            var8 = var10.bind(var9)(var12, var8, var11);
                            _fun0017_ip = 194; continue _fun0017;
case 192:
                            var9 = _closure1_slot21;
                            var8 = var9.UNREAD_PRIVATE_CHANNELS;
case 194:
                            var1 = var8;
                            _fun0017_ip = 191; continue _fun0017;
case 174:
                            if(!(var4 != var6)) { _fun0017_ip = 195; continue _fun0017 }
case 196:
                            var8 = _closure1_slot21;
                            var11 = var8.GUEST_GUILDS;
                            var10 = var7[var6];
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = ':';
                            var7 = var9.bind(var8)(var11, var7, var10);
                            _fun0017_ip = 197; continue _fun0017;
case 195:
                            var8 = _closure1_slot21;
                            var7 = var8.GUEST_GUILDS;
case 197:
                            var1 = var7;
                            _fun0017_ip = 191; continue _fun0017;
case 172:
                            if(!(var4 != var6)) { _fun0017_ip = 198; continue _fun0017 }
case 199:
                            var7 = _closure1_slot21;
                            var10 = var7.LURKING_GUILDS;
                            var9 = var3[var6];
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = '';
                            var3 = ':';
                            var3 = var8.bind(var7)(var10, var3, var9);
                            _fun0017_ip = 200; continue _fun0017;
case 198:
                            var7 = _closure1_slot21;
                            var3 = var7.LURKING_GUILDS;
case 200:
                            var1 = var3;
                            _fun0017_ip = 191; continue _fun0017;
case 170:
                            if(!(var4 != var6)) { _fun0017_ip = 201; continue _fun0017 }
case 150:
                            var7 = var4 == var5;
                            var8 = undefined;
                            if(var7) { _fun0017_ip = 202; continue _fun0017 }
case 203:
                            var5 = var5.children;
                            var5 = var5[var6];
                            var6 = var4 == var5;
                            var8 = undefined;
                            if(var6) { _fun0017_ip = 202; continue _fun0017 }
case 204:
                            var8 = var5.id;
case 202:
                            var4 = var4 != var8;
                            var3 = undefined;
                            if(!var4) { _fun0017_ip = 205; continue _fun0017 }
case 206:
                            var4 = _closure1_slot21;
                            var7 = var4.PENDING_JOIN_REQUESTS;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var6 = var4.concat;
                            var5 = '';
                            var4 = ':';
                            var3 = var6.bind(var5)(var7, var4, var8);
case 205:
                            var1 = var3;
                            _fun0017_ip = 191; continue _fun0017;
case 201:
                            var3 = _closure1_slot21;
                            var1 = var3.PENDING_JOIN_REQUESTS;
                            _fun0017_ip = 191; continue _fun0017;
case 168:
                            var3 = _closure1_slot21;
                            var1 = var3.FAVORITES;
                            _fun0017_ip = 191; continue _fun0017;
case 167:
                            var2 = _closure1_slot21;
                            var1 = var2.MESSAGES;
case 191:
                            return var1;
                        }
                    };
                    var3 = 'getAnchorIdFromIndex';
                    var1[2] = var4;
                    var3 = function getAnchorIndexFromId(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var2 = {};
                            var1 = arg1;
                            var2['id'] = var1;
                            var3 = _closure2_slot13;
                            var2['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot14;
                            var2['guestGuildIds'] = var3;
                            var3 = _closure2_slot9;
                            var2['privateChannelIds'] = var3;
                            var3 = _closure2_slot15;
                            var2['guildsNFolders'] = var3;
                            var3 = _closure2_slot17;
                            var2['pendingFolderNode'] = var3;
                            var1 = _closure2_slot12;
                            var2['geoRestrictedGuilds'] = var1;
                            var9 = var2.id;
                            var4 = var2.lurkingGuildsIds;
                            var5 = var2.guestGuildIds;
                            var8 = var2.privateChannelIds;
                            var7 = var2.guildsNFolders;
                            var1 = var2.pendingFolderNode;
                            var6 = var2.geoRestrictedGuilds;
                            var2 = _closure1_slot21;
                            var2 = var2.MESSAGES;
                            if(!(var2 !== var9)) { _fun0018_ip = 207; continue _fun0018 }
case 208:
                            var2 = _closure1_slot21;
                            var2 = var2.FAVORITES;
                            if(!(var2 !== var9)) { _fun0018_ip = 209; continue _fun0018 }
case 210:
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            if(!(var2 !== var9)) { _fun0018_ip = 211; continue _fun0018 }
case 212:
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            if(!(var2 !== var9)) { _fun0018_ip = 213; continue _fun0018 }
case 214:
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            if(!(var2 !== var9)) { _fun0018_ip = 215; continue _fun0018 }
case 20:
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            if(!(var2 !== var9)) { _fun0018_ip = 216; continue _fun0018 }
case 169:
                            var2 = _closure1_slot21;
                            var2 = var2.SEPARATOR;
                            if(!(var2 !== var9)) { _fun0018_ip = 217; continue _fun0018 }
case 171:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0018_ip = 218; continue _fun0018 }
case 219:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0018_ip = 220; continue _fun0018 }
case 10:
                            var2 = null;
                            if(!(var2 != var1)) { _fun0018_ip = 220; continue _fun0018 }
case 221:
                            var2 = _closure1_slot22;
                            var1 = var1.children;
                            var14 = undefined;
                            var13 = var2.bind(var14)(var1);
                            var2 = var13.bind(var14)();
                            var1 = var2.done;
                            var11 = 0;
                            var12 = var2;
                            var10 = 0;
                            if(var1) { _fun0018_ip = 220; continue _fun0018 }
case 222:
                            var1 = var12.value;
                            var15 = _closure1_slot25;
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var1 = var1.id;
                            var1 = var15.bind(var14)(var2, var9, var1);
                            var2 = var10;
                            if(var1) { _fun0018_ip = 223; continue _fun0018 }
case 224:
                            var10 = var2 + 1;
                            var15 = var13.bind(var14)();
                            var1 = var15.done;
                            var12 = var15;
                            if(var1) { _fun0018_ip = 220; continue _fun0018 }
case 225:
                            _fun0018_ip = 222; continue _fun0018;
case 223:
                            var1 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.PENDING_JOIN_REQUESTS;
                            var10 = var11 + var10;
                            var1['section'] = var10;
                            var1['item'] = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 220:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0018_ip = 227; continue _fun0018 }
case 228:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0018_ip = 229; continue _fun0018 }
case 230:
                            var2 = _closure1_slot22;
                            var13 = undefined;
                            var12 = var2.bind(var13)(var8);
                            var8 = var12.bind(var13)();
                            var2 = var8.done;
                            var10 = var8;
                            var11 = 0;
                            if(var2) { _fun0018_ip = 229; continue _fun0018 }
case 231:
                            var14 = var10.value;
                            var8 = _closure1_slot25;
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var8.bind(var13)(var2, var9, var14);
                            var8 = var11;
                            if(var2) { _fun0018_ip = 174; continue _fun0018 }
case 232:
                            var11 = var8 + 1;
                            var14 = var12.bind(var13)();
                            var2 = var14.done;
                            var10 = var14;
                            if(var2) { _fun0018_ip = 229; continue _fun0018 }
case 233:
                            _fun0018_ip = 231; continue _fun0018;
case 174:
                            var2 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var10;
                            var2['item'] = var8;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 229:
                            var8 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.GUILDS;
                            var2 = var8.bind(var9)(var2);
                            var12 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0018_ip = 226; continue _fun0018 }
case 234:
                            var2 = _closure1_slot22;
                            var14 = var2.bind(var12)(var7);
                            var7 = var14.bind(var12)();
                            var2 = var7.done;
                            var13 = var7;
                            var7 = 0;
                            var8 = 0;
                            if(var2) { _fun0018_ip = 235; continue _fun0018 }
case 236:
                            var2 = var13.value;
                            var16 = _closure1_slot25;
                            var10 = _closure1_slot21;
                            var15 = var10.GUILDS;
                            var10 = var2.id;
                            var15 = var16.bind(var12)(var15, var9, var10);
                            var10 = var7;
                            if(var15) { _fun0018_ip = 237; continue _fun0018 }
case 238:
                            var15 = _closure1_slot22;
                            var2 = var2.children;
                            var18 = var15.bind(var12)(var2);
                            var15 = var18.bind(var12)();
                            var2 = var15.done;
                            var17 = 0;
                            var16 = var15;
                            if(var2) { _fun0018_ip = 239; continue _fun0018 }
case 240:
                            var2 = var16.value;
                            var19 = _closure1_slot25;
                            var15 = _closure1_slot21;
                            var15 = var15.GUILDS;
                            var2 = var2.id;
                            var2 = var19.bind(var12)(var15, var9, var2);
                            var15 = var17;
                            if(var2) { _fun0018_ip = 241; continue _fun0018 }
case 242:
                            var17 = var15 + 1;
                            var19 = var18.bind(var12)();
                            var2 = var19.done;
                            var16 = var19;
                            if(var2) { _fun0018_ip = 239; continue _fun0018 }
case 201:
                            _fun0018_ip = 240; continue _fun0018;
case 241:
                            var2 = {};
                            var16 = _closure1_slot17;
                            var16 = var16.GUILDS;
                            var16 = var10 + var16;
                            var2['section'] = var16;
                            var2['item'] = var15;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 239:
                            var7 = var10 + 1;
                            var16 = var14.bind(var12)();
                            var2 = var16.done;
                            var13 = var16;
                            var8 = var7;
                            if(var2) { _fun0018_ip = 235; continue _fun0018 }
case 243:
                            _fun0018_ip = 236; continue _fun0018;
case 237:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var10 + var7;
                            var2['section'] = var7;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 235:
                            var2 = _closure1_slot22;
                            var10 = var2.bind(var12)(var6);
                            var6 = var10.bind(var12)();
                            var2 = var6.done;
                            var11 = 0;
                            var7 = var6;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 244:
                            var2 = var7.value;
                            var13 = _closure1_slot25;
                            var6 = _closure1_slot21;
                            var6 = var6.GUILDS;
                            var2 = var2.id;
                            var2 = var13.bind(var12)(var6, var9, var2);
                            var6 = var11;
                            if(var2) { _fun0018_ip = 245; continue _fun0018 }
case 246:
                            var11 = var6 + 1;
                            var13 = var10.bind(var12)();
                            var2 = var13.done;
                            var7 = var13;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 247:
                            _fun0018_ip = 244; continue _fun0018;
case 245:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var8 + var7;
                            var2['section'] = var7;
                            var2['item'] = var6;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 227:
                            var2 = _closure1_slot22;
                            var10 = undefined;
                            var8 = var2.bind(var10)(var5);
                            var5 = var8.bind(var10)();
                            var2 = var5.done;
                            var6 = var5;
                            var7 = 0;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 248:
                            var11 = var6.value;
                            var5 = _closure1_slot25;
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var5.bind(var10)(var2, var9, var11);
                            var5 = var7;
                            if(var2) { _fun0018_ip = 249; continue _fun0018 }
case 250:
                            var7 = var5 + 1;
                            var11 = var8.bind(var10)();
                            var2 = var11.done;
                            var6 = var11;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 251:
                            _fun0018_ip = 248; continue _fun0018;
case 249:
                            var2 = {};
                            var6 = _closure1_slot17;
                            var6 = var6.GUEST_GUILDS;
                            var2['section'] = var6;
                            var2['item'] = var5;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 218:
                            var2 = _closure1_slot22;
                            var8 = undefined;
                            var7 = var2.bind(var8)(var4);
                            var4 = var7.bind(var8)();
                            var2 = var4.done;
                            var5 = var4;
                            var6 = 0;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 252:
                            var10 = var5.value;
                            var4 = _closure1_slot25;
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var4.bind(var8)(var2, var9, var10);
                            var4 = var6;
                            if(var2) { _fun0018_ip = 253; continue _fun0018 }
case 254:
                            var6 = var4 + 1;
                            var10 = var7.bind(var8)();
                            var2 = var10.done;
                            var5 = var10;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 226; continue _fun0018 }
case 255:
                            _fun0018_ip = 252; continue _fun0018;
case 253:
                            var2 = {};
                            var5 = _closure1_slot17;
                            var5 = var5.LURKING_GUILDS;
                            var2['section'] = var5;
                            var2['item'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 217:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.SEPARATOR;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 216:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 215:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.GUEST_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 213:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.LURKING_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 211:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.PENDING_JOIN_REQUESTS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 209:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.FAVORITES;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 226; continue _fun0018;
case 207:
                            var2 = {};
                            var3 = _closure1_slot17;
                            var3 = var3.MESSAGES;
                            var2['section'] = var3;
                            var1 = var2;
case 226:
                            return var1;
                        }
                    };
                    var2 = 'getAnchorIndexFromId';
                    var1[1] = var3;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = {};
            var1['listProps'] = var3;
            var1['listDataProps'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();