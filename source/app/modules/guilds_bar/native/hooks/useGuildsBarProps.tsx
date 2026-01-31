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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
    var1 = function findGuildSectionIndex(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var16 = arg1;
            var2 = _closure1_slot23;
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
            var21 = _closure1_slot23;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
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
    var8 = 2;
    var4 = var6[var8];
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
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot14 = var9;
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
    var7 = var4.GUILD_ITEM_SIZE;
    var4 = var4.GUILD_ITEM_MARGIN;
    var _closure1_slot18 = var4;
    var9 = 14;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.useYouBarTotalHeight;
    var _closure1_slot19 = var9;
    var9 = 15;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.jsx;
    var _closure1_slot20 = var9;
    var9 = {};
    var10 = 'section-messages';
    var9['MESSAGES'] = var10;
    var10 = 'section-favorites';
    var9['FAVORITES'] = var10;
    var10 = 'section-pending-join-requests';
    var9['PENDING_JOIN_REQUESTS'] = var10;
    var10 = 'section-lurking-guilds';
    var9['LURKING_GUILDS'] = var10;
    var10 = 'section-guest-guilds';
    var9['GUEST_GUILDS'] = var10;
    var10 = 'section-private-channels';
    var9['UNREAD_PRIVATE_CHANNELS'] = var10;
    var10 = 'section-separator';
    var9['SEPARATOR'] = var10;
    var10 = 'section-guilds';
    var9['GUILDS'] = var10;
    var _closure1_slot21 = var9;
    var4 = var8 * var4;
    var4 = var7 + var4;
    var _closure1_slot22 = var4;
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
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 31;
            var3 = var7[var3];
            var9 = undefined;
            var3 = var6.bind(var9)(var3);
            var3 = var3.bind(var9)();
            var26 = var3.top;
            var _closure2_slot1 = var26;
            var24 = var3.bottom;
            var _closure2_slot2 = var24;
            var8 = _closure1_slot0;
            var3 = 32;
            var3 = var7[var3];
            var5 = var8.bind(var9)(var3);
            var3 = var5.useMobileQuestDockHeight;
            var25 = var3.bind(var5)();
            var _closure2_slot3 = var25;
            var5 = _closure1_slot19;
            var23 = var5.bind(var9)();
            var _closure2_slot4 = var23;
            var3 = 4;
            var3 = var5.bind(var9)(var3);
            var _closure2_slot5 = var3;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var10 = new Array(3);
            var10[0] = var25;
            var10[1] = var26;
            var10[2] = var23;
            var5 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var3 = var1.listInsets;
                var2 = var3.set;
                var1 = {};
                var5 = _closure2_slot1;
                var1['start'] = var5;
                var5 = _closure2_slot3;
                var4 = _closure2_slot4;
                var4 = var5 + var4;
                var1['end'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var11.bind(var12)(var5, var10);
            var5 = 33;
            var5 = var7[var5];
            var5 = var8.bind(var9)(var5);
            var11 = var5.IOSInAppEducationExperiment;
            var10 = var11.useExperiment;
            var8 = {};
            var5 = 'Mobile GuildList';
            var8['location'] = var5;
            var5 = {};
            var12 = true;
            var5['autoTrackExposure'] = var12;
            var5 = var10.bind(var11)(var8, var5);
            var10 = var5.enabled;
            var _closure2_slot6 = var10;
            var5 = 34;
            var5 = var7[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.bind(var9)();
            var19 = 0;
            if(!var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var19 = 1;
case 54:
            var _closure2_slot7 = var19;
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 35;
            var6 = var21[var5];
            var12 = var13.bind(var9)(var6);
            var11 = var12.useStateFromStoresArray;
            var6 = _closure1_slot12;
            var8 = new Array(3);
            var8[0] = var6;
            var6 = _closure1_slot6;
            var8[1] = var6;
            var6 = _closure1_slot7;
            var8[2] = var6;
            var7 = function() {
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
            var6 = new Array(0);
            var15 = var11.bind(var12)(var8, var7, var6);
            var _closure2_slot8 = var15;
            var6 = 37;
            var6 = var21[var6];
            var6 = var13.bind(var9)(var6);
            var8 = var6.MobileHomeDrawerExperiment;
            var7 = var8.useConfig;
            var6 = {};
            var11 = 'guilds-bar';
            var6['location'] = var11;
            var6 = var7.bind(var8)(var6);
            var6 = var6.enableHome;
            var _closure2_slot9 = var6;
            var7 = var21[var5];
            var12 = var13.bind(var9)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var11.bind(var12)(var8, var7);
            var _closure2_slot10 = var12;
            var7 = var21[var5];
            var14 = var13.bind(var9)(var7);
            var11 = var14.useStateFromStoresArray;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGeoRestrictedGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var11.bind(var14)(var8, var7);
            var _closure2_slot11 = var14;
            var7 = var21[var5];
            var16 = var13.bind(var9)(var7);
            var11 = var16.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.lurkingGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var11.bind(var16)(var8, var7);
            var _closure2_slot12 = var17;
            var7 = var21[var5];
            var16 = var13.bind(var9)(var7);
            var11 = var16.useStateFromStoresArray;
            var7 = _closure1_slot11;
            var8 = new Array(2);
            var8[0] = var7;
            var7 = _closure1_slot10;
            var8[1] = var7;
            var7 = function() {
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
            var16 = var11.bind(var16)(var8, var7);
            var _closure2_slot13 = var16;
            var7 = var21[var5];
            var27 = var13.bind(var9)(var7);
            var22 = var27.useStateFromStores;
            var7 = _closure1_slot14;
            var18 = new Array(1);
            var18[0] = var7;
            var20 = _closure1_slot1;
            var7 = 38;
            var7 = var21[var7];
            var28 = var20.bind(var9)(var7);
            var30 = function() {
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
            var29 = new Array(0);
            var32 = var27;
            var31 = var18;
            var7 = var32[var22](var31, var30, var29, var28, var27);
            var11 = var7.guildsNFolders;
            var _closure2_slot14 = var11;
            var8 = var7.version;
            var7 = 39;
            var7 = var21[var7];
            var7 = var20.bind(var9)(var7);
            var18 = var7.bind(var9)();
            var7 = var18.expanded;
            var _closure2_slot15 = var7;
            var18 = var18.pendingFolderNode;
            var _closure2_slot16 = var18;
            var5 = var21[var5];
            var27 = var13.bind(var9)(var5);
            var22 = var27.useStateFromStores;
            var5 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                var1 = _closure1_slot9;
                var1 = var1.totalUnavailableGuilds;
                return var1;
            };
            var13 = var22.bind(var27)(var13, var5);
            var _closure2_slot17 = var13;
            var5 = _closure1_slot3;
            var22 = var5.useMemo;
            var4 = new Array(5);
            var4[0] = var26;
            var4[1] = var25;
            var4[2] = var24;
            var4[3] = var23;
            var4[4] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var3 = _closure1_slot18;
                    var7 = 3;
                    var3 = var7 * var3;
                    var4['top'] = var3;
                    var6 = _closure2_slot4;
                    var5 = 0;
                    if(!(!(var6 > var5))) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var6 = _closure2_slot2;
                    var5 = _closure1_slot18;
                    var5 = var7 * var5;
                    var5 = var6 + var5;
                    _fun0007_ip = 58; continue _fun0007;
case 56:
                    var5 = _closure2_slot4;
case 58:
                    var4['bottom'] = var5;
                    var1['scrollIndicatorInsets'] = var4;
                    var7 = _closure2_slot1;
                    var6 = _closure1_slot18;
                    var4 = 2;
                    var5 = var4 * var6;
                    var5 = var7 + var5;
                    var1['insetStart'] = var5;
                    var5 = _closure2_slot3;
                    var4 = var4 * var6;
                    var4 = var5 + var4;
                    var3 = _closure2_slot5;
                    var3 = var4 + var3;
                    var1['insetEnd'] = var3;
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
            var3 = var22.bind(var5)(var3, var4);
            var _closure2_slot18 = var3;
            var22 = var5.useCallback;
            var23 = var3.insetStart;
            var4 = new Array(3);
            var4[0] = var23;
            var23 = var3.insetEnd;
            var4[1] = var23;
            var4[2] = var2;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var1 = _closure2_slot0;
                    var6 = var1.current;
                    if(!(var2 != var6)) { _fun0008_ip = 61; continue _fun0008 }
case 34:
                    var5 = var6.scrollTo;
                    var3 = 0;
                    var1 = arg2;
                    var1 = var5.bind(var6)(var3, var1);
                    _fun0008_ip = 61; continue _fun0008;
case 59:
                    var3 = _closure1_slot25;
                    var1 = undefined;
                    var6 = var3.bind(var1)(var4);
                    if(!(var2 != var6)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0008_ip = 61; continue _fun0008 }
case 64:
                    var3 = var4.scrollToLocation;
                    var2 = {};
                    var9 = var2;
                    var8 = var6;
                    var6 = copyDataProperties(var9, var8);
                    var7 = 'visible';
                    var6 = 'orientation';
                    var2[var6] = var7;
                    var6 = _closure2_slot18;
                    var7 = var6.insetStart;
                    var6 = 'paddingStart';
                    var2[var6] = var7;
                    var5 = _closure2_slot18;
                    var6 = var5.insetEnd;
                    var5 = 'paddingEnd';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
case 61:
                    var2 = undefined;
                    return var2;
case 62:
                    return var1;
                }
            };
            var4 = var22.bind(var5)(var2, var4);
            var2 = 41;
            var2 = var21[var2];
            var2 = var20.bind(var9)(var2);
            var2 = var2.bind(var9)(var4);
            var9 = var5.useMemo;
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
                    if(!var6) { _fun0009_ip = 65; continue _fun0009 }
case 3:
                    var4 = _closure1_slot25;
                    var2 = var4.bind(var1)(var5);
case 65:
                    if(!(var3 == var2)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    return var1;
case 66:
                    var1 = {};
                    var3 = var2.item;
                    var1['initialScrollItem'] = var3;
                    var2 = var2.section;
                    var1['initialScrollSection'] = var2;
                    return var1;
                }
            };
            var2 = new Array(0);
            var9 = var9.bind(var5)(var4, var2);
            var _closure2_slot19 = var9;
            var4 = var5.useMemo;
            var2 = new Array(14);
            var2[0] = var19;
            var2[1] = var18;
            var2[2] = var17;
            var2[3] = var16;
            var2[4] = var15;
            var2[5] = var14;
            var2[6] = var13;
            var2[7] = var12;
            var2[8] = var11;
            var2[9] = var10;
            var2[10] = var9;
            var2[11] = var8;
            var2[12] = var7;
            var2[13] = var6;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var4 = [1];
                    var4[1] = var1;
                    var5 = _closure2_slot16;
                    var1 = null;
                    var5 = var1 == var5;
                    var7 = 0;
                    var1 = 0;
                    if(var5) { _fun0010_ip = 30; continue _fun0010 }
case 68:
                    var6 = _closure2_slot15;
                    var5 = 1;
                    if(!var6) { _fun0010_ip = 69; continue _fun0010 }
case 52:
                    var6 = _closure2_slot16;
                    var6 = var6.children;
                    var5 = var6.length;
case 69:
                    var1 = var5;
case 30:
                    var4[2] = var1;
                    var1 = _closure2_slot12;
                    var1 = var1.length;
                    var4[3] = var1;
                    var1 = _closure2_slot13;
                    var1 = var1.length;
                    var4[4] = var1;
                    var1 = global;
                    var8 = var1.Math;
                    var6 = var8.min;
                    var1 = _closure2_slot8;
                    var5 = var1.length;
                    var1 = 10;
                    var1 = var6.bind(var8)(var5, var1);
                    var4[5] = var1;
                    var10 = 1;
                    var4[6] = var10;
                    var5 = _closure1_slot23;
                    var1 = _closure2_slot14;
                    var8 = undefined;
                    var6 = var5.bind(var8)(var1);
                    var5 = var6.bind(var8)();
                    var1 = var5.done;
                    if(var1) { _fun0010_ip = 70; continue _fun0010 }
case 17:
                    var1 = var5.value;
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.GUILD;
                    if(!(var12 !== var11)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.FOLDER;
                    if(!(var12 === var11)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var12 = var1.expanded;
                    var11 = var4.push;
                    if(var12) { _fun0010_ip = 45; continue _fun0010 }
case 75:
                    var12 = var11.bind(var4)(var10);
                    _fun0010_ip = 73; continue _fun0010;
case 45:
                    var1 = var1.children;
                    var1 = var1.length;
                    var1 = var11.bind(var4)(var1);
                    _fun0010_ip = 73; continue _fun0010;
case 71:
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var10);
case 73:
                    var11 = var6.bind(var8)();
                    var1 = var11.done;
                    var5 = var11;
                    if(!var1) { _fun0010_ip = 17; continue _fun0010 }
case 70:
                    var1 = _closure2_slot11;
                    var1 = var1.length;
                    if(!(var1 > var7)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                    var5 = var4.push;
                    var1 = _closure2_slot11;
                    var1 = var1.length;
                    var1 = var5.bind(var4)(var1);
case 76:
                    var6 = new Array(0);
                    var _closure3_slot0 = var6;
                    var1 = _closure2_slot17;
                    if(!(var1 > var7)) { _fun0010_ip = 78; continue _fun0010 }
case 8:
                    var5 = var6.push;
                    var1 = 'unavailable-guilds';
                    var1 = var5.bind(var6)(var1);
case 78:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                    var5 = _closure2_slot14;
                    var5 = var5.length;
                    var1 = var7 === var5;
case 79:
                    if(!var1) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                    var5 = _closure2_slot17;
                    var1 = var7 === var5;
case 81:
                    if(!var1) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var5 = var6.push;
                    var1 = 'empty-nux';
                    var1 = var5.bind(var6)(var1);
case 83:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var5 = var6.push;
                    var1 = 'create-join-guild';
                    var1 = var5.bind(var6)(var1);
case 85:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                    var5 = var6.push;
                    var1 = 'app-education';
                    var1 = var5.bind(var6)(var1);
case 87:
                    var1 = {};
                    var13 = _closure2_slot19;
                    var14 = var1;
                    var3 = copyDataProperties(var14, var13);
                    var3 = 'sections';
                    var1[var3] = var4;
                    var4 = function sectionSize(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var5 = arg1;
                            var4 = _closure2_slot14;
                            var3 = _closure2_slot16;
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var5 === var1)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                            var1 = null;
                            if(!(var1 == var3)) { _fun0011_ip = 91; continue _fun0011 }
case 89:
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            var3 = var5 >= var1;
                            var1 = 0;
                            if(!var3) { _fun0011_ip = 92; continue _fun0011 }
case 28:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var5 - var3;
                            var4 = var4[var3];
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = 0;
                            if(var5) { _fun0011_ip = 13; continue _fun0011 }
case 93:
                            var5 = var4.type;
                            var4 = _closure1_slot15;
                            var4 = var4.FOLDER;
                            var3 = 0;
                            if(!(var5 === var4)) { _fun0011_ip = 13; continue _fun0011 }
case 94:
                            var3 = _closure1_slot22;
case 13:
                            var1 = var3;
                            _fun0011_ip = 92; continue _fun0011;
case 91:
                            var1 = _closure1_slot22;
case 92:
                            return var1;
                        }
                    };
                    var3 = 'sectionSize';
                    var1[var3] = var4;
                    var4 = function itemSize(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = {};
                            var2 = arg1;
                            var1['section'] = var2;
                            var2 = arg2;
                            var1['row'] = var2;
                            var3 = _closure2_slot14;
                            var1['guildsNFolders'] = var3;
                            var3 = _closure2_slot16;
                            var1['pendingFolderNode'] = var3;
                            var3 = _closure2_slot8;
                            var1['privateChannelIds'] = var3;
                            var2 = _closure2_slot11;
                            var1['geoRestrictedGuilds'] = var2;
                            var11 = var1.section;
                            var6 = var1.row;
                            var7 = var1.guildsNFolders;
                            var4 = var1.pendingFolderNode;
                            var5 = var1.privateChannelIds;
                            var10 = var1.geoRestrictedGuilds;
                            var1 = _closure1_slot17;
                            var1 = var1.MESSAGES;
                            if(!(var1 !== var11)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                            var1 = _closure1_slot17;
                            var1 = var1.FAVORITES;
                            if(!(var1 !== var11)) { _fun0012_ip = 95; continue _fun0012 }
case 97:
                            var1 = _closure1_slot17;
                            var1 = var1.LURKING_GUILDS;
                            if(!(var1 !== var11)) { _fun0012_ip = 95; continue _fun0012 }
case 98:
                            var1 = _closure1_slot17;
                            var1 = var1.GUEST_GUILDS;
                            if(!(var1 !== var11)) { _fun0012_ip = 95; continue _fun0012 }
case 99:
                            var1 = _closure1_slot17;
                            var1 = var1.UNREAD_PRIVATE_CHANNELS;
                            if(!(var1 !== var11)) { _fun0012_ip = 100; continue _fun0012 }
case 16:
                            var1 = _closure1_slot17;
                            var3 = var1.SEPARATOR;
                            var1 = 9;
                            if(!(var3 !== var11)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                            var3 = _closure1_slot17;
                            var3 = var3.PENDING_JOIN_REQUESTS;
                            if(!(var3 !== var11)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                            var9 = null;
                            var3 = var9 == var6;
                            var8 = 0;
                            var1 = 0;
                            if(var3) { _fun0012_ip = 101; continue _fun0012 }
case 54:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var11 - var3;
                            var11 = var7.length;
                            if(!(var11 >= var3)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                            var10 = var10[var6];
                            if(!(var9 == var10)) { _fun0012_ip = 107; continue _fun0012 }
case 105:
                            var7 = var7[var3];
                            var10 = var9 == var7;
                            var3 = 0;
                            if(var10) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.ROOT;
                            var3 = 0;
                            if(!(var11 !== var10)) { _fun0012_ip = 108; continue _fun0012 }
case 110:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if(!(var11 === var10)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                            var10 = var6 > var8;
                            var3 = 0;
                            if(var10) { _fun0012_ip = 108; continue _fun0012 }
case 111:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            if(!(var11 === var10)) { _fun0012_ip = 84; continue _fun0012 }
case 36:
                            var10 = var7.expanded;
                            var3 = 0;
                            if(!var10) { _fun0012_ip = 108; continue _fun0012 }
case 113:
                            var7 = var7.children;
                            var7 = var7[var6];
                            var7 = var9 == var7;
                            var3 = 0;
                            if(var7) { _fun0012_ip = 108; continue _fun0012 }
case 84:
                            var3 = _closure1_slot22;
case 108:
                            var1 = var3;
                            _fun0012_ip = 101; continue _fun0012;
case 107:
                            var1 = _closure1_slot22;
                            _fun0012_ip = 101; continue _fun0012;
case 103:
                            var8 = null;
                            var9 = var8 != var6;
                            var3 = 0;
                            if(!var9) { _fun0012_ip = 114; continue _fun0012 }
case 115:
                            var9 = var8 != var4;
                            var3 = 0;
                            if(!var9) { _fun0012_ip = 114; continue _fun0012 }
case 116:
                            var9 = var4.expanded;
                            var3 = 0;
                            if(!var9) { _fun0012_ip = 114; continue _fun0012 }
case 88:
                            var4 = var4.children;
                            var4 = var4[var6];
                            var4 = var8 != var4;
                            var3 = 0;
                            if(!var4) { _fun0012_ip = 114; continue _fun0012 }
case 117:
                            var3 = _closure1_slot22;
case 114:
                            var1 = var3;
                            _fun0012_ip = 101; continue _fun0012;
case 100:
                            var4 = null;
                            var7 = var4 != var6;
                            var3 = -1;
                            if(!var7) { _fun0012_ip = 118; continue _fun0012 }
case 119:
                            var3 = var6;
case 118:
                            var3 = var5[var3];
                            var4 = var4 == var3;
                            var3 = 0;
                            if(var4) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                            var3 = _closure1_slot22;
case 120:
                            var1 = var3;
                            _fun0012_ip = 101; continue _fun0012;
case 95:
                            var1 = _closure1_slot22;
case 101:
                            return var1;
                        }
                    };
                    var3 = 'itemSize';
                    var1[var3] = var4;
                    var4 = function footerSize() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = _closure1_slot23;
                            var8 = undefined;
                            var7 = var1.bind(var8)(var2);
                            var3 = var7.bind(var8)();
                            var1 = var3.done;
                            var6 = 9;
                            var5 = 'app-education';
                            var4 = var3;
                            var3 = 0;
                            var2 = 0;
                            if(var1) { _fun0013_ip = 122; continue _fun0013 }
case 5:
                            var1 = var4.value;
                            var10 = var3;
                            if(!(var5 === var1)) { _fun0013_ip = 63; continue _fun0013 }
case 7:
                            var10 = var3 + var6;
case 63:
                            var1 = _closure1_slot22;
                            var3 = var10 + var1;
                            var11 = var7.bind(var8)();
                            var1 = var11.done;
                            var4 = var11;
                            var2 = var3;
                            if(!var1) { _fun0013_ip = 5; continue _fun0013 }
case 122:
                            var1 = 8;
                            var1 = var2 + var1;
                            return var1;
                        }
                    };
                    var3 = 'footerSize';
                    var1[var3] = var4;
                    var4 = function renderSection(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var5 = arg1;
                            var4 = _closure2_slot14;
                            var9 = _closure2_slot16;
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            if(!(!(var5 >= var1))) { _fun0014_ip = 123; continue _fun0014 }
case 90:
                            var1 = _closure1_slot17;
                            var3 = var1.PENDING_JOIN_REQUESTS;
                            var6 = null;
                            var1 = null;
                            if(!(var5 === var3)) { _fun0014_ip = 124; continue _fun0014 }
case 125:
                            var3 = var6 != var9;
                            var1 = null;
                            if(!var3) { _fun0014_ip = 124; continue _fun0014 }
case 69:
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
                            _fun0014_ip = 124; continue _fun0014;
case 123:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var5 - var3;
                            var6 = var4[var3];
                            var4 = var6.type;
                            var3 = _closure1_slot15;
                            var3 = var3.FOLDER;
                            var1 = null;
                            if(!(var4 === var3)) { _fun0014_ip = 124; continue _fun0014 }
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
case 124:
                            return var1;
                        }
                    };
                    var3 = 'renderSection';
                    var1[var3] = var4;
                    var4 = function renderItem(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var10 = arg1;
                            var4 = arg2;
                            var9 = _closure2_slot14;
                            var6 = _closure2_slot8;
                            var3 = _closure2_slot12;
                            var5 = _closure2_slot13;
                            var8 = _closure2_slot11;
                            var7 = _closure2_slot16;
                            var1 = _closure1_slot17;
                            var1 = var1.MESSAGES;
                            if(!(var1 !== var10)) { _fun0015_ip = 126; continue _fun0015 }
case 56:
                            var1 = _closure1_slot17;
                            var1 = var1.FAVORITES;
                            if(!(var1 !== var10)) { _fun0015_ip = 127; continue _fun0015 }
case 35:
                            var1 = _closure1_slot17;
                            var1 = var1.LURKING_GUILDS;
                            if(!(var1 !== var10)) { _fun0015_ip = 128; continue _fun0015 }
case 129:
                            var1 = _closure1_slot17;
                            var1 = var1.GUEST_GUILDS;
                            if(!(var1 !== var10)) { _fun0015_ip = 130; continue _fun0015 }
case 131:
                            var1 = _closure1_slot17;
                            var1 = var1.UNREAD_PRIVATE_CHANNELS;
                            if(!(var1 !== var10)) { _fun0015_ip = 132; continue _fun0015 }
case 133:
                            var1 = _closure1_slot17;
                            var1 = var1.SEPARATOR;
                            if(!(var1 !== var10)) { _fun0015_ip = 134; continue _fun0015 }
case 135:
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var1 !== var10)) { _fun0015_ip = 136; continue _fun0015 }
case 61:
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            var1 = var10 - var1;
                            var10 = var9.length;
                            if(!(!(var1 >= var10))) { _fun0015_ip = 137; continue _fun0015 }
case 138:
                            var9 = var9[var1];
                            var12 = null;
                            var10 = var12 == var9;
                            var1 = null;
                            if(var10) { _fun0015_ip = 139; continue _fun0015 }
case 102:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.ROOT;
                            var1 = null;
                            if(!(var11 !== var10)) { _fun0015_ip = 139; continue _fun0015 }
case 140:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if(!(var11 === var10)) { _fun0015_ip = 141; continue _fun0015 }
case 142:
                            var10 = 0;
                            var10 = var4 > var10;
                            var1 = null;
                            if(var10) { _fun0015_ip = 139; continue _fun0015 }
case 141:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            var14 = var9;
                            if(!(var11 === var10)) { _fun0015_ip = 143; continue _fun0015 }
case 70:
                            var9 = var9.children;
                            var14 = var9[var4];
case 143:
                            var10 = var12 == var14;
                            var9 = null;
                            if(var10) { _fun0015_ip = 144; continue _fun0015 }
case 145:
                            var11 = var14.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            var9 = null;
                            if(!(var11 === var10)) { _fun0015_ip = 144; continue _fun0015 }
case 146:
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
case 144:
                            var1 = var9;
case 139:
                            _fun0015_ip = 147; continue _fun0015;
case 137:
                            var13 = var8[var4];
                            var8 = null;
                            var9 = var8 != var13;
                            if(!var9) { _fun0015_ip = 148; continue _fun0015 }
case 149:
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
case 148:
                            var1 = var8;
                            _fun0015_ip = 147; continue _fun0015;
case 136:
                            var10 = null;
                            var8 = var10 == var7;
                            var1 = null;
                            if(var8) { _fun0015_ip = 147; continue _fun0015 }
case 150:
                            var7 = var7.children;
                            var12 = var7[var4];
                            var8 = var10 == var12;
                            var7 = null;
                            if(var8) { _fun0015_ip = 151; continue _fun0015 }
case 152:
                            var9 = var12.type;
                            var8 = _closure1_slot15;
                            var8 = var8.GUILD;
                            var7 = null;
                            if(!(var9 === var8)) { _fun0015_ip = 151; continue _fun0015 }
case 153:
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
case 151:
                            var1 = var7;
                            _fun0015_ip = 147; continue _fun0015;
case 134:
                            var10 = _closure1_slot20;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 22;
                            var7 = var9[var7];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var7);
                            var7 = {};
                            var1 = var10.bind(var9)(var8, var7);
                            _fun0015_ip = 147; continue _fun0015;
case 132:
                            var11 = var6[var4];
                            var6 = null;
                            var7 = var6 == var11;
                            if(var7) { _fun0015_ip = 154; continue _fun0015 }
case 155:
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
case 154:
                            var1 = var6;
                            _fun0015_ip = 147; continue _fun0015;
case 130:
                            var10 = var5[var4];
                            var5 = null;
                            var6 = var5 == var10;
                            if(var6) { _fun0015_ip = 156; continue _fun0015 }
case 157:
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
case 156:
                            var1 = var5;
                            _fun0015_ip = 147; continue _fun0015;
case 128:
                            var8 = var3[var4];
                            var3 = null;
                            var4 = var3 == var8;
                            if(var4) { _fun0015_ip = 158; continue _fun0015 }
case 159:
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
case 158:
                            var1 = var3;
                            _fun0015_ip = 147; continue _fun0015;
case 127:
                            var6 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = {};
                            var1 = var6.bind(var5)(var4, var3);
                            _fun0015_ip = 147; continue _fun0015;
case 126:
                            var5 = _closure1_slot20;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var1 = var5.bind(var4)(var3, var2);
case 147:
                            return var1;
                        }
                    };
                    var3 = 'renderItem';
                    var1[var3] = var4;
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
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                    var5 = arg1;
                                    var1 = 'unavailable-guilds';
                                    if(!(var1 !== var5)) { _fun0016_ip = 160; continue _fun0016 }
