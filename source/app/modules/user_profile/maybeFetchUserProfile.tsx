// app/modules/user_profile/maybeFetchUserProfile.tsx
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
 0:
            var11 = arg1;
            var20 = arg2;
            var1 = arguments[2];
            var _closure2_slot0 = var11;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var1 = {};
 23:
            var16 = var1.type;
            var15 = var1.withMutualGuilds;
            if(!(var15 === var5)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var15 = false;
 40:
            var13 = var1.withMutualFriendsCount;
            if(!(var13 === var5)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var13 = false;
 52:
            var14 = var1.withMutualFriends;
            if(!(var14 === var5)) { _fun0001_ip = 64; continue _fun0001 }
 62:
            var14 = false;
 64:
            var4 = var1.dispatchWait;
            if(!(var4 === var5)) { _fun0001_ip = 76; continue _fun0001 }
 74:
            var4 = false;
 76:
            var6 = var1.waitForRefetch;
            if(!(var6 === var5)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var6 = true;
 90:
            var18 = var1.guildId;
            var17 = var1.channelId;
            var9 = var1.joinRequestId;
            var7 = var1.abortSignal;
            var _closure2_slot1 = var5;
            var1 = '';
            if(!(var1 !== var11)) { _fun0001_ip = 828; continue _fun0001 }
 127:
            var8 = _closure1_slot5;
            var1 = var8.isFetchingProfile;
            var8 = var1.bind(var8)(var11, var18);
            var1 = global;
            if(var8) { _fun0001_ip = 810; continue _fun0001 }
 154:
            var10 = _closure1_slot5;
            var8 = var10.getUserProfile;
            var8 = var8.bind(var10)(var11);
            var12 = var1.Date;
            var10 = var12.now;
            var19 = var10.bind(var12)();
            var12 = null;
            var10 = var12 == var8;
            var21 = undefined;
            if(var10) { _fun0001_ip = 201; continue _fun0001 }
 195:
            var21 = var8.fetchEndedAt;
 201:
            var22 = var12 != var21;
            var10 = 0;
            if(!var22) { _fun0001_ip = 213; continue _fun0001 }
 210:
            var10 = var21;
 213:
            var19 = var19 - var10;
            var10 = 60000;
            var19 = var19 >= var10;
            var10 = var12 == var8;
            var21 = undefined;
            if(var10) { _fun0001_ip = 256; continue _fun0001 }
 236:
            var10 = var8.fetchError;
            var22 = var12 == var10;
            var21 = undefined;
            if(var22) { _fun0001_ip = 256; continue _fun0001 }
 251:
            var21 = var10.status;
 256:
            var10 = 404;
            if(!(var10 !== var21)) { _fun0001_ip = 305; continue _fun0001 }
 266:
            var10 = var12 == var8;
            var21 = undefined;
            if(var10) { _fun0001_ip = 295; continue _fun0001 }
 275:
            var10 = var8.fetchError;
            var22 = var12 == var10;
            var21 = undefined;
            if(var22) { _fun0001_ip = 295; continue _fun0001 }
 290:
            var21 = var10.status;
 295:
            var10 = 429;
            if(!(var10 === var21)) { _fun0001_ip = 326; continue _fun0001 }
 305:
            if(var19) { _fun0001_ip = 326; continue _fun0001 }
 308:
            var21 = var1.Promise;
            var10 = var21.resolve;
            var10 = var10.bind(var21)();
            return var10;
 326:
            var24 = _closure1_slot5;
            var10 = var24.getGuildMemberProfile;
            var10 = var10.bind(var24)(var11, var18);
            var21 = var24.getMutualGuilds;
            var23 = var21.bind(var24)(var11);
            var21 = var24.getMutualFriends;
            var22 = var21.bind(var24)(var11);
            var21 = var24.getMutualFriendsCount;
            var21 = var21.bind(var24)(var11);
            if(!(var12 != var18)) { _fun0001_ip = 385; continue _fun0001 }
 379:
            var10 = var12 == var10;
            _fun0001_ip = 389; continue _fun0001;
 385:
            var10 = var12 == var8;
 389:
            var8 = !var10;
            if(var10) { _fun0001_ip = 446; continue _fun0001 }
 395:
            if(var19) { _fun0001_ip = 411; continue _fun0001 }
 398:
            var23 = var12 == var23;
            if(!var23) { _fun0001_ip = 408; continue _fun0001 }
 405:
            var23 = var15;
 408:
            var19 = var23;
 411:
            if(var19) { _fun0001_ip = 427; continue _fun0001 }
 414:
            var22 = var12 == var22;
            if(!var22) { _fun0001_ip = 424; continue _fun0001 }
 421:
            var22 = var14;
 424:
            var19 = var22;
 427:
            if(var19) { _fun0001_ip = 443; continue _fun0001 }
 430:
            var21 = var12 == var21;
            if(!var21) { _fun0001_ip = 440; continue _fun0001 }
 437:
            var21 = var13;
 440:
            var19 = var21;
 443:
            var8 = var19;
 446:
            if(var10) { _fun0001_ip = 470; continue _fun0001 }
 449:
            if(var8) { _fun0001_ip = 470; continue _fun0001 }
 452:
            var19 = var1.Promise;
            var10 = var19.resolve;
            var10 = var10.bind(var19)();
            return var10;
 470:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 3;
            var10 = var21[var10];
            var19 = var19.bind(var5)(var10);
            var10 = var19.maybeFetchAllProfileEffects;
            var10 = var10.bind(var19)();
            if(!(var12 != var20)) { _fun0001_ip = 535; continue _fun0001 }
 504:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 4;
            var10 = var21[var10];
            var19 = var19.bind(var5)(var10);
            var10 = var19.maybeFetchColors;
            var10 = var10.bind(var19)(var20);
 535:
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
            if(var9) { _fun0001_ip = 665; continue _fun0001 }
 579:
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
            if(var12) { _fun0001_ip = 665; continue _fun0001 }
 660:
            var7 = var9.id;
 665:
            var10['connectionsRoleId'] = var7;
            _closure2_slot1 = var10;
            if(var4) { _fun0001_ip = 756; continue _fun0001 }
 677:
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
            if(!var8) { _fun0001_ip = 754; continue _fun0001 }
 732:
            var4 = var7;
            if(var6) { _fun0001_ip = 754; continue _fun0001 }
 738:
            var7 = var1.Promise;
            var6 = var7.resolve;
            var4 = var6.bind(var7)();
 754:
            return var4;
 756:
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
            var3 = var1.Promise;
            var2 = var3.resolve;
            var2 = var2.bind(var3)();
            return var2;
 810:
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
 828:
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