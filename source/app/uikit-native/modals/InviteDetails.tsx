// app/uikit-native/modals/InviteDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function InviteDestinationIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.invite;
            var1 = _closure1_slot13;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var14.avatarContainer;
            var5 = new Array(1);
            var5[0] = var6;
            var1['style'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.isGroupDMInvite;
            var5 = var5.bind(var6)(var13);
            if(!var5) { _fun0001_ip = 96; continue _fun0001 }
 84:
            var5 = var13.inviter;
            var6 = null;
            if(!(var6 == var5)) { _fun0001_ip = 199; continue _fun0001 }
 96:
            var7 = var13.guild;
            var5 = null;
            var7 = var5 != var7;
            if(!var7) { _fun0001_ip = 194; continue _fun0001 }
 110:
            var9 = _closure1_slot10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 14;
            var7 = var15[var10];
            var8 = var12.bind(var4)(var7);
            var7 = {};
            var16 = var14.avatar;
            var7['style'] = var16;
            var16 = var13.guild;
            var7['guild'] = var16;
            var10 = var15[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.LARGE;
            var7['size'] = var10;
            var10 = 2;
            var7['textScale'] = var10;
            var5 = var9.bind(var4)(var8, var7);
 194:
            _fun0001_ip = 327; continue _fun0001;
 199:
            var7 = var13.inviter;
            var7 = var6 != var7;
            var6 = null;
            if(!var7) { _fun0001_ip = 324; continue _fun0001 }
 214:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 13;
            var7 = var12[var10];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var14 = var14.avatar;
            var7['avatarStyle'] = var14;
            var15 = _closure1_slot6;
            var18 = var13.inviter;
            var14 = var15.prototype;
            var14 = Object.create(var14, {constructor: {value: var15}});
            var19 = var14;
            var13 = new var19[var15](var18, var17);
            var13 = var13 instanceof Object ? var13 : var14;
            var7['user'] = var13;
            var7['guildId'] = var4;
            var11 = _closure1_slot0;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.XLARGE;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 324:
            var5 = var6;
 327:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function InviteHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.invite;
            var1 = _closure1_slot13;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isGroupDMInvite;
            var1 = var1.bind(var2)(var13);
            if(var1) { _fun0002_ip = 79; continue _fun0002 }
 56:
            var1 = var13.guild;
            var2 = null;
            var2 = var2 == var1;
            var10 = undefined;
            if(var2) { _fun0002_ip = 77; continue _fun0002 }
 72:
            var10 = var1.name;
 77:
            _fun0002_ip = 144; continue _fun0002;
 79:
            var4 = var13.channel;
            var2 = null;
            var6 = var2 == var4;
            var1 = undefined;
            if(var6) { _fun0002_ip = 100; continue _fun0002 }
 95:
            var1 = var4.name;
 100:
            if(!(var2 == var1)) { _fun0002_ip = 141; continue _fun0002 }
 104:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.getFormattedName;
            var2 = var13.inviter;
            var1 = var4.bind(var6)(var2);
 141:
            var10 = var1;
 144:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isFriendInvite;
            var1 = var1.bind(var2)(var13);
            if(!var1) { _fun0002_ip = 272; continue _fun0002 }
 175:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var3 = var9[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var9[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1.4aF92d;
            var1 = {};
            var8 = _closure1_slot1;
            var6 = 15;
            var6 = var9[var6];
            var9 = var8.bind(var5)(var6);
            var8 = var9.getFormattedName;
            var6 = var13.inviter;
            var6 = var8.bind(var9)(var6);
            var1['username'] = var6;
            var10 = var3.bind(var4)(var2, var1);
 272:
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0002_ip = 445; continue _fun0002 }
 284:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var11.guildNameContainer;
            var2['style'] = var6;
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 17;
            var6 = var12[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var13 = var13.guild;
            var6['guild'] = var13;
            var13 = var11.featureIcon;
            var6['style'] = var13;
            var13 = true;
            var6['disableColor'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var7 = 18;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var11 = var11.guildNameText;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 445:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function InviteJoinContext(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var12 = var2.invite;
            var _closure2_slot0 = var12;
            var3 = var2.isRegistration;
            var8 = var2.isGuildMember;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot13;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var5 = undefined;
                    var6 = var2.bind(var5)(var1);
                    var4 = var6.isStreamInvite;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var6)(var1);
                    if(!var1) { _fun0004_ip = 62; continue _fun0004 }
 46:
                    var1 = _closure2_slot0;
                    var4 = var1.target_user;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0004_ip = 149; continue _fun0004 }
 62:
                    var6 = _closure1_slot16;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = var6.bind(var5)(var4, var1);
                    var6 = null;
                    var1 = null;
                    if(!var4) { _fun0004_ip = 147; continue _fun0004 }
 87:
                    var4 = _closure2_slot0;
                    var4 = var4.inviter;
                    var4 = var6 != var4;
                    var1 = null;
                    if(!var4) { _fun0004_ip = 147; continue _fun0004 }
 106:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 19;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.getUserAvatarSource;
                    var4 = _closure2_slot0;
                    var4 = var4.inviter;
                    var1 = var6.bind(var7)(var4);
 147:
                    _fun0004_ip = 190; continue _fun0004;
 149:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getUserAvatarSource;
                    var2 = _closure2_slot0;
                    var2 = var2.target_user;
                    var1 = var3.bind(var4)(var2);
 190:
                    return var1;
                }
            };
            var15 = var5.bind(var7)(var1, var2);
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var7 = var2[var1];
            var7 = var5.bind(var4)(var7);
            var11 = var7.intl;
            var9 = var11.string;
            var7 = var2[var1];
            var7 = var5.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.3rE1Pz;
            var7 = var9.bind(var11)(var7);
            var13 = 12;
            var2 = var2[var13];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isFriendInvite;
            var5 = var2.bind(var5)(var12);
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            if(var5) { _fun0003_ip = 744; continue _fun0003 }
 170:
            var5 = var11[var13];
            var9 = var2.bind(var4)(var5);
            var5 = var9.isGroupDMInvite;
            var5 = var5.bind(var9)(var12);
            if(var5) { _fun0003_ip = 570; continue _fun0003 }
 196:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var9 = var9.bind(var4)(var5);
            var5 = var9.isStreamInvite;
            var5 = var5.bind(var9)(var12);
            if(!var5) { _fun0003_ip = 242; continue _fun0003 }
 227:
            var9 = var12.target_user;
            var5 = null;
            if(!(var5 == var9)) { _fun0003_ip = 471; continue _fun0003 }
 242:
            var5 = _closure1_slot15;
            var5 = var5.bind(var4)(var12, var8);
            if(var5) { _fun0003_ip = 391; continue _fun0003 }
 258:
            var5 = _closure1_slot16;
            var5 = var5.bind(var4)(var12, var8);
            if(!var5) { _fun0003_ip = 283; continue _fun0003 }
 271:
            var9 = var12.inviter;
            var8 = null;
            var5 = var8 != var9;
 283:
            var9 = var7;
            if(!var5) { _fun0003_ip = 830; continue _fun0003 }
 292:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var14 = var5.intl;
            var8 = var14.format;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.spU2mJ;
            var5 = {};
            var17 = _closure1_slot1;
            var16 = 15;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.getFormattedName;
            var16 = var12.inviter;
            var16 = var17.bind(var18)(var16);
            var5['username'] = var16;
            var9 = var8.bind(var14)(var7, var5);
            _fun0003_ip = 830; continue _fun0003;
 391:
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var1];
            var7 = var14.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var1];
            var5 = var14.bind(var4)(var5);
            var5 = var5.t;
            if(var3) { _fun0003_ip = 450; continue _fun0003 }
 435:
            var3 = var5.FDsl+P;
            var3 = var7.bind(var8)(var3);
            _fun0003_ip = 463; continue _fun0003;
 450:
            var5 = var5.jpwYbm;
            var3 = var7.bind(var8)(var5);
 463:
            var9 = var3;
            _fun0003_ip = 830; continue _fun0003;
 471:
            var5 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = var17[var1];
            var3 = var5.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.formatToPlainString;
            var3 = var17[var1];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.x2L32d;
            var3 = {};
            var16 = _closure1_slot1;
            var14 = 15;
            var14 = var17[var14];
            var17 = var16.bind(var4)(var14);
            var16 = var17.getFormattedName;
            var14 = var12.target_user;
            var14 = var16.bind(var17)(var14);
            var3['username'] = var14;
            var9 = var7.bind(var8)(var5, var3);
            _fun0003_ip = 830; continue _fun0003;
 570:
            var3 = var12.channel;
            var5 = null;
            if(!(var5 != var3)) { _fun0003_ip = 591; continue _fun0003 }
 581:
            var3 = var12.inviter;
            if(!(var5 == var3)) { _fun0003_ip = 645; continue _fun0003 }
 591:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var1];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var3[var1];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.OsdY8P;
            var3 = var5.bind(var7)(var3);
            _fun0003_ip = 739; continue _fun0003;
 645:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var14 = var5.intl;
            var8 = var14.format;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.Lu4h19;
            var5 = {};
            var17 = _closure1_slot1;
            var16 = 15;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.getFormattedName;
            var16 = var12.inviter;
            var16 = var17.bind(var18)(var16);
            var5['username'] = var16;
            var3 = var8.bind(var14)(var7, var5);
 739:
            var9 = var3;
            _fun0003_ip = 830; continue _fun0003;
 744:
            var3 = var11[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.Quj7HR;
            var1 = {};
            var8 = _closure1_slot1;
            var7 = 15;
            var7 = var11[var7];
            var11 = var8.bind(var4)(var7);
            var8 = var11.getFormattedName;
            var7 = var12.inviter;
            var7 = var8.bind(var11)(var7);
            var1['username'] = var7;
            var9 = var3.bind(var5)(var2, var1);
 830:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.inviteJoinContainer;
            var1['style'] = var5;
            var8 = null;
            var5 = var8 == var15;
            var7 = null;
            if(var5) { _fun0003_ip = 970; continue _fun0003 }
 861:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var11 = var11.bind(var4)(var5);
            var5 = var11.isFriendInvite;
            var5 = var5.bind(var11)(var12);
            var7 = null;
            if(var5) { _fun0003_ip = 970; continue _fun0003 }
 894:
            var11 = _closure1_slot10;
            var8 = _closure1_slot5;
            var5 = {};
            var12 = var10.inviterIconWrapper;
            var5['style'] = var12;
            var14 = _closure1_slot10;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 20;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['source'] = var15;
            var15 = var10.inviterIcon;
            var12['style'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5['children'] = var12;
            var7 = var11.bind(var4)(var8, var5);
 970:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 18;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var10 = var10.inviteJoinText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function InviteMemberCounts(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.invite;
            var4 = var1.isGuildMember;
            var1 = _closure1_slot13;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var1 = _closure1_slot14;
            var19 = var1.bind(var5)(var2);
            var7 = null;
            var3 = var7 == var19;
            var1 = null;
            if(var3) { _fun0005_ip = 532; continue _fun0005 }
 51:
            var3 = _closure1_slot16;
            var3 = var3.bind(var5)(var2, var4);
            var1 = null;
            if(var3) { _fun0005_ip = 532; continue _fun0005 }
 69:
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0005_ip = 97; continue _fun0005 }
 78:
            var2 = var2.guild;
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0005_ip = 97; continue _fun0005 }
 92:
            var3 = var2.id;
 97:
            var2 = _closure1_slot9;
            var1 = null;
            if(!(var3 !== var2)) { _fun0005_ip = 532; continue _fun0005 }
 110:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.memberInfo;
            var2['style'] = var6;
            var6 = var19.onlineCount;
            var6 = var7 != var6;
            var8 = null;
            if(!var6) { _fun0005_ip = 320; continue _fun0005 }
 148:
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var6 = {};
            var14 = _closure1_slot10;
            var13 = _closure1_slot5;
            var11 = {};
            var16 = var15.dotOnline;
            var11['style'] = var16;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var16 = _closure1_slot10;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 18;
            var13 = var22[var13];
            var13 = var18.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var17 = 16;
            var20 = var22[var17];
            var20 = var18.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.format;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.t;
            var18 = var17.LC+S+v;
            var17 = {};
            var22 = var19.onlineCount;
            var17['membersOnline'] = var22;
            var17 = var20.bind(var21)(var18, var17);
            var13['children'] = var17;
            var13 = var16.bind(var5)(var14, var13);
            var11[1] = var13;
            var6['children'] = var11;
            var8 = var10.bind(var5)(var9, var6);
 320:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var19.memberCount;
            var8 = var7 != var8;
            var7 = null;
            if(!var8) { _fun0005_ip = 518; continue _fun0005 }
 346:
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var8 = {};
            var14 = _closure1_slot10;
            var13 = _closure1_slot5;
            var11 = {};
            var15 = var15.dotOffline;
            var11['style'] = var15;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot10;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 18;
            var12 = var20[var12];
            var12 = var16.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var15 = 16;
            var17 = var20[var15];
            var17 = var16.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.t;
            var16 = var15.zRl6XV;
            var15 = {};
            var19 = var19.memberCount;
            var15['count'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 518:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 532:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function InviteUsername(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var10 = var1.currentUser;
            var13 = var1.style;
            var1 = _closure1_slot13;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 18;
            var1 = var15[var11];
            var1 = var14.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var5 = 'text-sm/semibold';
            var1['variant'] = var5;
            var5 = new Array(2);
            var5[0] = var13;
            var6 = var12.inviteUsername;
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var6 = _closure1_slot1;
            var9 = 13;
            var5 = var15[var9];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var16 = var12.inviteAvatar;
            var5['style'] = var16;
            var5['user'] = var10;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.SIZE_16;
            var5['size'] = var9;
            var5['guildId'] = var4;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var10.username;
            var5[1] = var6;
            var6 = var10.hasUniqueUsername;
            var6 = var6.bind(var10)();
            var6 = !var6;
            if(!var6) { _fun0006_ip = 282; continue _fun0006 }
 192:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var11 = 'text-sm/normal';
            var7['variant'] = var11;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.inviteDiscriminatorText;
            var11[1] = var12;
            var7['style'] = var11;
            var11 = var10.discriminator;
            var10 = ['#'];
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 282:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function InviteButtonText(arg1) {
        var1 = arg1;
        var8 = var1.style;
        var _closure2_slot0 = var8;
        var1 = var1.currentUser;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot13;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot10;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 18;
        var1 = var10[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
        var5 = new Array(2);
        var5[0] = var8;
        var7 = var7.inviteAcceptText;
        var5[1] = var7;
        var1['style'] = var5;
        var5 = 16;
        var7 = var10[var5];
        var7 = var6.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.9sWQNT;
        var5 = {};
        var9 = function usernameHook(arg1, arg2) {
            var5 = _closure1_slot10;
            var4 = _closure1_slot22;
            var3 = {};
            var2 = _closure2_slot0;
            var3['style'] = var2;
            var1 = _closure2_slot1;
            var3['currentUser'] = var1;
            var2 = undefined;
            var1 = arg2;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var5['usernameHook'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var9 = 0;
    var4 = var6[var9];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var7 = var6[var8];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteStates;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.INVITE_ROUTING_HUB_GUILD_ID;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var17 = var4.Fonts;
    var16 = 8;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var7 = var10.createStyles;
    var4 = {};
    var11 = {'height': 64, 'width': 64, 'margin': 0};
    var12 = 10;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var4['avatar'] = var11;
    var11 = {'borderRadius': null, 'height': 64, 'width': 64, 'marginBottom': 24, 'marginTop': 24};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.none;
    var11['borderRadius'] = var14;
    var4['avatarContainer'] = var11;
    var15 = 'center';
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['inviteJoinContainer'] = var11;
    var11 = {};
    var11['textAlign'] = var15;
    var4['inviteJoinText'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row'};
    var4['inviteUsername'] = var11;
    var14 = 11;
    var11 = {'justifyContent': 'center', 'marginHorizontal': 11};
    var4['inviteAcceptText'] = var11;
    var11 = {};
    var17 = var17.PRIMARY_NORMAL;
    var11['fontFamily'] = var17;
    var4['inviteDiscriminatorText'] = var11;
    var11 = {'alignSelf': 'center', 'paddingTop': 2, 'marginRight': 4};
    var4['inviteAvatar'] = var11;
    var11 = {};
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.none;
    var11['borderRadius'] = var17;
    var11['marginRight'] = var16;
    var4['inviterIconWrapper'] = var11;
    var11 = {'width': 20, 'height': 20};
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var11['borderRadius'] = var16;
    var4['inviterIcon'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['guildNameContainer'] = var11;
    var11 = {};
    var11['textAlign'] = var15;
    var4['guildNameText'] = var11;
    var11 = {'flexGrow': 0, 'marginRight': 8};
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.DARK_1_LIGHT_04;
    var11['opacity'] = var14;
    var4['featureIcon'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['memberInfo'] = var11;
    var11 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_360;
    var11['backgroundColor'] = var14;
    var4['dotOnline'] = var11;
    var11 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4, 'marginLeft': 16};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.PRIMARY_400;
    var11['backgroundColor'] = var14;
    var4['dotOffline'] = var11;
    var11 = {'flex': 1, 'marginTop': 8, 'width': '100%'};
    var4['button'] = var11;
    var11 = {'width': '100%', 'backgroundColor': null, 'padding': 16, 'borderRadius': null, 'marginTop': 16, 'marginBottom': 8};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_FLOATING;
    var11['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11['borderRadius'] = var12;
    var4['embedDetailsCard'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot13 = var4;
    var4 = function getMemberCountFromInvite(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var2 = {};
            var6 = var3.approximate_presence_count;
            var1 = null;
            var7 = var1 != var6;
            var4 = 0;
            var5 = 0;
            if(!var7) { _fun0007_ip = 27; continue _fun0007 }
 24:
            var5 = var6;
 27:
            var2['onlineCount'] = var5;
            var5 = var3.approximate_member_count;
            var6 = var1 != var5;
            var3 = 0;
            if(!var6) { _fun0007_ip = 50; continue _fun0007 }
 47:
            var3 = var5;
 50:
            var2['memberCount'] = var3;
            var3 = var2.memberCount;
            if(!(var4 === var3)) { _fun0007_ip = 77; continue _fun0007 }
 65:
            var3 = var2.memberCount;
            var1 = null;
            if(!(var4 !== var3)) { _fun0007_ip = 80; continue _fun0007 }
 77:
            var1 = var2;
 80:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function isAlreadyMember(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg2;
            if(!var1) { _fun0008_ip = 31; continue _fun0008 }
 6:
            var2 = arg1;
            var3 = var2.state;
            var2 = _closure1_slot8;
            var2 = var2.ACCEPTED;
            var1 = var3 !== var2;
 31:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function shouldShowInviter(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var1 = var5.inviter;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0009_ip = 39; continue _fun0009 }
 18:
            var6 = _closure1_slot15;
            var4 = undefined;
            var2 = arg2;
            var2 = var6.bind(var4)(var5, var2);
            var1 = !var2;
 39:
            if(!var1) { _fun0009_ip = 91; continue _fun0009 }
 42:
            var4 = _closure1_slot14;
            var2 = undefined;
            var4 = var4.bind(var2)(var5);
            var5 = var3 == var4;
            if(var5) { _fun0009_ip = 69; continue _fun0009 }
 63:
            var2 = var4.memberCount;
 69:
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0009_ip = 81; continue _fun0009 }
 78:
            var3 = var2;
 81:
            var2 = 100;
            var2 = var3 > var2;
            var1 = !var2;
 91:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = {};
    var4['ACCEPT'] = var9;
    var7 = 'ACCEPT';
    var4[var9] = var7;
    var4['DECLINE'] = var8;
    var7 = 'DECLINE';
    var4[var8] = var7;
    var _closure1_slot17 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/InviteDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InviteDetails(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var10 = var1.invite;
            var9 = var1.isGuildMember;
            var2 = var1.onPressJoin;
            var _closure2_slot0 = var2;
            var2 = var1.onPressClose;
            var _closure2_slot1 = var2;
            var1 = var1.isRegistration;
            var2 = _closure1_slot13;
            var4 = undefined;
            var18 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var14 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var16 = {};
            var16['invite'] = var10;
            var16['isGuildMember'] = var9;
            var16['isRegistration'] = var1;
            var22 = var10.guild_scheduled_event;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var6.bind(var7)(var5, var1);
            var1 = 22;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useMultiAccountMobile;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var8 = _closure1_slot10;
            var6 = _closure1_slot18;
            var5 = {};
            var29 = var5;
            var28 = var16;
            var11 = copyDataProperties(var29, var28);
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var11 = _closure1_slot10;
            var8 = _closure1_slot20;
            var6 = {};
            var29 = var6;
            var28 = var16;
            var17 = copyDataProperties(var29, var28);
            var6 = var11.bind(var4)(var8, var6);
            var5[1] = var6;
            var11 = _closure1_slot10;
            var8 = _closure1_slot19;
            var6 = {};
            var29 = var6;
            var28 = var16;
            var17 = copyDataProperties(var29, var28);
            var6 = var11.bind(var4)(var8, var6);
            var5[2] = var6;
            var11 = _closure1_slot10;
            var8 = _closure1_slot21;
            var6 = {};
            var29 = var6;
            var28 = var16;
            var16 = copyDataProperties(var29, var28);
            var6 = var11.bind(var4)(var8, var6);
            var5[3] = var6;
            var6 = null;
            var8 = var6 != var22;
            if(!var8) { _fun0010_ip = 493; continue _fun0010 }
 340:
            var17 = _closure1_slot11;
            var16 = _closure1_slot5;
            var11 = {};
            var18 = var18.embedDetailsCard;
            var11['style'] = var18;
            var24 = _closure1_slot10;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 23;
            var18 = var23[var19];
            var18 = var20.bind(var4)(var18);
            var21 = var18.GuildEventCardHeader;
            var18 = {};
            var18['event'] = var22;
            var21 = var24.bind(var4)(var21, var18);
            var18 = new Array(3);
            var18[0] = var21;
            var25 = _closure1_slot10;
            var21 = var23[var19];
            var21 = var20.bind(var4)(var21);
            var24 = var21.GuildEventCardMetaInfo;
            var21 = {};
            var21['event'] = var22;
            var21 = var25.bind(var4)(var24, var21);
            var18[1] = var21;
            var21 = _closure1_slot10;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.GuildEventCardGuildInfo;
            var19 = {};
            var19['event'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[2] = var19;
            var11['children'] = var18;
            var8 = var17.bind(var4)(var16, var11);
 493:
            var5[4] = var8;
            var8 = _closure1_slot15;
            var16 = var8.bind(var4)(var10, var9);
            var8 = {};
            var8['isMultiAccountMobileEnabled'] = var7;
            var8['currentUser'] = var12;
            var7 = true;
            var8['redesignEnabled'] = var7;
            var8['isAlreadyMember'] = var16;
            var7 = function renderInviteButtonText(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = arg1;
                    var1 = var4.isMultiAccountMobileEnabled;
                    var3 = var4.currentUser;
                    var _closure3_slot0 = var3;
                    var2 = var4.redesignEnabled;
                    var4 = var4.isAlreadyMember;
                    if(var4) { _fun0011_ip = 204; continue _fun0011 }
 39:
                    if(!var1) { _fun0011_ip = 48; continue _fun0011 }
 42:
                    var1 = null;
                    if(!(var1 == var3)) { _fun0011_ip = 112; continue _fun0011 }
 48:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var3 = var8[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var8[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.e/6Ogo;
                    var1 = var3.bind(var4)(var1);
                    _fun0011_ip = 202; continue _fun0011;
 112:
                    if(var2) { _fun0011_ip = 124; continue _fun0011 }
 115:
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.style;
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot23;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var2['currentUser'] = var5;
                        var2['style'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    _fun0011_ip = 199; continue _fun0011;
 124:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 16;
                    var5 = var9[var3];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.9sWQNT;
                    var3 = {};
                    var7 = function usernameHook() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = _closure3_slot0;
                            var4 = var3.username;
                            var2 = var3.hasUniqueUsername;
                            var5 = var2.bind(var3)();
                            var3 = '';
                            var2 = var3;
                            if(var5) { _fun0012_ip = 64; continue _fun0012 }
 32:
                            var1 = _closure3_slot0;
                            var6 = var1.discriminator;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = '#';
                            var2 = var5.bind(var1)(var6);
 64:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var1 = var1.concat;
                            var1 = var1.bind(var3)(var4, var2);
                            return var1;
                        }
                    };
                    var3['usernameHook'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 199:
                    var1 = var2;
 202:
                    _fun0011_ip = 264; continue _fun0011;
 204:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.IRoQXl;
                    var1 = var3.bind(var4)(var2);
 264:
                    return var1;
                }
            };
            var19 = var7.bind(var4)(var8);
            var7 = var6 != var12;
            var9 = null;
            if(!var7) { _fun0010_ip = 590; continue _fun0010 }
 552:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 19;
            var7 = var10[var7];
            var11 = var8.bind(var4)(var7);
            var10 = var11.getUserAvatarSource;
            var8 = false;
            var7 = 20;
            var9 = var10.bind(var11)(var12, var8, var7);
 590:
            var6 = var6 != var9;
            var20 = undefined;
            if(!var6) { _fun0010_ip = 657; continue _fun0010 }
 599:
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 24;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.Button;
            var7 = var6.Icon;
            var6 = {};
            var6['source'] = var9;
            var9 = 'entity';
            var6['variant'] = var9;
            var20 = var8.bind(var4)(var7, var6);
 657:
            var8 = _closure1_slot11;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 25;
            var6 = var17[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.ButtonGroup;
            var6 = {};
            var18 = _closure1_slot10;
            var10 = 24;
            var9 = var17[var10];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Button;
            var9 = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            var9['icon'] = var20;
            var9['text'] = var19;
            var19 = function handleAcceptInvitePress() {
                var4 = _closure2_slot2;
                var1 = _closure1_slot17;
                var3 = var1.ACCEPT;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var19;
            var19 = _closure1_slot17;
            var20 = var19.ACCEPT;
            var20 = var14 === var20;
            var9['loading'] = var20;
            var19 = var19.ACCEPT;
            var19 = var14 === var19;
            var9['disabled'] = var19;
            var12 = var18.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot10;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'variant': 'secondary', 'size': 'lg'};
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 16;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            if(var16) { _fun0010_ip = 888; continue _fun0010 }
 873:
            var16 = var17.ndsK4e;
            var16 = var18.bind(var19)(var16);
            _fun0010_ip = 899; continue _fun0010;
 888:
            var17 = var17.WAI6xs;
            var16 = var18.bind(var19)(var17);
 899:
            var10['text'] = var16;
            var15 = function handleCancelPress() {
                var4 = _closure2_slot2;
                var1 = _closure1_slot17;
                var3 = var1.DECLINE;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10['onPress'] = var15;
            var13 = _closure1_slot17;
            var15 = var13.DECLINE;
            var15 = var14 === var15;
            var10['loading'] = var15;
            var13 = var13.DECLINE;
            var13 = var14 === var13;
            var10['disabled'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();