case 161:
                                    var1 = 'empty-nux';
                                    if(!(var1 !== var5)) { _fun0016_ip = 123; continue _fun0016 }
case 162:
                                    var1 = 'create-join-guild';
                                    if(!(var1 !== var5)) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                                    var1 = 'app-education';
                                    if(!(var1 !== var5)) { _fun0016_ip = 52; continue _fun0016 }
case 2:
                                    var1 = undefined;
                                    return var1;
case 52:
                                    var4 = _closure1_slot20;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 29;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
case 163:
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
case 123:
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
case 160:
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
                    var1[var3] = var4;
                    var4 = function getRecyclerKey(arg1, arg2, arg3) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                            if(!(var2 !== var3)) { _fun0017_ip = 93; continue _fun0017 }
case 52:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.FastListItemTypes;
                            var2 = var2.SECTION;
                            if(!(var2 !== var3)) { _fun0017_ip = 93; continue _fun0017 }
case 165:
                            return var1;
case 93:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            if(!(!(var4 < var2))) { _fun0017_ip = 44; continue _fun0017 }
case 166:
                            var3 = _closure2_slot14;
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var4 - var2;
                            var2 = var3[var2];
                            var4 = null;
                            if(!(var4 != var2)) { _fun0017_ip = 44; continue _fun0017 }
