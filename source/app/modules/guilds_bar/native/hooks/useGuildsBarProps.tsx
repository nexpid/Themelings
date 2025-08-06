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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function findGuildSectionIndex(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var1) { _fun0004_ip = 344; continue _fun0004 }
 70:
            var24 = var11.value;
            var19 = var10 + 1;
            var17 = var24.type;
            var1 = _closure1_slot15;
            var1 = var1.GUILD;
            if(!(var17 === var1)) { _fun0004_ip = 116; continue _fun0004 }
 97:
            var1 = var24.id;
            var5 = var19;
            var3 = 0;
            var2 = true;
            if(!(var1 !== var16)) { _fun0004_ip = 344; continue _fun0004 }
 116:
            var21 = var24.type;
            var1 = _closure1_slot15;
            var1 = var1.FOLDER;
            var18 = 0;
            var17 = var9;
            var20 = var6;
            if(!(var21 === var1)) { _fun0004_ip = 296; continue _fun0004 }
 146:
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
            if(var1) { _fun0004_ip = 296; continue _fun0004 }
 191:
            var1 = var26.value;
            var28 = var1.type;
            var22 = _closure1_slot15;
            var25 = var22.GUILD;
            var23 = var27;
            var22 = var26;
            var29 = var23;
            if(!(var28 === var25)) { _fun0004_ip = 236; continue _fun0004 }
 224:
            var25 = var1.id;
            if(!(var25 !== var16)) { _fun0004_ip = 271; continue _fun0004 }
 233:
            var29 = var23 + 1;
 236:
            var28 = var21.bind(var15)();
            var25 = var28.done;
            var27 = var29;
            var26 = var28;
            var18 = var27;
            var17 = var9;
            var8 = var26;
            var7 = var21;
            var20 = var1;
            if(var25) { _fun0004_ip = 296; continue _fun0004 }
 269:
            _fun0004_ip = 191; continue _fun0004;
 271:
            var24 = var24.expanded;
            if(var24) { _fun0004_ip = 282; continue _fun0004 }
 280:
            var23 = 0;
 282:
            var18 = var23;
            var17 = true;
            var8 = var22;
            var7 = var21;
            var20 = var1;
 296:
            var5 = var19;
            var3 = var18;
            var2 = var17;
            if(var2) { _fun0004_ip = 344; continue _fun0004 }
 308:
            var21 = var14.bind(var15)();
            var1 = var21.done;
            var11 = var21;
            var10 = var19;
            var9 = var17;
            var6 = var20;
            var5 = var10;
            var3 = var18;
            var2 = var9;
            if(!var1) { _fun0004_ip = 70; continue _fun0004 }
 344:
            var1 = null;
            if(!var2) { _fun0004_ip = 376; continue _fun0004 }
 349:
            var2 = {};
            var4 = _closure1_slot17;
            var4 = var4.GUILDS;
            var4 = var5 + var4;
            var2['section'] = var4;
            var2['item'] = var3;
            var1 = var2;
 376:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function isAnchorIdEqual(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg3;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0005_ip = 50; continue _fun0005 }
 12:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = '';
            var3 = arg1;
            var2 = ':';
            var3 = var5.bind(var4)(var3, var2, var6);
            var2 = arg2;
            var1 = var2 === var3;
 50:
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
    var9 = var9.jsx;
    var _closure1_slot19 = var9;
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
    var _closure1_slot20 = var9;
    var4 = var8 * var4;
    var4 = var7 + var4;
    var _closure1_slot21 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarProps(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 31;
            var3 = var7[var3];
            var8 = undefined;
            var3 = var6.bind(var8)(var3);
            var3 = var3.bind(var8)();
            var23 = var3.top;
            var _closure2_slot1 = var23;
            var3 = var3.bottom;
            var _closure2_slot2 = var3;
            var9 = _closure1_slot0;
            var5 = 32;
            var5 = var7[var5];
            var10 = var9.bind(var8)(var5);
            var5 = var10.useMobileQuestDockHeight;
            var22 = var5.bind(var10)();
            var _closure2_slot3 = var22;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var10 = new Array(2);
            var10[0] = var22;
            var10[1] = var23;
            var5 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var3 = var1.listInsets;
                var2 = var3.set;
                var1 = {};
                var5 = _closure2_slot1;
                var1['start'] = var5;
                var4 = _closure2_slot3;
                var1['end'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var11.bind(var12)(var5, var10);
            var5 = 33;
            var5 = var7[var5];
            var5 = var9.bind(var8)(var5);
            var11 = var5.IOSInAppEducationExperiment;
            var10 = var11.useExperiment;
            var9 = {};
            var5 = 'Mobile GuildList';
            var9['location'] = var5;
            var5 = {};
            var12 = true;
            var5['autoTrackExposure'] = var12;
            var5 = var10.bind(var11)(var9, var5);
            var9 = var5.enabled;
            var _closure2_slot4 = var9;
            var5 = 34;
            var5 = var7[var5];
            var5 = var6.bind(var8)(var5);
            var5 = var5.bind(var8)();
            var18 = 0;
            if(!var5) { _fun0006_ip = 204; continue _fun0006 }
 201:
            var18 = 1;
 204:
            var _closure2_slot5 = var18;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 35;
            var6 = var20[var5];
            var13 = var12.bind(var8)(var6);
            var11 = var13.useStateFromStoresArray;
            var6 = _closure1_slot12;
            var10 = new Array(3);
            var10[0] = var6;
            var6 = _closure1_slot6;
            var10[1] = var6;
            var6 = _closure1_slot7;
            var10[2] = var6;
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
            var14 = var11.bind(var13)(var10, var7, var6);
            var _closure2_slot6 = var14;
            var6 = var20[var5];
            var11 = var12.bind(var8)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var10.bind(var11)(var7, var6);
            var _closure2_slot7 = var11;
            var6 = var20[var5];
            var13 = var12.bind(var8)(var6);
            var10 = var13.useStateFromStoresArray;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGeoRestrictedGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var10.bind(var13)(var7, var6);
            var _closure2_slot8 = var13;
            var6 = var20[var5];
            var15 = var12.bind(var8)(var6);
            var10 = var15.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.lurkingGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var10.bind(var15)(var7, var6);
            var _closure2_slot9 = var16;
            var6 = var20[var5];
            var15 = var12.bind(var8)(var6);
            var10 = var15.useStateFromStoresArray;
            var6 = _closure1_slot11;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = _closure1_slot10;
            var7[1] = var6;
            var6 = function() {
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
            var15 = var10.bind(var15)(var7, var6);
            var _closure2_slot10 = var15;
            var6 = var20[var5];
            var24 = var12.bind(var8)(var6);
            var21 = var24.useStateFromStores;
            var6 = _closure1_slot14;
            var17 = new Array(1);
            var17[0] = var6;
            var19 = _closure1_slot1;
            var6 = 37;
            var6 = var20[var6];
            var25 = var19.bind(var8)(var6);
            var27 = function() {
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
            var26 = new Array(0);
            var29 = var24;
            var28 = var17;
            var6 = var29[var21](var28, var27, var26, var25, var24);
            var10 = var6.guildsNFolders;
            var _closure2_slot11 = var10;
            var7 = var6.version;
            var6 = 38;
            var6 = var20[var6];
            var6 = var19.bind(var8)(var6);
            var17 = var6.bind(var8)();
            var6 = var17.expanded;
            var _closure2_slot12 = var6;
            var17 = var17.pendingFolderNode;
            var _closure2_slot13 = var17;
            var5 = var20[var5];
            var24 = var12.bind(var8)(var5);
            var21 = var24.useStateFromStores;
            var5 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                var1 = _closure1_slot9;
                var1 = var1.totalUnavailableGuilds;
                return var1;
            };
            var12 = var21.bind(var24)(var12, var5);
            var _closure2_slot14 = var12;
            var5 = _closure1_slot3;
            var21 = var5.useMemo;
            var4 = new Array(3);
            var4[0] = var23;
            var4[1] = var22;
            var4[2] = var3;
            var3 = function() {
                var1 = {};
                var3 = {};
                var5 = _closure1_slot18;
                var6 = 3;
                var4 = var6 * var5;
                var3['top'] = var4;
                var7 = _closure2_slot2;
                var6 = var6 * var5;
                var6 = var7 + var6;
                var3['bottom'] = var6;
                var1['scrollIndicatorInsets'] = var3;
                var7 = _closure2_slot1;
                var3 = 2;
                var6 = var3 * var5;
                var6 = var7 + var6;
                var1['insetStart'] = var6;
                var4 = _closure2_slot3;
                var3 = var3 * var5;
                var3 = var4 + var3;
                var1['insetEnd'] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 39;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getWindowDimensions;
                var2 = var2.bind(var3)();
                var2 = var2.height;
                var1['chunkBase'] = var2;
                return var1;
            };
            var3 = var21.bind(var5)(var3, var4);
            var _closure2_slot15 = var3;
            var21 = var5.useCallback;
            var22 = var3.insetStart;
            var4 = new Array(3);
            var4[0] = var22;
            var22 = var3.insetEnd;
            var4[1] = var22;
            var4[2] = var2;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0007_ip = 47; continue _fun0007 }
 9:
                    var1 = _closure2_slot0;
                    var6 = var1.current;
                    if(!(var2 != var6)) { _fun0007_ip = 155; continue _fun0007 }
 28:
                    var5 = var6.scrollTo;
                    var3 = 0;
                    var1 = arg2;
                    var1 = var5.bind(var6)(var3, var1);
                    _fun0007_ip = 155; continue _fun0007;
 47:
                    var3 = _closure1_slot24;
                    var1 = undefined;
                    var6 = var3.bind(var1)(var4);
                    if(!(var2 != var6)) { _fun0007_ip = 159; continue _fun0007 }
 65:
                    var3 = _closure2_slot0;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0007_ip = 155; continue _fun0007 }
 81:
                    var3 = var4.scrollToLocation;
                    var2 = {};
                    var9 = var2;
                    var8 = var6;
                    var6 = copyDataProperties(var9, var8);
                    var7 = 'visible';
                    var6 = 'orientation';
                    var2[var6] = var7;
                    var6 = _closure2_slot15;
                    var7 = var6.insetStart;
                    var6 = 'paddingStart';
                    var2[var6] = var7;
                    var5 = _closure2_slot15;
                    var6 = var5.insetEnd;
                    var5 = 'paddingEnd';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
 155:
                    var2 = undefined;
                    return var2;
 159:
                    return var1;
                }
            };
            var4 = var21.bind(var5)(var2, var4);
            var2 = 40;
            var2 = var20[var2];
            var2 = var19.bind(var8)(var2);
            var2 = var2.bind(var8)(var4);
            var8 = var5.useMemo;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure1_slot13;
                    var1 = var2.getGuildId;
                    var5 = var1.bind(var2)();
                    var3 = null;
                    var6 = var3 != var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(!var6) { _fun0008_ip = 39; continue _fun0008 }
 30:
                    var4 = _closure1_slot24;
                    var2 = var4.bind(var1)(var5);
 39:
                    if(!(var3 == var2)) { _fun0008_ip = 45; continue _fun0008 }
 43:
                    return var1;
 45:
                    var1 = {};
                    var3 = var2.item;
                    var1['initialScrollItem'] = var3;
                    var2 = var2.section;
                    var1['initialScrollSection'] = var2;
                    return var1;
                }
            };
            var2 = new Array(0);
            var8 = var8.bind(var5)(var4, var2);
            var _closure2_slot16 = var8;
            var4 = var5.useMemo;
            var2 = new Array(13);
            var2[0] = var18;
            var2[1] = var17;
            var2[2] = var16;
            var2[3] = var15;
            var2[4] = var14;
            var2[5] = var13;
            var2[6] = var12;
            var2[7] = var11;
            var2[8] = var10;
            var2[9] = var9;
            var2[10] = var8;
            var2[11] = var7;
            var2[12] = var6;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot5;
                    var4 = [1];
                    var4[1] = var1;
                    var5 = _closure2_slot13;
                    var1 = null;
                    var5 = var1 == var5;
                    var7 = 0;
                    var1 = 0;
                    if(var5) { _fun0009_ip = 67; continue _fun0009 }
 40:
                    var6 = _closure2_slot12;
                    var5 = 1;
                    if(!var6) { _fun0009_ip = 64; continue _fun0009 }
 50:
                    var6 = _closure2_slot13;
                    var6 = var6.children;
                    var5 = var6.length;
 64:
                    var1 = var5;
 67:
                    var4[2] = var1;
                    var1 = _closure2_slot9;
                    var1 = var1.length;
                    var4[3] = var1;
                    var1 = _closure2_slot10;
                    var1 = var1.length;
                    var4[4] = var1;
                    var1 = global;
                    var8 = var1.Math;
                    var6 = var8.min;
                    var1 = _closure2_slot6;
                    var5 = var1.length;
                    var1 = 10;
                    var1 = var6.bind(var8)(var5, var1);
                    var4[5] = var1;
                    var10 = 1;
                    var4[6] = var10;
                    var5 = _closure1_slot22;
                    var1 = _closure2_slot11;
                    var8 = undefined;
                    var6 = var5.bind(var8)(var1);
                    var5 = var6.bind(var8)();
                    var1 = var5.done;
                    if(var1) { _fun0009_ip = 275; continue _fun0009 }
 169:
                    var1 = var5.value;
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.GUILD;
                    if(!(var12 !== var11)) { _fun0009_ip = 250; continue _fun0009 }
 193:
                    var12 = var1.type;
                    var11 = _closure1_slot15;
                    var11 = var11.FOLDER;
                    if(!(var12 === var11)) { _fun0009_ip = 260; continue _fun0009 }
 212:
                    var12 = var1.expanded;
                    var11 = var4.push;
                    if(var12) { _fun0009_ip = 233; continue _fun0009 }
 226:
                    var12 = var11.bind(var4)(var10);
                    _fun0009_ip = 260; continue _fun0009;
 233:
                    var1 = var1.children;
                    var1 = var1.length;
                    var1 = var11.bind(var4)(var1);
                    _fun0009_ip = 260; continue _fun0009;
 250:
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var10);
 260:
                    var11 = var6.bind(var8)();
                    var1 = var11.done;
                    var5 = var11;
                    if(!var1) { _fun0009_ip = 169; continue _fun0009 }
 275:
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    if(!(var1 > var7)) { _fun0009_ip = 307; continue _fun0009 }
 288:
                    var5 = var4.push;
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    var1 = var5.bind(var4)(var1);
 307:
                    var6 = new Array(0);
                    var _closure3_slot0 = var6;
                    var1 = _closure2_slot14;
                    if(!(var1 > var7)) { _fun0009_ip = 339; continue _fun0009 }
 323:
                    var5 = var6.push;
                    var1 = 'unavailable-guilds';
                    var1 = var5.bind(var6)(var1);
 339:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0009_ip = 359; continue _fun0009 }
 346:
                    var5 = _closure2_slot11;
                    var5 = var5.length;
                    var1 = var7 === var5;
 359:
                    if(!var1) { _fun0009_ip = 370; continue _fun0009 }
 362:
                    var5 = _closure2_slot14;
                    var1 = var7 === var5;
 370:
                    if(!var1) { _fun0009_ip = 389; continue _fun0009 }
 373:
                    var5 = var6.push;
                    var1 = 'empty-nux';
                    var1 = var5.bind(var6)(var1);
 389:
                    var5 = var6.push;
                    var1 = 'create-join-guild';
                    var1 = var5.bind(var6)(var1);
                    var5 = var6.push;
                    var1 = 'hubs';
                    var1 = var5.bind(var6)(var1);
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0009_ip = 444; continue _fun0009 }
 428:
                    var5 = var6.push;
                    var1 = 'app-education';
                    var1 = var5.bind(var6)(var1);
 444:
                    var1 = {};
                    var13 = _closure2_slot16;
                    var14 = var1;
                    var3 = copyDataProperties(var14, var13);
                    var3 = 'sections';
                    var1[var3] = var4;
                    var4 = function sectionSize(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var5 = arg1;
                            var4 = _closure2_slot11;
                            var3 = _closure2_slot13;
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var5 === var1)) { _fun0010_ip = 37; continue _fun0010 }
 31:
                            var1 = null;
                            if(!(var1 == var3)) { _fun0010_ip = 115; continue _fun0010 }
 37:
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            var3 = var5 >= var1;
                            var1 = 0;
                            if(!var3) { _fun0010_ip = 119; continue _fun0010 }
 56:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var5 - var3;
                            var4 = var4[var3];
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = 0;
                            if(var5) { _fun0010_ip = 110; continue _fun0010 }
 85:
                            var5 = var4.type;
                            var4 = _closure1_slot15;
                            var4 = var4.FOLDER;
                            var3 = 0;
                            if(!(var5 === var4)) { _fun0010_ip = 110; continue _fun0010 }
 106:
                            var3 = _closure1_slot21;
 110:
                            var1 = var3;
                            _fun0010_ip = 119; continue _fun0010;
 115:
                            var1 = _closure1_slot21;
 119:
                            return var1;
                        }
                    };
                    var3 = 'sectionSize';
                    var1[var3] = var4;
                    var4 = function itemSize(arg1, arg2) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = {};
                            var2 = arg1;
                            var1['section'] = var2;
                            var2 = arg2;
                            var1['row'] = var2;
                            var3 = _closure2_slot11;
                            var1['guildsNFolders'] = var3;
                            var3 = _closure2_slot13;
                            var1['pendingFolderNode'] = var3;
                            var3 = _closure2_slot6;
                            var1['privateChannelIds'] = var3;
                            var2 = _closure2_slot8;
                            var1['geoRestrictedGuilds'] = var2;
                            var11 = var1.section;
                            var6 = var1.row;
                            var7 = var1.guildsNFolders;
                            var4 = var1.pendingFolderNode;
                            var5 = var1.privateChannelIds;
                            var10 = var1.geoRestrictedGuilds;
                            var1 = _closure1_slot17;
                            var1 = var1.MESSAGES;
                            if(!(var1 !== var11)) { _fun0011_ip = 486; continue _fun0011 }
 111:
                            var1 = _closure1_slot17;
                            var1 = var1.FAVORITES;
                            if(!(var1 !== var11)) { _fun0011_ip = 486; continue _fun0011 }
 128:
                            var1 = _closure1_slot17;
                            var1 = var1.LURKING_GUILDS;
                            if(!(var1 !== var11)) { _fun0011_ip = 486; continue _fun0011 }
 145:
                            var1 = _closure1_slot17;
                            var1 = var1.GUEST_GUILDS;
                            if(!(var1 !== var11)) { _fun0011_ip = 486; continue _fun0011 }
 162:
                            var1 = _closure1_slot17;
                            var1 = var1.UNREAD_PRIVATE_CHANNELS;
                            if(!(var1 !== var11)) { _fun0011_ip = 446; continue _fun0011 }
 179:
                            var1 = _closure1_slot17;
                            var3 = var1.SEPARATOR;
                            var1 = 9;
                            if(!(var3 !== var11)) { _fun0011_ip = 490; continue _fun0011 }
 199:
                            var3 = _closure1_slot17;
                            var3 = var3.PENDING_JOIN_REQUESTS;
                            if(!(var3 !== var11)) { _fun0011_ip = 388; continue _fun0011 }
 216:
                            var9 = null;
                            var3 = var9 == var6;
                            var8 = 0;
                            var1 = 0;
                            if(var3) { _fun0011_ip = 490; continue _fun0011 }
 232:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var11 - var3;
                            var11 = var7.length;
                            if(!(var11 >= var3)) { _fun0011_ip = 263; continue _fun0011 }
 255:
                            var10 = var10[var6];
                            if(!(var9 == var10)) { _fun0011_ip = 382; continue _fun0011 }
 263:
                            var7 = var7[var3];
                            var10 = var9 == var7;
                            var3 = 0;
                            if(var10) { _fun0011_ip = 377; continue _fun0011 }
 276:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.ROOT;
                            var3 = 0;
                            if(!(var11 !== var10)) { _fun0011_ip = 377; continue _fun0011 }
 297:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if(!(var11 === var10)) { _fun0011_ip = 325; continue _fun0011 }
 316:
                            var10 = var6 > var8;
                            var3 = 0;
                            if(var10) { _fun0011_ip = 377; continue _fun0011 }
 325:
                            var11 = var7.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            if(!(var11 === var10)) { _fun0011_ip = 373; continue _fun0011 }
 344:
                            var10 = var7.expanded;
                            var3 = 0;
                            if(!var10) { _fun0011_ip = 377; continue _fun0011 }
 355:
                            var7 = var7.children;
                            var7 = var7[var6];
                            var7 = var9 == var7;
                            var3 = 0;
                            if(var7) { _fun0011_ip = 377; continue _fun0011 }
 373:
                            var3 = _closure1_slot21;
 377:
                            var1 = var3;
                            _fun0011_ip = 490; continue _fun0011;
 382:
                            var1 = _closure1_slot21;
                            _fun0011_ip = 490; continue _fun0011;
 388:
                            var8 = null;
                            var9 = var8 != var6;
                            var3 = 0;
                            if(!var9) { _fun0011_ip = 441; continue _fun0011 }
 399:
                            var9 = var8 != var4;
                            var3 = 0;
                            if(!var9) { _fun0011_ip = 441; continue _fun0011 }
 408:
                            var9 = var4.expanded;
                            var3 = 0;
                            if(!var9) { _fun0011_ip = 441; continue _fun0011 }
 419:
                            var4 = var4.children;
                            var4 = var4[var6];
                            var4 = var8 != var4;
                            var3 = 0;
                            if(!var4) { _fun0011_ip = 441; continue _fun0011 }
 437:
                            var3 = _closure1_slot21;
 441:
                            var1 = var3;
                            _fun0011_ip = 490; continue _fun0011;
 446:
                            var4 = null;
                            var7 = var4 != var6;
                            var3 = -1;
                            if(!var7) { _fun0011_ip = 464; continue _fun0011 }
 461:
                            var3 = var6;
 464:
                            var3 = var5[var3];
                            var4 = var4 == var3;
                            var3 = 0;
                            if(var4) { _fun0011_ip = 481; continue _fun0011 }
 477:
                            var3 = _closure1_slot21;
 481:
                            var1 = var3;
                            _fun0011_ip = 490; continue _fun0011;
 486:
                            var1 = _closure1_slot21;
 490:
                            return var1;
                        }
                    };
                    var3 = 'itemSize';
                    var1[var3] = var4;
                    var4 = function footerSize() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = _closure1_slot22;
                            var8 = undefined;
                            var7 = var1.bind(var8)(var2);
                            var3 = var7.bind(var8)();
                            var1 = var3.done;
                            var6 = 9;
                            var5 = 'app-education';
                            var4 = var3;
                            var3 = 0;
                            var2 = 0;
                            if(var1) { _fun0012_ip = 91; continue _fun0012 }
 49:
                            var1 = var4.value;
                            var10 = var3;
                            if(!(var5 === var1)) { _fun0012_ip = 65; continue _fun0012 }
 61:
                            var10 = var3 + var6;
 65:
                            var1 = _closure1_slot21;
                            var3 = var10 + var1;
                            var11 = var7.bind(var8)();
                            var1 = var11.done;
                            var4 = var11;
                            var2 = var3;
                            if(!var1) { _fun0012_ip = 49; continue _fun0012 }
 91:
                            var1 = 8;
                            var1 = var2 + var1;
                            return var1;
                        }
                    };
                    var3 = 'footerSize';
                    var1[var3] = var4;
                    var4 = function renderSection(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var5 = arg1;
                            var4 = _closure2_slot11;
                            var9 = _closure2_slot13;
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            if(!(!(var5 >= var1))) { _fun0013_ip = 130; continue _fun0013 }
 31:
                            var1 = _closure1_slot17;
                            var3 = var1.PENDING_JOIN_REQUESTS;
                            var6 = null;
                            var1 = null;
                            if(!(var5 === var3)) { _fun0013_ip = 251; continue _fun0013 }
 52:
                            var3 = var6 != var9;
                            var1 = null;
                            if(!var3) { _fun0013_ip = 251; continue _fun0013 }
 64:
                            var8 = _closure1_slot19;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 16;
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
                            _fun0013_ip = 251; continue _fun0013;
 130:
                            var3 = _closure1_slot17;
                            var3 = var3.GUILDS;
                            var3 = var5 - var3;
                            var6 = var4[var3];
                            var4 = var6.type;
                            var3 = _closure1_slot15;
                            var3 = var3.FOLDER;
                            var1 = null;
                            if(!(var4 === var3)) { _fun0013_ip = 251; continue _fun0013 }
 169:
                            var5 = _closure1_slot19;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
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
 251:
                            return var1;
                        }
                    };
                    var3 = 'renderSection';
                    var1[var3] = var4;
                    var4 = function renderItem(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var10 = arg1;
                            var4 = arg2;
                            var9 = _closure2_slot11;
                            var6 = _closure2_slot6;
                            var3 = _closure2_slot9;
                            var5 = _closure2_slot10;
                            var8 = _closure2_slot8;
                            var7 = _closure2_slot13;
                            var1 = _closure1_slot17;
                            var1 = var1.MESSAGES;
                            if(!(var1 !== var10)) { _fun0014_ip = 778; continue _fun0014 }
 53:
                            var1 = _closure1_slot17;
                            var1 = var1.FAVORITES;
                            if(!(var1 !== var10)) { _fun0014_ip = 742; continue _fun0014 }
 70:
                            var1 = _closure1_slot17;
                            var1 = var1.LURKING_GUILDS;
                            if(!(var1 !== var10)) { _fun0014_ip = 686; continue _fun0014 }
 87:
                            var1 = _closure1_slot17;
                            var1 = var1.GUEST_GUILDS;
                            if(!(var1 !== var10)) { _fun0014_ip = 627; continue _fun0014 }
 104:
                            var1 = _closure1_slot17;
                            var1 = var1.UNREAD_PRIVATE_CHANNELS;
                            if(!(var1 !== var10)) { _fun0014_ip = 568; continue _fun0014 }
 121:
                            var1 = _closure1_slot17;
                            var1 = var1.SEPARATOR;
                            if(!(var1 !== var10)) { _fun0014_ip = 529; continue _fun0014 }
 138:
                            var1 = _closure1_slot17;
                            var1 = var1.PENDING_JOIN_REQUESTS;
                            if(!(var1 !== var10)) { _fun0014_ip = 425; continue _fun0014 }
 155:
                            var1 = _closure1_slot17;
                            var1 = var1.GUILDS;
                            var1 = var10 - var1;
                            var10 = var9.length;
                            if(!(!(var1 >= var10))) { _fun0014_ip = 365; continue _fun0014 }
 181:
                            var9 = var9[var1];
                            var12 = null;
                            var10 = var12 == var9;
                            var1 = null;
                            if(var10) { _fun0014_ip = 360; continue _fun0014 }
 199:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.ROOT;
                            var1 = null;
                            if(!(var11 !== var10)) { _fun0014_ip = 360; continue _fun0014 }
 223:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if(!(var11 === var10)) { _fun0014_ip = 253; continue _fun0014 }
 242:
                            var10 = 0;
                            var10 = var4 > var10;
                            var1 = null;
                            if(var10) { _fun0014_ip = 360; continue _fun0014 }
 253:
                            var11 = var9.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            var14 = var9;
                            if(!(var11 === var10)) { _fun0014_ip = 284; continue _fun0014 }
 275:
                            var9 = var9.children;
                            var14 = var9[var4];
 284:
                            var10 = var12 == var14;
                            var9 = null;
                            if(var10) { _fun0014_ip = 357; continue _fun0014 }
 293:
                            var11 = var14.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            var9 = null;
                            if(!(var11 === var10)) { _fun0014_ip = 357; continue _fun0014 }
 314:
                            var13 = _closure1_slot19;
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 19;
                            var10 = var12[var10];
                            var12 = undefined;
                            var11 = var11.bind(var12)(var10);
                            var10 = {};
                            var14 = var14.id;
                            var10['guildId'] = var14;
                            var9 = var13.bind(var12)(var11, var10);
 357:
                            var1 = var9;
 360:
                            _fun0014_ip = 812; continue _fun0014;
 365:
                            var13 = var8[var4];
                            var8 = null;
                            var9 = var8 != var13;
                            if(!var9) { _fun0014_ip = 417; continue _fun0014 }
 378:
                            var12 = _closure1_slot19;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 23;
                            var9 = var11[var9];
                            var11 = undefined;
                            var10 = var10.bind(var11)(var9);
                            var9 = {};
                            var9['restrictedGuild'] = var13;
                            var8 = var12.bind(var11)(var10, var9);
 417:
                            var1 = var8;
                            _fun0014_ip = 812; continue _fun0014;
 425:
                            var10 = null;
                            var8 = var10 == var7;
                            var1 = null;
                            if(var8) { _fun0014_ip = 812; continue _fun0014 }
 439:
                            var7 = var7.children;
                            var12 = var7[var4];
                            var8 = var10 == var12;
                            var7 = null;
                            if(var8) { _fun0014_ip = 521; continue _fun0014 }
 457:
                            var9 = var12.type;
                            var8 = _closure1_slot15;
                            var8 = var8.GUILD;
                            var7 = null;
                            if(!(var9 === var8)) { _fun0014_ip = 521; continue _fun0014 }
 478:
                            var11 = _closure1_slot19;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 22;
                            var8 = var10[var8];
                            var10 = undefined;
                            var9 = var9.bind(var10)(var8);
                            var8 = {};
                            var12 = var12.id;
                            var8['guildId'] = var12;
                            var7 = var11.bind(var10)(var9, var8);
 521:
                            var1 = var7;
                            _fun0014_ip = 812; continue _fun0014;
 529:
                            var10 = _closure1_slot19;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 21;
                            var7 = var9[var7];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var7);
                            var7 = {};
                            var1 = var10.bind(var9)(var8, var7);
                            _fun0014_ip = 812; continue _fun0014;
 568:
                            var11 = var6[var4];
                            var6 = null;
                            var7 = var6 == var11;
                            if(var7) { _fun0014_ip = 619; continue _fun0014 }
 581:
                            var10 = _closure1_slot19;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 20;
                            var7 = var9[var7];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var7);
                            var7 = {};
                            var7['channelId'] = var11;
                            var6 = var10.bind(var9)(var8, var7);
 619:
                            var1 = var6;
                            _fun0014_ip = 812; continue _fun0014;
 627:
                            var10 = var5[var4];
                            var5 = null;
                            var6 = var5 == var10;
                            if(var6) { _fun0014_ip = 678; continue _fun0014 }
 640:
                            var9 = _closure1_slot19;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 19;
                            var6 = var8[var6];
                            var8 = undefined;
                            var7 = var7.bind(var8)(var6);
                            var6 = {};
                            var6['guildId'] = var10;
                            var5 = var9.bind(var8)(var7, var6);
 678:
                            var1 = var5;
                            _fun0014_ip = 812; continue _fun0014;
 686:
                            var8 = var3[var4];
                            var3 = null;
                            var4 = var3 == var8;
                            if(var4) { _fun0014_ip = 737; continue _fun0014 }
 699:
                            var7 = _closure1_slot19;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 19;
                            var4 = var6[var4];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var4);
                            var4 = {};
                            var4['guildId'] = var8;
                            var3 = var7.bind(var6)(var5, var4);
 737:
                            var1 = var3;
                            _fun0014_ip = 812; continue _fun0014;
 742:
                            var6 = _closure1_slot19;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 18;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = {};
                            var1 = var6.bind(var5)(var4, var3);
                            _fun0014_ip = 812; continue _fun0014;
 778:
                            var5 = _closure1_slot19;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var1 = var5.bind(var4)(var3, var2);
 812:
                            return var1;
                        }
                    };
                    var3 = 'renderItem';
                    var1[var3] = var4;
                    var4 = function renderFooter() {
                        var3 = _closure3_slot0;
                        var2 = function renderFooterJSX(arg1) {
                            var7 = arg1;
                            var4 = _closure1_slot19;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = var7.map;
                            var5 = function(arg1) {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                    var5 = arg1;
                                    var1 = 'unavailable-guilds';
                                    if(!(var1 !== var5)) { _fun0015_ip = 223; continue _fun0015 }
 16:
                                    var1 = 'empty-nux';
                                    if(!(var1 !== var5)) { _fun0015_ip = 183; continue _fun0015 }
 29:
                                    var1 = 'create-join-guild';
                                    if(!(var1 !== var5)) { _fun0015_ip = 143; continue _fun0015 }
 39:
                                    var1 = 'hubs';
                                    if(!(var1 !== var5)) { _fun0015_ip = 103; continue _fun0015 }
 49:
                                    var1 = 'app-education';
                                    if(!(var1 !== var5)) { _fun0015_ip = 63; continue _fun0015 }
 59:
                                    var1 = undefined;
                                    return var1;
 63:
                                    var4 = _closure1_slot19;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 29;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
 103:
                                    var4 = _closure1_slot19;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 28;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
 143:
                                    var4 = _closure1_slot19;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 27;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
 183:
                                    var4 = _closure1_slot19;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 26;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    return var1;
 223:
                                    var4 = _closure1_slot19;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 25;
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
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var3 = arg1;
                            var4 = arg2;
                            var5 = arg3;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 41;
                            var2 = var1[var8];
                            var1 = undefined;
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.FastListItemTypes;
                            var2 = var2.ITEM;
                            if(!(var2 !== var3)) { _fun0016_ip = 85; continue _fun0016 }
 50:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.FastListItemTypes;
                            var2 = var2.SECTION;
                            if(!(var2 !== var3)) { _fun0016_ip = 85; continue _fun0016 }
 83:
                            return var1;
 85:
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            if(!(!(var4 < var2))) { _fun0016_ip = 271; continue _fun0016 }
 102:
                            var3 = _closure2_slot11;
                            var2 = _closure1_slot17;
                            var2 = var2.GUILDS;
                            var2 = var4 - var2;
                            var2 = var3[var2];
                            var4 = null;
                            if(!(var4 != var2)) { _fun0016_ip = 271; continue _fun0016 }
 136:
                            var7 = var2.type;
                            var3 = _closure1_slot15;
                            var3 = var3.ROOT;
                            if(!(var7 !== var3)) { _fun0016_ip = 271; continue _fun0016 }
 155:
                            var8 = var2.type;
                            var3 = _closure1_slot15;
                            var7 = var3.FOLDER;
                            var3 = var2;
                            if(!(var8 === var7)) { _fun0016_ip = 190; continue _fun0016 }
 177:
                            if(!(var4 != var5)) { _fun0016_ip = 242; continue _fun0016 }
 181:
                            var7 = var2.children;
                            var3 = var7[var5];
 190:
                            var7 = var3.type;
                            var6 = _closure1_slot15;
                            var6 = var6.GUILD;
                            if(!(var7 === var6)) { _fun0016_ip = 213; continue _fun0016 }
 209:
                            if(!(var4 != var5)) { _fun0016_ip = 271; continue _fun0016 }
 213:
                            var5 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var3 = var4.bind(var3)(var5);
                            return var3;
 242:
                            var4 = var2.id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = '';
                            var2 = var3.bind(var2)(var4);
                            return var2;
 271:
                            return var1;
                        }
                    };
                    var3 = 'getRecyclerKey';
                    var1[var3] = var4;
                    var4 = function renderAccessory(arg1) {
                        var4 = _closure1_slot19;
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
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dropSpecs;
                            var4 = null;
                            if(!(var4 == var1)) { _fun0017_ip = 53; continue _fun0017 }
 29:
                            var3 = _closure1_slot16;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var1 = var1.dragSpecs;
                            if(!(var4 != var1)) { _fun0017_ip = 57; continue _fun0017 }
 53:
                            var1 = undefined;
                            return var1;
 57:
                            var9 = {};
                            var1 = arg1;
                            var9['section'] = var1;
                            var1 = arg2;
                            var9['item'] = var1;
                            var3 = _closure2_slot9;
                            var9['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot10;
                            var9['guestGuildIds'] = var3;
                            var3 = _closure2_slot6;
                            var9['privateChannelIds'] = var3;
                            var3 = _closure2_slot11;
                            var9['guildsNFolders'] = var3;
                            var3 = _closure2_slot13;
                            var9['pendingFolderNode'] = var3;
                            var1 = _closure2_slot8;
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
                            if(!(var9 !== var11)) { _fun0017_ip = 784; continue _fun0017 }
 193:
                            var9 = _closure1_slot17;
                            var9 = var9.FAVORITES;
                            if(!(var9 !== var11)) { _fun0017_ip = 772; continue _fun0017 }
 210:
                            var9 = _closure1_slot17;
                            var9 = var9.PENDING_JOIN_REQUESTS;
                            if(!(var9 !== var11)) { _fun0017_ip = 672; continue _fun0017 }
 227:
                            var9 = _closure1_slot17;
                            var9 = var9.LURKING_GUILDS;
                            if(!(var9 !== var11)) { _fun0017_ip = 609; continue _fun0017 }
 244:
                            var9 = _closure1_slot17;
                            var9 = var9.GUEST_GUILDS;
                            if(!(var9 !== var11)) { _fun0017_ip = 543; continue _fun0017 }
 261:
                            var9 = _closure1_slot17;
                            var9 = var9.UNREAD_PRIVATE_CHANNELS;
                            if(!(var9 !== var11)) { _fun0017_ip = 477; continue _fun0017 }
 278:
                            var9 = _closure1_slot17;
                            var9 = var9.SEPARATOR;
                            if(!(var9 !== var11)) { _fun0017_ip = 462; continue _fun0017 }
 295:
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = _closure1_slot17;
                            var9 = var9.GUILDS;
                            var9 = var11 - var9;
                            var11 = var1[var9];
                            if(!(var4 != var11)) { _fun0017_ip = 363; continue _fun0017 }
 327:
                            if(!(var4 != var6)) { _fun0017_ip = 356; continue _fun0017 }
 331:
                            var12 = var11.children;
                            var12 = var12[var6];
                            var14 = var4 == var12;
                            var13 = undefined;
                            if(var14) { _fun0017_ip = 354; continue _fun0017 }
 349:
                            var13 = var12.id;
 354:
                            _fun0017_ip = 361; continue _fun0017;
 356:
                            var13 = var11.id;
 361:
                            _fun0017_ip = 410; continue _fun0017;
 363:
                            var1 = var1.length;
                            var11 = var9 >= var1;
                            var1 = undefined;
                            if(!var11) { _fun0017_ip = 407; continue _fun0017 }
 377:
                            var11 = var4 != var6;
                            var1 = undefined;
                            if(!var11) { _fun0017_ip = 407; continue _fun0017 }
 386:
                            var10 = var10[var6];
                            var11 = var4 == var10;
                            var9 = undefined;
                            if(var11) { _fun0017_ip = 404; continue _fun0017 }
 399:
                            var9 = var10.id;
 404:
                            var1 = var9;
 407:
                            var13 = var1;
 410:
                            var9 = var4 != var13;
                            var1 = undefined;
                            if(!var9) { _fun0017_ip = 457; continue _fun0017 }
 419:
                            var9 = _closure1_slot20;
                            var12 = var9.GUILDS;
                            var9 = global;
                            var9 = var9.HermesInternal;
                            var11 = var9.concat;
                            var10 = '';
                            var9 = ':';
                            var1 = var11.bind(var10)(var12, var9, var13);
 457:
                            _fun0017_ip = 794; continue _fun0017;
 462:
                            var9 = _closure1_slot20;
                            var1 = var9.SEPARATOR;
                            _fun0017_ip = 794; continue _fun0017;
 477:
                            if(!(var4 != var6)) { _fun0017_ip = 525; continue _fun0017 }
 481:
                            var9 = _closure1_slot20;
                            var12 = var9.UNREAD_PRIVATE_CHANNELS;
                            var11 = var8[var6];
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var9 = '';
                            var8 = ':';
                            var8 = var10.bind(var9)(var12, var8, var11);
                            _fun0017_ip = 535; continue _fun0017;
 525:
                            var9 = _closure1_slot20;
                            var8 = var9.UNREAD_PRIVATE_CHANNELS;
 535:
                            var1 = var8;
                            _fun0017_ip = 794; continue _fun0017;
 543:
                            if(!(var4 != var6)) { _fun0017_ip = 591; continue _fun0017 }
 547:
                            var8 = _closure1_slot20;
                            var11 = var8.GUEST_GUILDS;
                            var10 = var7[var6];
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = ':';
                            var7 = var9.bind(var8)(var11, var7, var10);
                            _fun0017_ip = 601; continue _fun0017;
 591:
                            var8 = _closure1_slot20;
                            var7 = var8.GUEST_GUILDS;
 601:
                            var1 = var7;
                            _fun0017_ip = 794; continue _fun0017;
 609:
                            if(!(var4 != var6)) { _fun0017_ip = 657; continue _fun0017 }
 613:
                            var7 = _closure1_slot20;
                            var10 = var7.LURKING_GUILDS;
                            var9 = var3[var6];
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = '';
                            var3 = ':';
                            var3 = var8.bind(var7)(var10, var3, var9);
                            _fun0017_ip = 667; continue _fun0017;
 657:
                            var7 = _closure1_slot20;
                            var3 = var7.LURKING_GUILDS;
 667:
                            var1 = var3;
                            _fun0017_ip = 794; continue _fun0017;
 672:
                            if(!(var4 != var6)) { _fun0017_ip = 760; continue _fun0017 }
 676:
                            var7 = var4 == var5;
                            var8 = undefined;
                            if(var7) { _fun0017_ip = 708; continue _fun0017 }
 685:
                            var5 = var5.children;
                            var5 = var5[var6];
                            var6 = var4 == var5;
                            var8 = undefined;
                            if(var6) { _fun0017_ip = 708; continue _fun0017 }
 703:
                            var8 = var5.id;
 708:
                            var4 = var4 != var8;
                            var3 = undefined;
                            if(!var4) { _fun0017_ip = 755; continue _fun0017 }
 717:
                            var4 = _closure1_slot20;
                            var7 = var4.PENDING_JOIN_REQUESTS;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var6 = var4.concat;
                            var5 = '';
                            var4 = ':';
                            var3 = var6.bind(var5)(var7, var4, var8);
 755:
                            var1 = var3;
                            _fun0017_ip = 794; continue _fun0017;
 760:
                            var3 = _closure1_slot20;
                            var1 = var3.PENDING_JOIN_REQUESTS;
                            _fun0017_ip = 794; continue _fun0017;
 772:
                            var3 = _closure1_slot20;
                            var1 = var3.FAVORITES;
                            _fun0017_ip = 794; continue _fun0017;
 784:
                            var2 = _closure1_slot20;
                            var1 = var2.MESSAGES;
 794:
                            return var1;
                        }
                    };
                    var3 = 'getAnchorIdFromIndex';
                    var1[var3] = var4;
                    var3 = function getAnchorIndexFromId(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var2 = {};
                            var1 = arg1;
                            var2['id'] = var1;
                            var3 = _closure2_slot9;
                            var2['lurkingGuildsIds'] = var3;
                            var3 = _closure2_slot10;
                            var2['guestGuildIds'] = var3;
                            var3 = _closure2_slot6;
                            var2['privateChannelIds'] = var3;
                            var3 = _closure2_slot11;
                            var2['guildsNFolders'] = var3;
                            var3 = _closure2_slot13;
                            var2['pendingFolderNode'] = var3;
                            var1 = _closure2_slot8;
                            var2['geoRestrictedGuilds'] = var1;
                            var9 = var2.id;
                            var4 = var2.lurkingGuildsIds;
                            var5 = var2.guestGuildIds;
                            var8 = var2.privateChannelIds;
                            var7 = var2.guildsNFolders;
                            var1 = var2.pendingFolderNode;
                            var6 = var2.geoRestrictedGuilds;
                            var2 = _closure1_slot20;
                            var2 = var2.MESSAGES;
                            if(!(var2 !== var9)) { _fun0018_ip = 1338; continue _fun0018 }
 127:
                            var2 = _closure1_slot20;
                            var2 = var2.FAVORITES;
                            if(!(var2 !== var9)) { _fun0018_ip = 1317; continue _fun0018 }
 144:
                            var2 = _closure1_slot20;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            if(!(var2 !== var9)) { _fun0018_ip = 1296; continue _fun0018 }
 161:
                            var2 = _closure1_slot20;
                            var2 = var2.LURKING_GUILDS;
                            if(!(var2 !== var9)) { _fun0018_ip = 1275; continue _fun0018 }
 178:
                            var2 = _closure1_slot20;
                            var2 = var2.GUEST_GUILDS;
                            if(!(var2 !== var9)) { _fun0018_ip = 1254; continue _fun0018 }
 195:
                            var2 = _closure1_slot20;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            if(!(var2 !== var9)) { _fun0018_ip = 1233; continue _fun0018 }
 212:
                            var2 = _closure1_slot20;
                            var2 = var2.SEPARATOR;
                            if(!(var2 !== var9)) { _fun0018_ip = 1209; continue _fun0018 }
 229:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot20;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0018_ip = 1091; continue _fun0018 }
 256:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot20;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0018_ip = 413; continue _fun0018 }
 283:
                            var2 = null;
                            if(!(var2 != var1)) { _fun0018_ip = 413; continue _fun0018 }
 292:
                            var2 = _closure1_slot22;
                            var1 = var1.children;
                            var14 = undefined;
                            var13 = var2.bind(var14)(var1);
                            var2 = var13.bind(var14)();
                            var1 = var2.done;
                            var11 = 0;
                            var12 = var2;
                            var10 = 0;
                            if(var1) { _fun0018_ip = 413; continue _fun0018 }
 327:
                            var1 = var12.value;
                            var15 = _closure1_slot25;
                            var2 = _closure1_slot20;
                            var2 = var2.PENDING_JOIN_REQUESTS;
                            var1 = var1.id;
                            var1 = var15.bind(var14)(var2, var9, var1);
                            var2 = var10;
                            if(var1) { _fun0018_ip = 384; continue _fun0018 }
 364:
                            var10 = var2 + 1;
                            var15 = var13.bind(var14)();
                            var1 = var15.done;
                            var12 = var15;
                            if(var1) { _fun0018_ip = 413; continue _fun0018 }
 382:
                            _fun0018_ip = 327; continue _fun0018;
 384:
                            var1 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.PENDING_JOIN_REQUESTS;
                            var10 = var11 + var10;
                            var1['section'] = var10;
                            var1['item'] = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 413:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot20;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var10.bind(var9)(var2);
                            if(var2) { _fun0018_ip = 973; continue _fun0018 }
 440:
                            var10 = var9.startsWith;
                            var2 = _closure1_slot20;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var10.bind(var9)(var2);
                            if(!var2) { _fun0018_ip = 572; continue _fun0018 }
 464:
                            var2 = _closure1_slot22;
                            var13 = undefined;
                            var12 = var2.bind(var13)(var8);
                            var8 = var12.bind(var13)();
                            var2 = var8.done;
                            var10 = var8;
                            var11 = 0;
                            if(var2) { _fun0018_ip = 572; continue _fun0018 }
 492:
                            var14 = var10.value;
                            var8 = _closure1_slot25;
                            var2 = _closure1_slot20;
                            var2 = var2.UNREAD_PRIVATE_CHANNELS;
                            var2 = var8.bind(var13)(var2, var9, var14);
                            var8 = var11;
                            if(var2) { _fun0018_ip = 544; continue _fun0018 }
 524:
                            var11 = var8 + 1;
                            var14 = var12.bind(var13)();
                            var2 = var14.done;
                            var10 = var14;
                            if(var2) { _fun0018_ip = 572; continue _fun0018 }
 542:
                            _fun0018_ip = 492; continue _fun0018;
 544:
                            var2 = {};
                            var10 = _closure1_slot17;
                            var10 = var10.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var10;
                            var2['item'] = var8;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 572:
                            var8 = var9.startsWith;
                            var2 = _closure1_slot20;
                            var2 = var2.GUILDS;
                            var2 = var8.bind(var9)(var2);
                            var12 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0018_ip = 1357; continue _fun0018 }
 603:
                            var2 = _closure1_slot22;
                            var14 = var2.bind(var12)(var7);
                            var7 = var14.bind(var12)();
                            var2 = var7.done;
                            var13 = var7;
                            var7 = 0;
                            var8 = 0;
                            if(var2) { _fun0018_ip = 848; continue _fun0018 }
 634:
                            var2 = var13.value;
                            var16 = _closure1_slot25;
                            var10 = _closure1_slot20;
                            var15 = var10.GUILDS;
                            var10 = var2.id;
                            var15 = var16.bind(var12)(var15, var9, var10);
                            var10 = var7;
                            if(var15) { _fun0018_ip = 820; continue _fun0018 }
 674:
                            var15 = _closure1_slot22;
                            var2 = var2.children;
                            var18 = var15.bind(var12)(var2);
                            var15 = var18.bind(var12)();
                            var2 = var15.done;
                            var17 = 0;
                            var16 = var15;
                            if(var2) { _fun0018_ip = 794; continue _fun0018 }
 705:
                            var2 = var16.value;
                            var19 = _closure1_slot25;
                            var15 = _closure1_slot20;
                            var15 = var15.GUILDS;
                            var2 = var2.id;
                            var2 = var19.bind(var12)(var15, var9, var2);
                            var15 = var17;
                            if(var2) { _fun0018_ip = 762; continue _fun0018 }
 742:
                            var17 = var15 + 1;
                            var19 = var18.bind(var12)();
                            var2 = var19.done;
                            var16 = var19;
                            if(var2) { _fun0018_ip = 794; continue _fun0018 }
 760:
                            _fun0018_ip = 705; continue _fun0018;
 762:
                            var2 = {};
                            var16 = _closure1_slot17;
                            var16 = var16.GUILDS;
                            var16 = var10 + var16;
                            var2['section'] = var16;
                            var2['item'] = var15;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 794:
                            var7 = var10 + 1;
                            var16 = var14.bind(var12)();
                            var2 = var16.done;
                            var13 = var16;
                            var8 = var7;
                            if(var2) { _fun0018_ip = 848; continue _fun0018 }
 815:
                            _fun0018_ip = 634; continue _fun0018;
 820:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var10 + var7;
                            var2['section'] = var7;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 848:
                            var2 = _closure1_slot22;
                            var10 = var2.bind(var12)(var6);
                            var6 = var10.bind(var12)();
                            var2 = var6.done;
                            var11 = 0;
                            var7 = var6;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 879:
                            var2 = var7.value;
                            var13 = _closure1_slot25;
                            var6 = _closure1_slot20;
                            var6 = var6.GUILDS;
                            var2 = var2.id;
                            var2 = var13.bind(var12)(var6, var9, var2);
                            var6 = var11;
                            if(var2) { _fun0018_ip = 941; continue _fun0018 }
 916:
                            var11 = var6 + 1;
                            var13 = var10.bind(var12)();
                            var2 = var13.done;
                            var7 = var13;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 939:
                            _fun0018_ip = 879; continue _fun0018;
 941:
                            var2 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.GUILDS;
                            var7 = var8 + var7;
                            var2['section'] = var7;
                            var2['item'] = var6;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 973:
                            var2 = _closure1_slot22;
                            var10 = undefined;
                            var8 = var2.bind(var10)(var5);
                            var5 = var8.bind(var10)();
                            var2 = var5.done;
                            var6 = var5;
                            var7 = 0;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 1006:
                            var11 = var6.value;
                            var5 = _closure1_slot25;
                            var2 = _closure1_slot20;
                            var2 = var2.GUEST_GUILDS;
                            var2 = var5.bind(var10)(var2, var9, var11);
                            var5 = var7;
                            if(var2) { _fun0018_ip = 1063; continue _fun0018 }
 1038:
                            var7 = var5 + 1;
                            var11 = var8.bind(var10)();
                            var2 = var11.done;
                            var6 = var11;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 1061:
                            _fun0018_ip = 1006; continue _fun0018;
 1063:
                            var2 = {};
                            var6 = _closure1_slot17;
                            var6 = var6.GUEST_GUILDS;
                            var2['section'] = var6;
                            var2['item'] = var5;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1091:
                            var2 = _closure1_slot22;
                            var8 = undefined;
                            var7 = var2.bind(var8)(var4);
                            var4 = var7.bind(var8)();
                            var2 = var4.done;
                            var5 = var4;
                            var6 = 0;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 1124:
                            var10 = var5.value;
                            var4 = _closure1_slot25;
                            var2 = _closure1_slot20;
                            var2 = var2.LURKING_GUILDS;
                            var2 = var4.bind(var8)(var2, var9, var10);
                            var4 = var6;
                            if(var2) { _fun0018_ip = 1181; continue _fun0018 }
 1156:
                            var6 = var4 + 1;
                            var10 = var7.bind(var8)();
                            var2 = var10.done;
                            var5 = var10;
                            var1 = undefined;
                            if(var2) { _fun0018_ip = 1357; continue _fun0018 }
 1179:
                            _fun0018_ip = 1124; continue _fun0018;
 1181:
                            var2 = {};
                            var5 = _closure1_slot17;
                            var5 = var5.LURKING_GUILDS;
                            var2['section'] = var5;
                            var2['item'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1209:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.SEPARATOR;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1233:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.UNREAD_PRIVATE_CHANNELS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1254:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.GUEST_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1275:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.LURKING_GUILDS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1296:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.PENDING_JOIN_REQUESTS;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1317:
                            var2 = {};
                            var4 = _closure1_slot17;
                            var4 = var4.FAVORITES;
                            var2['section'] = var4;
                            var1 = var2;
                            _fun0018_ip = 1357; continue _fun0018;
 1338:
                            var2 = {};
                            var3 = _closure1_slot17;
                            var3 = var3.MESSAGES;
                            var2['section'] = var3;
                            var1 = var2;
 1357:
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