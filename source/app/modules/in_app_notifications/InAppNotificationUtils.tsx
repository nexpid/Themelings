// app/modules/in_app_notifications/InAppNotificationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REACTION_MILESTONE_COUNTS;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/InAppNotificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getNotificationTitle(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg3;
            var2 = arg4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 4;
            var3 = var3[var10];
            var9 = undefined;
            var11 = var6.bind(var9)(var3);
            var8 = var11.computeChannelName;
            var18 = _closure1_slot3;
            var17 = _closure1_slot2;
            var16 = true;
            var20 = var11;
            var19 = var5;
            var7 = var20[var8](var19, var18, var17, var16, var15);
            var3 = null;
            var6 = var3 != var4;
            var12 = null;
            if(!var6) { _fun0001_ip = 109; continue _fun0001 }
 71:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var10];
            var10 = var8.bind(var9)(var6);
            var9 = var10.computeChannelName;
            var8 = _closure1_slot3;
            var6 = _closure1_slot2;
            var12 = var9.bind(var10)(var4, var8, var6);
 109:
            var6 = arg2;
            var6 = var6.nick;
            var8 = var5.type;
            var5 = _closure1_slot5;
            var5 = var5.GROUP_DM;
            if(!(var5 !== var8)) { _fun0001_ip = 427; continue _fun0001 }
 140:
            var5 = _closure1_slot5;
            var5 = var5.GUILD_TEXT;
            if(!(var5 !== var8)) { _fun0001_ip = 370; continue _fun0001 }
 157:
            var5 = _closure1_slot5;
            var5 = var5.GUILD_ANNOUNCEMENT;
            if(!(var5 !== var8)) { _fun0001_ip = 370; continue _fun0001 }
 174:
            var5 = _closure1_slot5;
            var5 = var5.ANNOUNCEMENT_THREAD;
            if(!(var5 !== var8)) { _fun0001_ip = 222; continue _fun0001 }
 188:
            var5 = _closure1_slot5;
            var5 = var5.PUBLIC_THREAD;
            if(!(var5 !== var8)) { _fun0001_ip = 222; continue _fun0001 }
 202:
            var1 = _closure1_slot5;
            var5 = var1.PRIVATE_THREAD;
            var1 = var6;
            if(!(var5 === var8)) { _fun0001_ip = 464; continue _fun0001 }
 222:
            if(!(var3 == var4)) { _fun0001_ip = 319; continue _fun0001 }
 226:
            if(!(var3 == var2)) { _fun0001_ip = 269; continue _fun0001 }
 230:
            var4 = global;
            var4 = var4.HermesInternal;
            var9 = var4.concat;
            var20 = '';
            var18 = ' (';
            var16 = ')';
            var19 = var6;
            var17 = var7;
            var4 = var20[var9](var19, var18, var17, var16, var15);
            _fun0001_ip = 317; continue _fun0001;
 269:
            var15 = var2.name;
            var5 = global;
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var4 = var20[var11](var19, var18, var17, var16, var15, var14, var13);
 317:
            _fun0001_ip = 365; continue _fun0001;
 319:
            var5 = global;
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var15 = var12;
            var4 = var20[var11](var19, var18, var17, var16, var15, var14, var13);
 365:
            var1 = var4;
            _fun0001_ip = 464; continue _fun0001;
 370:
            var1 = var6;
            if(!(var3 != var2)) { _fun0001_ip = 464; continue _fun0001 }
 377:
            var15 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var1 = var20[var8](var19, var18, var17, var16, var15, var14, var13);
            _fun0001_ip = 464; continue _fun0001;
 427:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var20 = '';
            var18 = ' (';
            var16 = ')';
            var19 = var6;
            var17 = var7;
            var1 = var20[var5](var19, var18, var17, var16, var15);
 464:
            return var1;
        }
    };
    var3['getNotificationTitle'] = var4;
    var2 = function isReactionMilestoneNotification(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 88; continue _fun0002 }
 9:
            var2 = _closure1_slot5;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var2)) { _fun0002_ip = 88; continue _fun0002 }
 26:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.sumBy;
            var3 = arg1;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.count_details;
                    var4 = null;
                    var1 = var4 == var5;
                    var6 = undefined;
                    if(var1) { _fun0003_ip = 26; continue _fun0003 }
 20:
                    var6 = var5.burst;
 26:
                    var7 = var4 != var6;
                    var1 = 0;
                    if(!var7) { _fun0003_ip = 38; continue _fun0003 }
 35:
                    var1 = var6;
 38:
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 53; continue _fun0003 }
 47:
                    var3 = var5.normal;
 53:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0003_ip = 65; continue _fun0003 }
 62:
                    var2 = var3;
 65:
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = _closure1_slot4;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
 88:
            var1 = false;
            return var1;
        }
    };
    var3['isReactionMilestoneNotification'] = var2;
    return var1;
})();