case 167:
                            var7 = var2.type;
                            var3 = _closure1_slot15;
                            var3 = var3.ROOT;
                            if(!(var7 !== var3)) { _fun0017_ip = 44; continue _fun0017 }
case 61:
                            var8 = var2.type;
                            var3 = _closure1_slot15;
                            var7 = var3.FOLDER;
                            var3 = var2;
                            if(!(var8 === var7)) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                            if(!(var4 != var5)) { _fun0017_ip = 142; continue _fun0017 }
case 138:
                            var7 = var2.children;
                            var3 = var7[var5];
case 168:
                            var7 = var3.type;
                            var6 = _closure1_slot15;
                            var6 = var6.GUILD;
                            if(!(var7 === var6)) { _fun0017_ip = 170; continue _fun0017 }
case 171:
                            if(!(var4 != var5)) { _fun0017_ip = 44; continue _fun0017 }
case 170:
                            var5 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var3 = var4.bind(var3)(var5);
                            return var3;
case 142:
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
                    var1[var3] = var4;
                    var4 = function renderAccessory(arg1) {
                        var4 = _closure1_slot20;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 30;
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
                    var1[var3] = var4;
                    var4 = function getAnchorIdFromIndex(arg1, arg2) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dropSpecs;
                            var4 = null;
                            if(!(var4 == var1)) { _fun0018_ip = 56; continue _fun0018 }
case 172:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dragSpecs;
                            if(!(var4 != var1)) { _fun0018_ip = 58; continue _fun0018 }
case 56:
                            var1 = undefined;
                            return var1;
case 58:
                            var9 = {};
                            var1 = arg1;
                            var9['section'] = var1;
                            var1 = arg2;
                            var9['item'] = var1;
                            var3 = _closure2_slot12;
                            var9['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot13;
                            var9['guestGuildIds'] = var3;
                            var3 = _closure2_slot8;
                            var9['privateChannelIds'] = var3;
                            var3 = _closure2_slot14;
                            var9['guildsNFolders'] = var3;
                            var3 = _closure2_slot16;
                            var9['pendingFolderNode'] = var3;
                            var1 = _closure2_slot11;
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
                            if(!(var9 !== var11)) { _fun0018_ip = 173; continue _fun0018 }
case 72:
                            var9 = _closure1_slot17;
                            var9 = var9.FAVORITES;
                            if(!(var9 !== var11)) { _fun0018_ip = 174; continue _fun0018 }
case 175:
                            var9 = _closure1_slot17;
                            var9 = var9.PENDING_JOIN_REQUESTS;
                            if(!(var9 !== var11)) { _fun0018_ip = 176; continue _fun0018 }
case 177:
                            var9 = _closure1_slot17;
                            var9 = var9.LURKING_GUILDS;
                            if(!(var9 !== var11)) { _fun0018_ip = 178; continue _fun0018 }
case 179:
                            var9 = _closure1_slot17;
                            var9 = var9.GUEST_GUILDS;
                            if(!(var9 !== var11)) { _fun0018_ip = 180; continue _fun0018 }
case 181:
                            var9 = _closure1_slot17;
                            var9 = var9.UNREAD_PRIVATE_CHANNELS;
                            if(!(var9 !== var11)) { _fun0018_ip = 121; continue _fun0018 }
case 182:
                            var9 = _closure1_slot17;
                            var9 = var9.SEPARATOR;
                            if(!(var9 !== var11)) { _fun0018_ip = 183; continue _fun0018 }
case 184:
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = var11 - var9;
                            var11 = var1[var9];
                            if(!(var4 != var11)) { _fun0018_ip = 185; continue _fun0018 }
case 186:
                            if(!(var4 != var6)) { _fun0018_ip = 187; continue _fun0018 }
case 188:
                            var12 = var11.children;
                            var12 = var12[var6];
                            var14 = var4 == var12;
                            var13 = undefined;
                            if(var14) { _fun0018_ip = 189; continue _fun0018 }
case 51:
                            var13 = var12.id;
case 189:
                            _fun0018_ip = 190; continue _fun0018;
case 187:
                            var13 = var11.id;
case 190:
                            _fun0018_ip = 191; continue _fun0018;
case 185:
                            var1 = var1.length;
                            var11 = var9 >= var1;
                            var1 = undefined;
                            if(!var11) { _fun0018_ip = 192; continue _fun0018 }
case 108:
                            var11 = var4 != var6;
                            var1 = undefined;
                            if(!var11) { _fun0018_ip = 192; continue _fun0018 }
case 193:
                            var10 = var10[var6];
                            var11 = var4 == var10;
                            var9 = undefined;
                            if(var11) { _fun0018_ip = 194; continue _fun0018 }
case 115:
                            var9 = var10.id;
case 194:
                            var1 = var9;
case 192:
                            var13 = var1;
case 191:
                            var9 = var4 != var13;
                            var1 = undefined;
                            if(!var9) { _fun0018_ip = 152; continue _fun0018 }
case 88:
                            var9 = _closure1_slot21;
                            var12 = var9.GUILDS;
                            var9 = global;
                            var9 = var9.HermesInternal;
                            var11 = var9.concat;
                            var10 = '';
                            var9 = ':';
                            var1 = var11.bind(var10)(var12, var9, var13);
case 152:
                            _fun0018_ip = 195; continue _fun0018;
case 183:
                            var9 = _closure1_slot21;
                            var1 = var9.SEPARATOR;
                            _fun0018_ip = 195; continue _fun0018;
case 121:
                            if(!(var4 != var6)) { _fun0018_ip = 196; continue _fun0018 }
case 120:
                            var9 = _closure1_slot21;
                            var12 = var9.UNREAD_PRIVATE_CHANNELS;
                            var11 = var8[var6];
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var9 = '';
                            var8 = ':';
                            var8 = var10.bind(var9)(var12, var8, var11);
                            _fun0018_ip = 197; continue _fun0018;
case 196:
                            var9 = _closure1_slot21;
                            var8 = var9.UNREAD_PRIVATE_CHANNELS;
case 197:
                            var1 = var8;
                            _fun0018_ip = 195; continue _fun0018;
case 180:
                            if(!(var4 != var6)) { _fun0018_ip = 198; continue _fun0018 }
case 199:
                            var8 = _closure1_slot21;
                            var11 = var8.GUEST_GUILDS;
                            var10 = var7[var6];
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = ':';
                            var7 = var9.bind(var8)(var11, var7, var10);
                            _fun0018_ip = 200; continue _fun0018;
case 198:
                            var8 = _closure1_slot21;
                            var7 = var8.GUEST_GUILDS;
case 200:
                            var1 = var7;
                            _fun0018_ip = 195; continue _fun0018;
case 178:
                            if(!(var4 != var6)) { _fun0018_ip = 201; continue _fun0018 }
case 202:
                            var7 = _closure1_slot21;
                            var10 = var7.LURKING_GUILDS;
                            var9 = var3[var6];
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = '';
                            var3 = ':';
                            var3 = var8.bind(var7)(var10, var3, var9);
                            _fun0018_ip = 203; continue _fun0018;
case 201:
                            var7 = _closure1_slot21;
                            var3 = var7.LURKING_GUILDS;
case 203:
                            var1 = var3;
                            _fun0018_ip = 195; continue _fun0018;
case 176:
                            if(!(var4 != var6)) { _fun0018_ip = 204; continue _fun0018 }
case 205:
                            var7 = var4 == var5;
                            var8 = undefined;
                            if(var7) { _fun0018_ip = 206; continue _fun0018 }
case 207:
                            var5 = var5.children;
                            var5 = var5[var6];
                            var6 = var4 == var5;
                            var8 = undefined;
                            if(var6) { _fun0018_ip = 206; continue _fun0018 }
case 208:
                            var8 = var5.id;
case 206:
                            var4 = var4 != var8;
                            var3 = undefined;
                            if(!var4) { _fun0018_ip = 209; continue _fun0018 }
case 210:
                            var4 = _closure1_slot21;
                            var7 = var4.PENDING_JOIN_REQUESTS;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var6 = var4.concat;
                            var5 = '';
                            var4 = ':';
                            var3 = var6.bind(var5)(var7, var4, var8);
case 209:
                            var1 = var3;
                            _fun0018_ip = 195; continue _fun0018;
case 204:
                            var3 = _closure1_slot21;
                            var1 = var3.PENDING_JOIN_REQUESTS;
                            _fun0018_ip = 195; continue _fun0018;
case 174:
                            var3 = _closure1_slot21;
                            var1 = var3.FAVORITES;
                            _fun0018_ip = 195; continue _fun0018;
case 173:
                            var2 = _closure1_slot21;
                            var1 = var2.MESSAGES;
case 195:
                            return var1;
                        }
                    };
                    var3 = 'getAnchorIdFromIndex';
                    var1[var3] = var4;
                    var3 = function getAnchorIndexFromId(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var2 = {};
                            var1 = arg1;
                            var2['id'] = var1;
                            var3 = _closure2_slot12;
                            var2['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot13;
                            var2['guestGuildIds'] = var3;
                            var3 = _closure2_slot8;
                            var2['privateChannelIds'] = var3;
                            var3 = _closure2_slot14;
                            var2['guildsNFolders'] = var3;
                            var3 = _closure2_slot16;
                            var2['pendingFolderNode'] = var3;
                            var1 = _closure2_slot11;
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
                            if(!(var2 !== var9)) { _fun0019_ip = 211; continue _fun0019 }
case 212:
                            var2 = _closure1_slot21;
                            var2 = var2.FAVORITES;
                            if(!(var2 !== var9)) { _fun0019_ip = 213; continue _fun0019 }
case 214:
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            if(!(var2 !== var9)) { _fun0019_ip = 215; continue _fun0019 }
case 216:
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            if(!(var2 !== var9)) { _fun0019_ip = 217; continue _fun0019 }
case 218:
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            if(!(var2 !== var9)) { _fun0019_ip = 219; continue _fun0019 }
case 20:
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            if(!(var2 !== var9)) { _fun0019_ip = 220; continue _fun0019 }
case 74:
                            var2 = _closure1_slot21;
                            var2 = var2.SEPARATOR;
                            if(!(var2 !== var9)) { _fun0019_ip = 221; continue _fun0019 }
case 55:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0019_ip = 222; continue _fun0019 }
case 223:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0019_ip = 224; continue _fun0019 }
case 10:
                            var2 = null;
                            if(!(var2 != var1)) { _fun0019_ip = 224; continue _fun0019 }
