// app/modules/app_dms/useAppDMChatInputState.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useQueryState;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot9 = var4;
    var7 = 7;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationCommandType;
    var8 = var4.PRIMARY_ENTRY_POINT;
    var4 = new Array(4);
    var4[0] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandType;
    var8 = var8.CHAT;
    var4[1] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandType;
    var8 = var8.MESSAGE;
    var4[2] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ApplicationCommandType;
    var7 = var7.USER;
    var4[3] = var7;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useAppDMChatInputState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAppDMChatInputState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.context;
            var10 = undefined;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isDM;
                    var2 = var2.bind(var3)();
                    var4 = true;
                    if(!(var4 === var2)) { _fun0002_ip = 80; continue _fun0002 }
 23:
                    var3 = _closure1_slot8;
                    var2 = var3.getUser;
                    var5 = _closure2_slot0;
                    var1 = var5.getRecipientId;
                    var1 = var1.bind(var5)();
                    var2 = var2.bind(var3)(var1);
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var2)) { _fun0002_ip = 78; continue _fun0002 }
 63:
                    var3 = var2.bot;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0002_ip = 78; continue _fun0002 }
 75:
                    var1 = var2;
 78:
                    return var1;
 80:
                    var1 = null;
                    return var1;
                }
            };
            var9 = var5.bind(var6)(var2, var4);
            var _closure2_slot1 = var9;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 8;
            var2 = var12[var5];
            var13 = var8.bind(var10)(var2);
            var7 = var13.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.isFetchingProfile;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var7 = var5 == var1;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 40; continue _fun0003 }
 31:
                    var6 = _closure2_slot1;
                    var1 = var6.id;
 40:
                    if(!(var5 == var1)) { _fun0003_ip = 48; continue _fun0003 }
 44:
                    var1 = _closure1_slot9;
 48:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var13)(var6, var2);
            var6 = _closure1_slot1;
            var2 = 9;
            var2 = var12[var2];
            var2 = var6.bind(var10)(var2);
            var6 = var2.bind(var10)(var7);
            var2 = var12[var5];
            var15 = var8.bind(var10)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getAppIdForBotUserId;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 40; continue _fun0004 }
 31:
                    var4 = _closure2_slot1;
                    var1 = var4.id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var14.bind(var15)(var13, var2);
            var5 = var12[var5];
            var12 = var8.bind(var10)(var5);
            var8 = var12.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var4 = null;
                    var1 = undefined;
                    if(!(var4 !== var3)) { _fun0005_ip = 72; continue _fun0005 }
 15:
                    var6 = _closure1_slot6;
                    var5 = var6.getUserProfile;
                    var3 = _closure2_slot1;
                    var8 = var4 == var3;
                    var3 = undefined;
                    if(var8) { _fun0005_ip = 50; continue _fun0005 }
 41:
                    var7 = _closure2_slot1;
                    var3 = var7.id;
 50:
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 69; continue _fun0005 }
 64:
                    var2 = var3.application;
 69:
                    var1 = var2;
 72:
                    return var1;
                }
            };
            var8 = var8.bind(var12)(var5, var4);
            var5 = null;
            var4 = var2;
            if(!(var5 == var4)) { _fun0001_ip = 229; continue _fun0001 }
 212:
            var12 = var5 == var8;
            var2 = undefined;
            if(var12) { _fun0001_ip = 226; continue _fun0001 }
 221:
            var2 = var8.id;
 226:
            var4 = var2;
 229:
            _closure2_slot2 = var4;
            var13 = _closure1_slot3;
            var12 = var13.useEffect;
            var8 = new Array(2);
            var8[0] = var9;
            var8[1] = var4;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0006_ip = 84; continue _fun0006 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var7 = var5 == var2;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 60; continue _fun0006 }
 51:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
 60:
                    if(!(var5 == var2)) { _fun0006_ip = 68; continue _fun0006 }
 64:
                    var2 = _closure1_slot9;
 68:
                    var1 = {};
                    var5 = true;
                    var1['withMutualGuilds'] = var5;
                    var1 = var3.bind(var4)(var2, var4, var1);
 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var13)(var2, var8);
            var12 = var13.useEffect;
            var8 = var5 == var9;
            var2 = undefined;
            if(var8) { _fun0001_ip = 284; continue _fun0001 }
 279:
            var2 = var9.id;
 284:
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 29; continue _fun0007 }
 20:
                    var4 = _closure2_slot1;
                    var2 = var4.id;
 29:
                    if(!(var3 != var2)) { _fun0007_ip = 92; continue _fun0007 }
 33:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'APP_DM_OPEN';
                    var2['type'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var2['botUserId'] = var5;
                    var2 = var3.bind(var4)(var2);
 92:
                    return var1;
                }
            };
            var2 = var12.bind(var13)(var2, var8);
            var13 = _closure1_slot4;
            var12 = {};
            var12['channel'] = var3;
            var2 = 'channel';
            var12['type'] = var2;
            var8 = {};
            var2 = _closure1_slot10;
            var8['commandTypes'] = var2;
            var2 = {};
            var2['applicationId'] = var4;
            var15 = var5 == var9;
            var14 = undefined;
            if(var15) { _fun0001_ip = 352; continue _fun0001 }
 347:
            var14 = var9.id;
 352:
            var14 = var5 != var14;
            var2['allowFetch'] = var14;
            var14 = true;
            var2['allowApplicationState'] = var14;
            var13 = var13.bind(var10)(var12, var8, var2);
            var12 = var13.commands;
            var8 = var12.filter;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ApplicationCommandType;
                    var1 = var1.PRIMARY_ENTRY_POINT;
                    var1 = var3 === var1;
                    if(!var1) { _fun0008_ip = 68; continue _fun0008 }
 52:
                    var3 = var2.applicationId;
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
 68:
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var2);
            var14 = 0;
            var8 = var2[var14];
            var15 = var13.commands;
            var12 = var15.filter;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.id;
                    var1 = '0';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0009_ip = 44; continue _fun0009 }
 21:
                    var4 = var2.id;
                    var3 = var4.startsWith;
                    var2 = '-';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 44:
                    return var1;
                }
            };
            var2 = var12.bind(var15)(var2);
            var12 = var13.loading;
            var16 = var13.descriptors;
            var15 = var16.find;
            var13 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.application;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 24; continue _fun0010 }
 19:
                    var2 = var1.id;
 24:
                    var1 = _closure2_slot2;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var13 = var15.bind(var16)(var13);
            var15 = var5 == var13;
            var17 = undefined;
            if(var15) { _fun0001_ip = 464; continue _fun0001 }
 459:
            var17 = var13.application;
 464:
            _closure2_slot3 = var17;
            var16 = _closure1_slot3;
            var15 = var16.useMemo;
            var13 = new Array(1);
            var13[0] = var17;
            var11 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0011_ip = 40; continue _fun0011 }
 18:
                    var4 = _closure1_slot7;
                    var3 = var4.createFromServer;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var11 = var15.bind(var16)(var11, var13);
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 12;
            var1 = var15[var1];
            var15 = var13.bind(var10)(var1);
            var13 = var15.useGetOrFetchApplication;
            var16 = var5 == var11;
            var1 = undefined;
            if(!var16) { _fun0001_ip = 534; continue _fun0001 }
 531:
            var1 = var4;
 534:
            var1 = var13.bind(var15)(var1);
            if(!(var5 != var11)) { _fun0001_ip = 546; continue _fun0001 }
 543:
            var1 = var11;
 546:
            var13 = var5 != var1;
            var11 = undefined;
            if(!var13) { _fun0001_ip = 558; continue _fun0001 }
 555:
            var11 = var1;
 558:
            var1 = {};
            var1['application'] = var11;
            var11 = var5 == var11;
            if(var11) { _fun0001_ip = 586; continue _fun0001 }
 571:
            if(!var12) { _fun0001_ip = 583; continue _fun0001 }
 574:
            var13 = var2.length;
            var12 = var14 === var13;
 583:
            var11 = var12;
 586:
            var1['isInitialLoading'] = var11;
            var11 = var5 == var9;
            var10 = undefined;
            if(var11) { _fun0001_ip = 606; continue _fun0001 }
 600:
            var10 = var9.bot;
 606:
            var9 = var5 != var10;
            if(!var9) { _fun0001_ip = 616; continue _fun0001 }
 613:
            var9 = var10;
 616:
            var1['isAppDM'] = var9;
            var1['primaryEntryPointCommand'] = var8;
            var1['isProfileFetching'] = var7;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0001_ip = 643; continue _fun0001 }
 640:
            var5 = var6;
 643:
            var1['wasProfileFetching'] = var5;
            var1['applicationId'] = var4;
            var3 = var3.id;
            var1['channelId'] = var3;
            var1['commands'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();