// app/modules/user_profile/maybeFetchUserProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/maybeFetchUserProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeFetchUserProfile(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var20 = arg2;
            var1 = arguments[2];
            var _closure2_slot0 = var11;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var16 = var1.type;
            var15 = var1.withMutualGuilds;
            if(!(var15 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = false;
case 4:
            var13 = var1.withMutualFriendsCount;
            if(!(var13 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = false;
case 6:
            var14 = var1.withMutualFriends;
            if(!(var14 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = false;
case 8:
            var4 = var1.dispatchWait;
            if(!(var4 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = false;
case 10:
            var6 = var1.waitForRefetch;
            if(!(var6 === var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = true;
case 12:
            var18 = var1.guildId;
            var17 = var1.channelId;
            var9 = var1.joinRequestId;
            var7 = var1.abortSignal;
            var _closure2_slot1 = var5;
            var1 = '';
            if(!(var1 !== var11)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot5;
            var1 = var8.isFetchingProfile;
            var1 = var1.bind(var8)(var11, var18);
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = _closure1_slot5;
            var1 = var8.getUserProfile;
            var19 = var1.bind(var8)(var11);
            var1 = var8.getGuildMemberProfile;
            var21 = var1.bind(var8)(var11, var18);
            var12 = null;
            var8 = var19;
            if(!(var12 != var18)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var21;
case 18:
            var1 = global;
            var22 = var1.Date;
            var10 = var22.now;
            var22 = var10.bind(var22)();
            var10 = var12 == var8;
            var23 = undefined;
            if(var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var23 = var8.fetchEndedAt;
case 20:
            var24 = var12 != var23;
            var10 = 0;
            if(!var24) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var23;
case 22:
            var22 = var22 - var10;
            var10 = 60000;
            var22 = var22 >= var10;
            var10 = var12 == var8;
            var23 = undefined;
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var10 = var8.fetchError;
            var24 = var12 == var10;
            var23 = undefined;
            if(var24) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var23 = var10.status;
case 24:
            var10 = 404;
            if(!(var10 !== var23)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var23 = var12 == var8;
            var10 = undefined;
            if(var23) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = var8.fetchError;
            var23 = var12 == var8;
            var10 = undefined;
            if(var23) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var10 = var8.status;
case 29:
            var8 = 429;
            if(!(var8 === var10)) { _fun0001_ip = 32; continue _fun0001 }
case 27:
            if(var22) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = var1.Promise;
            var8 = var10.resolve;
            var8 = var8.bind(var10)();
            return var8;
case 32:
            var10 = _closure1_slot5;
            var8 = var10.getMutualGuilds;
            var25 = var8.bind(var10)(var11);
            var8 = var10.getMutualFriends;
            var24 = var8.bind(var10)(var11);
            var8 = var10.getMutualFriendsCount;
            var23 = var8.bind(var10)(var11);
            if(!(var12 != var18)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var10 = var12 == var21;
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var10 = var12 == var19;
case 36:
            var8 = !var10;
            if(var10) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            if(var22) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var25 = var12 == var25;
            if(!var25) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var25 = var15;
case 41:
            var22 = var25;
case 39:
            if(var22) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var24 = var12 == var24;
            if(!var24) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var24 = var14;
case 45:
            var22 = var24;
case 43:
            if(var22) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var23 = var12 == var23;
            if(!var23) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var23 = var13;
case 49:
            var22 = var23;
case 47:
            var8 = var22;
case 37:
            if(var10) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            if(var8) { _fun0001_ip = 51; continue _fun0001 }
case 53:
            var22 = var1.Promise;
            var10 = var22.resolve;
            var10 = var10.bind(var22)();
            return var10;
case 51:
            if(!(var12 == var18)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var22 = var12 == var19;
            var10 = undefined;
            if(var22) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var10 = var19.profileEffect;
case 56:
            _fun0001_ip = 58; continue _fun0001;
case 54:
            var23 = var12 == var21;
            var22 = undefined;
            if(var23) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var22 = var21.profileEffect;
case 59:
            var10 = var22;
case 58:
            if(!(var12 != var10)) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 3;
            var22 = var24[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeFetchCollectiblesProduct;
            var10 = var10.skuId;
            var10 = var22.bind(var23)(var10);
case 61:
            if(!(var12 == var18)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var22 = var12 == var19;
            var10 = undefined;
            if(var22) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var10 = var19.profileFrame;
case 65:
            _fun0001_ip = 67; continue _fun0001;
case 63:
            var22 = var12 == var21;
            var19 = undefined;
            if(var22) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var19 = var21.profileFrame;
case 68:
            var10 = var19;
case 67:
            if(!(var12 != var10)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 3;
            var19 = var22[var19];
            var21 = var21.bind(var5)(var19);
            var19 = var21.maybeFetchCollectiblesProduct;
            var10 = var10.skuId;
            var10 = var19.bind(var21)(var10);
case 70:
            if(!(var12 != var20)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 4;
            var10 = var21[var10];
            var19 = var19.bind(var5)(var10);
            var10 = var19.maybeFetchColors;
            var10 = var10.bind(var19)(var20);
case 72:
            var10 = {};
            var10['type'] = var16;
            var10['withMutualGuilds'] = var15;
            var10['withMutualFriends'] = var14;
            var10['withMutualFriendsCount'] = var13;
            var10['guildId'] = var18;
            var10['joinRequestId'] = var9;
            var10['abortSignal'] = var7;
            var9 = var12 == var18;
            var7 = undefined;
            if(var9) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 5;
            var9 = var14[var9];
            var14 = var13.bind(var5)(var9);
            var13 = var14.getVisibleConnectionsRole;
            var9 = {};
            var16 = _closure1_slot4;
            var15 = var16.getMember;
            var15 = var15.bind(var16)(var18, var11);
            var9['guildMember'] = var15;
            var16 = _closure1_slot3;
            var15 = var16.getChannel;
            var15 = var15.bind(var16)(var17);
            var9['channel'] = var15;
            var9 = var13.bind(var14)(var9);
            var12 = var12 == var9;
            var7 = undefined;
            if(var12) { _fun0001_ip = 74; continue _fun0001 }
case 76:
            var7 = var9.id;
case 74:
            var10['connectionsRoleId'] = var7;
            _closure2_slot1 = var10;
            if(var4) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 7;
            var4 = var13[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.fetchProfile;
            var12 = _closure1_slot1;
            var4 = 8;
            var4 = var13[var4];
            var4 = var12.bind(var5)(var4);
            var7 = var7.bind(var9)(var11, var10, var4);
            var4 = var7;
            if(!var8) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var4 = var7;
            if(var6) { _fun0001_ip = 79; continue _fun0001 }
case 81:
            var7 = var1.Promise;
            var6 = var7.resolve;
            var4 = var6.bind(var7)();
case 79:
            return var4;
case 77:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var7 = undefined;
                var5 = var3.bind(var7)(var2);
                var4 = var5.fetchProfile;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var6 = _closure1_slot1;
                var1 = 8;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
case 16:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
case 14:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();