case 225:
                            var2 = _closure1_slot23;
                            var1 = var1.children;
                            var14 = undefined;
                            var13 = var2.bind(var14)(var1);
                            var2 = var13.bind(var14)();
                            var1 = var2.done;
                            var11 = 0;
                            var12 = var2;
                            var10 = 0;
                            if(var1) { _fun0019_ip = 224; continue _fun0019 }
case 186:
                            var1 = var12.value;
                            var15 = _closure1_slot26;
                            var2 = _closure1_slot21;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var1 = var1.id;
                            var1 = var15.bind(var14)(var2, var9, var1);
                            var2 = var10;
                            if(var1) { _fun0019_ip = 226; continue _fun0019 }
case 227:
                            var10 = var2 + 1;
                            var15 = var13.bind(var14)();
                            var1 = var15.done;
                            var12 = var15;
                            if(var1) { _fun0019_ip = 224; continue _fun0019 }
case 107:
                            _fun0019_ip = 186; continue _fun0019;
case 226:
                            var1 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.PENDING_JOIN_REQUESTS;
                            var10 = var11 + var10;
                            var1['section'] = var10;
                            var1['item'] = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 224:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0019_ip = 229; continue _fun0019 }
case 230:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0019_ip = 231; continue _fun0019 }
case 118:
                            var2 = _closure1_slot23;
                            var13 = undefined;
                            var12 = var2.bind(var13)(var8);
                            var8 = var12.bind(var13)();
                            var2 = var8.done;
                            var10 = var8;
                            var11 = 0;
                            if(var2) { _fun0019_ip = 231; continue _fun0019 }
case 232:
                            var14 = var10.value;
                            var8 = _closure1_slot26;
                            var2 = _closure1_slot21;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var8.bind(var13)(var2, var9, var14);
                            var8 = var11;
                            if(var2) { _fun0019_ip = 233; continue _fun0019 }
case 234:
                            var11 = var8 + 1;
                            var14 = var12.bind(var13)();
                            var2 = var14.done;
                            var10 = var14;
                            if(var2) { _fun0019_ip = 231; continue _fun0019 }
case 235:
                            _fun0019_ip = 232; continue _fun0019;
case 233:
                            var2 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var10;
                            var2['item'] = var8;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 231:
                            var8 = var9.startsWith;
                            var2 = _closure1_slot21;
                            var2 = var2.GUILDS;
                            var2 = var8.bind(var9)(var2);
                            var12 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0019_ip = 228; continue _fun0019 }
case 236:
                            var2 = _closure1_slot23;
                            var14 = var2.bind(var12)(var7);
                            var7 = var14.bind(var12)();
                            var2 = var7.done;
                            var13 = var7;
                            var7 = 0;
                            var8 = 0;
                            if(var2) { _fun0019_ip = 237; continue _fun0019 }
case 238:
                            var2 = var13.value;
                            var16 = _closure1_slot26;
                            var10 = _closure1_slot21;
                            var15 = var10.GUILDS;
                            var10 = var2.id;
                            var15 = var16.bind(var12)(var15, var9, var10);
                            var10 = var7;
                            if(var15) { _fun0019_ip = 239; continue _fun0019 }
case 240:
                            var15 = _closure1_slot23;
                            var2 = var2.children;
                            var18 = var15.bind(var12)(var2);
                            var15 = var18.bind(var12)();
                            var2 = var15.done;
                            var17 = 0;
                            var16 = var15;
                            if(var2) { _fun0019_ip = 195; continue _fun0019 }
case 241:
                            var2 = var16.value;
                            var19 = _closure1_slot26;
                            var15 = _closure1_slot21;
                            var15 = var15.GUILDS;
                            var2 = var2.id;
                            var2 = var19.bind(var12)(var15, var9, var2);
                            var15 = var17;
                            if(var2) { _fun0019_ip = 242; continue _fun0019 }
case 127:
                            var17 = var15 + 1;
                            var19 = var18.bind(var12)();
                            var2 = var19.done;
                            var16 = var19;
                            if(var2) { _fun0019_ip = 195; continue _fun0019 }
case 204:
                            _fun0019_ip = 241; continue _fun0019;
case 242:
                            var2 = {};
                            var16 = _closure1_slot17;
                            var16 = var16.GUILDS;
                            var16 = var10 + var16;
                            var2['section'] = var16;
                            var2['item'] = var15;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 195:
                            var7 = var10 + 1;
                            var16 = var14.bind(var12)();
                            var2 = var16.done;
                            var13 = var16;
                            var8 = var7;
                            if(var2) { _fun0019_ip = 237; continue _fun0019 }
case 243:
                            _fun0019_ip = 238; continue _fun0019;
case 239:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var10 + var7;
                            var2['section'] = var7;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 237:
                            var2 = _closure1_slot23;
                            var10 = var2.bind(var12)(var6);
                            var6 = var10.bind(var12)();
                            var2 = var6.done;
                            var11 = 0;
                            var7 = var6;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 244:
                            var2 = var7.value;
                            var13 = _closure1_slot26;
                            var6 = _closure1_slot21;
                            var6 = var6.GUILDS;
                            var2 = var2.id;
                            var2 = var13.bind(var12)(var6, var9, var2);
                            var6 = var11;
                            if(var2) { _fun0019_ip = 245; continue _fun0019 }
case 246:
                            var11 = var6 + 1;
                            var13 = var10.bind(var12)();
                            var2 = var13.done;
                            var7 = var13;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 247:
                            _fun0019_ip = 244; continue _fun0019;
case 245:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var8 + var7;
                            var2['section'] = var7;
                            var2['item'] = var6;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 229:
                            var2 = _closure1_slot23;
                            var10 = undefined;
                            var8 = var2.bind(var10)(var5);
                            var5 = var8.bind(var10)();
                            var2 = var5.done;
                            var6 = var5;
                            var7 = 0;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 248:
                            var11 = var6.value;
                            var5 = _closure1_slot26;
                            var2 = _closure1_slot21;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var5.bind(var10)(var2, var9, var11);
                            var5 = var7;
                            if(var2) { _fun0019_ip = 249; continue _fun0019 }
case 250:
                            var7 = var5 + 1;
                            var11 = var8.bind(var10)();
                            var2 = var11.done;
                            var6 = var11;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 251:
                            _fun0019_ip = 248; continue _fun0019;
case 249:
                            var2 = {};
                            var6 = _closure1_slot17;
                            var6 = var6.GUEST_GUILDS;
                            var2['section'] = var6;
                            var2['item'] = var5;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 222:
                            var2 = _closure1_slot23;
                            var8 = undefined;
                            var7 = var2.bind(var8)(var4);
                            var4 = var7.bind(var8)();
                            var2 = var4.done;
                            var5 = var4;
                            var6 = 0;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 252:
                            var10 = var5.value;
                            var4 = _closure1_slot26;
                            var2 = _closure1_slot21;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var4.bind(var8)(var2, var9, var10);
                            var4 = var6;
                            if(var2) { _fun0019_ip = 253; continue _fun0019 }
case 254:
                            var6 = var4 + 1;
                            var10 = var7.bind(var8)();
                            var2 = var10.done;
                            var5 = var10;
                            var1 = undefined;
                            if(var2) { _fun0019_ip = 228; continue _fun0019 }
case 255:
                            _fun0019_ip = 252; continue _fun0019;
case 253:
                            var2 = {};
                            var5 = _closure1_slot17;
                            var5 = var5.LURKING_GUILDS;
                            var2['section'] = var5;
                            var2['item'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 221:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.SEPARATOR;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 220:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 219:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.GUEST_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 217:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.LURKING_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 215:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.PENDING_JOIN_REQUESTS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 213:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.FAVORITES;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0019_ip = 228; continue _fun0019;
case 211:
                            var2 = {};
                            var3 = _closure1_slot17;
                            var3 = var3.MESSAGES;
                            var2['section'] = var3;
                            var1 = var2;
case 228:
                            return var1;
                        }
                    };
                    var2 = 'getAnchorIndexFromId';
                    var1[var2] = var3;
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