// app/modules/accept_invite/native/InviteDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function getMemberCountFromInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = {};
            var6 = var3.approximate_presence_count;
            var1 = null;
            var7 = var1 != var6;
            var4 = 0;
            var5 = 0;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6;
case 2:
            var2['onlineCount'] = var5;
            var5 = var3.approximate_member_count;
            var6 = var1 != var5;
            var3 = 0;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5;
case 4:
            var2['memberCount'] = var3;
            var3 = var2.memberCount;
            var1 = null;
            if(!(var4 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function isAlreadyMember(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg2;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = arg1;
            var3 = var2.state;
            var2 = _closure1_slot10;
            var2 = var2.ACCEPTED;
            var1 = var3 !== var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function shouldShowInviter(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = var5.inviter;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = _closure1_slot18;
            var4 = undefined;
            var2 = arg2;
            var2 = var6.bind(var4)(var5, var2);
            var1 = !var2;
case 10:
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = _closure1_slot17;
            var2 = undefined;
            var4 = var4.bind(var2)(var5);
            var5 = var3 == var4;
            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var4.memberCount;
case 14:
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = var2;
case 16:
            var2 = 100;
            var2 = var3 > var2;
            var1 = !var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function InviteDestinationIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var13 = var1.invite;
            var1 = _closure1_slot15;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var15.avatarContainer;
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
            if(!var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var5 = var13.inviter;
            var6 = null;
            if(!(var6 == var5)) { _fun0004_ip = 20; continue _fun0004 }
case 18:
            var7 = var13.guild;
            var5 = null;
            var7 = var5 != var7;
            if(!var7) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var9 = _closure1_slot12;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 14;
            var7 = var12[var10];
            var8 = var11.bind(var4)(var7);
            var7 = {};
            var16 = var15.avatar;
            var7['style'] = var16;
            var16 = var13.guild;
            var7['guild'] = var16;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.LARGE;
            var7['size'] = var10;
            var10 = 2;
            var7['textScale'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 21:
            _fun0004_ip = 23; continue _fun0004;
case 20:
            var7 = var13.inviter;
            var7 = var6 != var7;
            var6 = null;
            if(!var7) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var9 = _closure1_slot12;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 13;
            var7 = var12[var10];
            var7 = var11.bind(var4)(var7);
            var8 = var7.Avatar;
            var7 = {};
            var15 = var15.avatar;
            var7['avatarStyle'] = var15;
            var15 = _closure1_slot7;
            var18 = var13.inviter;
            var14 = var15.prototype;
            var14 = Object.create(var14, {constructor: {value: var15}});
            var19 = var14;
            var13 = new var19[var15](var18, var17);
            var13 = var13 instanceof Object ? var13 : var14;
            var7['user'] = var13;
            var7['guildId'] = var4;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.XLARGE;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5 = var6;
case 23:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function InviteHeader(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var13 = var1.invite;
            var1 = _closure1_slot15;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isGroupDMInvite;
            var1 = var1.bind(var2)(var13);
            if(var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var1 = var13.guild;
            var2 = null;
            var2 = var2 == var1;
            var10 = undefined;
            if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var10 = var1.name;
case 28:
            _fun0005_ip = 30; continue _fun0005;
case 26:
            var4 = var13.channel;
            var2 = null;
            var6 = var2 == var4;
            var1 = undefined;
            if(var6) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var1 = var4.name;
case 31:
            if(!(var2 == var1)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.getFormattedName;
            var2 = var13.inviter;
            var1 = var4.bind(var6)(var2);
case 33:
            var10 = var1;
case 30:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isFriendInvite;
            var1 = var1.bind(var2)(var13);
            if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
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
            var2 = var1["4aF92R"];
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
case 35:
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var11.guildNameContainer;
            var2['style'] = var6;
            var9 = _closure1_slot12;
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
            var9 = _closure1_slot12;
            var8 = _closure1_slot0;
            var7 = 18;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Heading;
            var7 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var11 = var11.guildNameText;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 37:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function InviteJoinContext(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var12 = var2.invite;
            var _closure2_slot0 = var12;
            var3 = var2.isRegistration;
            var8 = var2.isGuildMember;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot15;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var8;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var5 = undefined;
                    var6 = var2.bind(var5)(var1);
                    var4 = var6.isStreamInvite;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var6)(var1);
                    if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var1 = _closure2_slot0;
                    var4 = var1.target_user;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0007_ip = 41; continue _fun0007 }
case 39:
                    var6 = _closure1_slot19;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = var6.bind(var5)(var4, var1);
                    var6 = null;
                    var1 = null;
                    if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var4 = _closure2_slot0;
                    var4 = var4.inviter;
                    var4 = var6 != var4;
                    var1 = null;
                    if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 19;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.getUserAvatarSource;
                    var4 = _closure2_slot0;
                    var4 = var4.inviter;
                    var1 = var6.bind(var7)(var4);
case 42:
                    _fun0007_ip = 45; continue _fun0007;
case 41:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getUserAvatarSource;
                    var2 = _closure2_slot0;
                    var2 = var2.target_user;
                    var1 = var3.bind(var4)(var2);
case 45:
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
            var7 = var7["3rE1P8"];
            var7 = var9.bind(var11)(var7);
            var13 = 12;
            var2 = var2[var13];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isFriendInvite;
            var5 = var2.bind(var5)(var12);
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = var11[var13];
            var9 = var2.bind(var4)(var5);
            var5 = var9.isGroupDMInvite;
            var5 = var5.bind(var9)(var12);
            if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var9 = var9.bind(var4)(var5);
            var5 = var9.isStreamInvite;
            var5 = var5.bind(var9)(var12);
            if(!var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var9 = var12.target_user;
            var5 = null;
            if(!(var5 == var9)) { _fun0006_ip = 52; continue _fun0006 }
case 50:
            var5 = _closure1_slot18;
            var5 = var5.bind(var4)(var12, var8);
            if(var5) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var5 = _closure1_slot19;
            var5 = var5.bind(var4)(var12, var8);
            if(!var5) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var9 = var12.inviter;
            var8 = null;
            var5 = var8 != var9;
case 55:
            var9 = var7;
            if(!var5) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var14 = var5.intl;
            var8 = var14.format;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.spU2mI;
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
            _fun0006_ip = 57; continue _fun0006;
case 53:
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var1];
            var7 = var14.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var1];
            var5 = var14.bind(var4)(var5);
            var5 = var5.t;
            if(var3) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var3 = var5.FDsl+J;
            var3 = var7.bind(var8)(var3);
            _fun0006_ip = 61; continue _fun0006;
case 59:
            var5 = var5.jpwYbt;
            var3 = var7.bind(var8)(var5);
case 61:
            var9 = var3;
            _fun0006_ip = 57; continue _fun0006;
case 52:
            var5 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = var17[var1];
            var3 = var5.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.formatToPlainString;
            var3 = var17[var1];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.x2L32Q;
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
            _fun0006_ip = 57; continue _fun0006;
case 48:
            var3 = var12.channel;
            var5 = null;
            if(!(var5 != var3)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var3 = var12.inviter;
            if(!(var5 == var3)) { _fun0006_ip = 64; continue _fun0006 }
case 62:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var1];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var3[var1];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.OsdY8B;
            var3 = var5.bind(var7)(var3);
            _fun0006_ip = 65; continue _fun0006;
case 64:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var14 = var5.intl;
            var8 = var14.format;
            var5 = var18[var1];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.Lu4h18;
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
case 65:
            var9 = var3;
            _fun0006_ip = 57; continue _fun0006;
case 46:
            var3 = var11[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.Quj7HX;
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
case 57:
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.inviteJoinContainer;
            var1['style'] = var5;
            var8 = null;
            var5 = var8 == var15;
            var7 = null;
            if(var5) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var11 = var11.bind(var4)(var5);
            var5 = var11.isFriendInvite;
            var5 = var5.bind(var11)(var12);
            var7 = null;
            if(var5) { _fun0006_ip = 66; continue _fun0006 }
case 68:
            var11 = _closure1_slot12;
            var8 = _closure1_slot5;
            var5 = {};
            var12 = var10.inviterIconWrapper;
            var5['style'] = var12;
            var14 = _closure1_slot12;
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
case 66:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 18;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-default'};
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
    var _closure1_slot22 = var1;
    var1 = function InviteMemberCounts(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.invite;
            var4 = var1.isGuildMember;
            var1 = _closure1_slot15;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var1 = _closure1_slot17;
            var19 = var1.bind(var5)(var2);
            var7 = null;
            var3 = var7 == var19;
            var1 = null;
            if(var3) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var3 = _closure1_slot19;
            var3 = var3.bind(var5)(var2, var4);
            var1 = null;
            if(var3) { _fun0008_ip = 69; continue _fun0008 }
case 14:
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0008_ip = 71; continue _fun0008 }
case 17:
            var2 = var2.guild;
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var3 = var2.id;
case 71:
            var2 = _closure1_slot11;
            var1 = null;
            if(!(var3 !== var2)) { _fun0008_ip = 69; continue _fun0008 }
case 22:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.memberInfo;
            var2['style'] = var6;
            var6 = var19.onlineCount;
            var6 = var7 != var6;
            var8 = null;
            if(!var6) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var6 = {};
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var11 = {};
            var16 = var15.dotOnline;
            var11['style'] = var16;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var16 = _closure1_slot12;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 18;
            var13 = var22[var13];
            var13 = var18.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var17 = 16;
            var20 = var22[var17];
            var20 = var18.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.format;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.t;
            var18 = var17.LC+S+m;
            var17 = {};
            var22 = var19.onlineCount;
            var17['membersOnline'] = var22;
            var17 = var20.bind(var21)(var18, var17);
            var13['children'] = var17;
            var13 = var16.bind(var5)(var14, var13);
            var11[1] = var13;
            var6['children'] = var11;
            var8 = var10.bind(var5)(var9, var6);
case 73:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var19.memberCount;
            var8 = var7 != var8;
            var7 = null;
            if(!var8) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var8 = {};
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var11 = {};
            var15 = var15.dotOffline;
            var11['style'] = var15;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot12;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 18;
            var12 = var20[var12];
            var12 = var16.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var15 = 16;
            var17 = var20[var15];
            var17 = var16.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.t;
            var16 = var15.zRl6XR;
            var15 = {};
            var19 = var19.memberCount;
            var15['count'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 75:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 69:
            return var1;
        }
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var4 = var4.InviteStates;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.INVITE_ROUTING_HUB_GUILD_ID;
    var _closure1_slot11 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
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
    var11 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'marginBottom': 8, 'marginLeft': 16, 'marginRight': 16};
    var4['inviteJoinContainer'] = var11;
    var11 = {};
    var14 = 'center';
    var11['textAlign'] = var14;
    var4['inviteJoinText'] = var11;
    var11 = {};
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.none;
    var11['borderRadius'] = var16;
    var11['marginRight'] = var15;
    var4['inviterIconWrapper'] = var11;
    var11 = {'width': 20, 'height': 20};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var11['borderRadius'] = var15;
    var4['inviterIcon'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['guildNameContainer'] = var11;
    var11 = {};
    var11['textAlign'] = var14;
    var4['guildNameText'] = var11;
    var11 = {'flexGrow': 0, 'marginRight': 8};
    var14 = 11;
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.DARK_1_LIGHT_04;
    var11['opacity'] = var14;
    var4['featureIcon'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['memberInfo'] = var11;
    var11 = {'marginTop': 8, 'marginBottom': 8, 'alignItems': 'center'};
    var4['rolesList'] = var11;
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
    var11 = {'width': '100%', 'backgroundColor': null, 'padding': 16, 'borderRadius': null, 'marginTop': 16, 'marginBottom': 8};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var11['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11['borderRadius'] = var12;
    var4['embedDetailsCard'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var4['ACCEPT'] = var9;
    var7 = 'ACCEPT';
    var4[var9] = var7;
    var4['DECLINE'] = var8;
    var7 = 'DECLINE';
    var4[var8] = var7;
    var _closure1_slot16 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/accept_invite/native/InviteDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InviteDetails(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var11 = var1.invite;
            var _closure2_slot0 = var11;
            var10 = var1.isGuildMember;
            var2 = var1.onPressJoin;
            var _closure2_slot1 = var2;
            var2 = var1.onPressClose;
            var _closure2_slot2 = var2;
            var1 = var1.isRegistration;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot15;
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
            _closure2_slot3 = var2;
            var17 = {};
            var17['invite'] = var11;
            var17['isGuildMember'] = var10;
            var17['isRegistration'] = var1;
            var22 = var11.guild_scheduled_event;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 22;
            var3 = var16[var1];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var5, var3);
            var _closure2_slot4 = var6;
            var1 = var16[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCanUseMultiAccountMobile;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot20;
            var5 = {};
            var29 = var5;
            var28 = var17;
            var12 = copyDataProperties(var29, var28);
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(7);
            var5[0] = var8;
            var12 = _closure1_slot12;
            var9 = _closure1_slot22;
            var8 = {};
            var29 = var8;
            var28 = var17;
            var19 = copyDataProperties(var29, var28);
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var12 = _closure1_slot12;
            var9 = _closure1_slot21;
            var8 = {};
            var29 = var8;
            var28 = var17;
            var19 = copyDataProperties(var29, var28);
            var8 = var12.bind(var4)(var9, var8);
            var5[2] = var8;
            var12 = _closure1_slot12;
            var9 = _closure1_slot23;
            var8 = {};
            var29 = var8;
            var28 = var17;
            var17 = copyDataProperties(var29, var28);
            var8 = var12.bind(var4)(var9, var8);
            var5[3] = var8;
            var12 = _closure1_slot12;
            var9 = _closure1_slot1;
            var8 = 23;
            var8 = var16[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['invite'] = var11;
            var16 = var18.rolesList;
            var8['style'] = var16;
            var8 = var12.bind(var4)(var9, var8);
            var5[4] = var8;
            var9 = null;
            var8 = var9 != var22;
            if(!var8) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var17 = _closure1_slot13;
            var16 = _closure1_slot5;
            var12 = {};
            var18 = var18.embedDetailsCard;
            var12['style'] = var18;
            var24 = _closure1_slot12;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 24;
            var18 = var23[var19];
            var18 = var20.bind(var4)(var18);
            var21 = var18.GuildEventCardHeader;
            var18 = {};
            var18['event'] = var22;
            var21 = var24.bind(var4)(var21, var18);
            var18 = new Array(3);
            var18[0] = var21;
            var25 = _closure1_slot12;
            var21 = var23[var19];
            var21 = var20.bind(var4)(var21);
            var24 = var21.GuildEventCardMetaInfo;
            var21 = {};
            var21['event'] = var22;
            var21 = var25.bind(var4)(var24, var21);
            var18[1] = var21;
            var21 = _closure1_slot12;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.GuildEventCardGuildInfo;
            var19 = {};
            var19['event'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[2] = var19;
            var12['children'] = var18;
            var8 = var17.bind(var4)(var16, var12);
case 77:
            var5[5] = var8;
            var8 = _closure1_slot18;
            var16 = var8.bind(var4)(var11, var10);
            var8 = var9 != var6;
            var12 = null;
            if(!var8) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 19;
            var8 = var11[var8];
            var17 = var10.bind(var4)(var8);
            var11 = var17.getUserAvatarSource;
            var10 = false;
            var8 = 20;
            var12 = var11.bind(var17)(var6, var10, var8);
case 79:
            var8 = var9 != var12;
            var22 = undefined;
            if(!var8) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 25;
            var8 = var17[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.Button;
            var10 = var8.Icon;
            var8 = {};
            var8['source'] = var12;
            var12 = 'entity';
            var8['variant'] = var12;
            var22 = var11.bind(var4)(var10, var8);
case 81:
            var8 = var9 != var6;
            var6 = undefined;
            if(!var8) { _fun0009_ip = 83; continue _fun0009 }
case 84:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 16;
            var11 = var17[var8];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var17[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var10 = var8["9sWQNT"];
            var8 = {};
            var17 = function usernameHook() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var4 = var3.username;
                    var2 = var3.hasUniqueUsername;
                    var5 = var2.bind(var3)();
                    var3 = '';
                    var2 = var3;
                    if(var5) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var1 = _closure2_slot4;
                    var6 = var1.discriminator;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = '#';
                    var2 = var5.bind(var1)(var6);
case 85:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var1 = var1.concat;
                    var1 = var1.bind(var3)(var4, var2);
                    return var1;
                }
            };
            var8['usernameHook'] = var17;
            var6 = var11.bind(var12)(var10, var8);
case 83:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var21 = 16;
            var10 = var8[var21];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var8[var21];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.e/6Ogt;
            var8 = var10.bind(var11)(var8);
            if(var16) { _fun0009_ip = 87; continue _fun0009 }
case 57:
            if(!var7) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var7 = var9 != var6;
case 88:
            var20 = var8;
            var19 = var6;
            if(!var7) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var20 = var6;
            var19 = var20;
            _fun0009_ip = 90; continue _fun0009;
case 87:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var21];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var21];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.IRoQXr;
            var20 = var7.bind(var8)(var6);
            var19 = var20;
case 90:
            var8 = _closure1_slot13;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 26;
            var6 = var17[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.ButtonGroup;
            var6 = {};
            var18 = _closure1_slot12;
            var10 = 25;
            var9 = var17[var10];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Button;
            var9 = {'icon': null, 'variant': 'primary', 'size': 'lg'};
            var9['icon'] = var22;
            var9['text'] = var20;
            var9['accessibilityLabel'] = var19;
            var19 = function handleAcceptInvitePress() {
                var4 = _closure2_slot3;
                var1 = _closure1_slot16;
                var3 = var1.ACCEPT;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var19;
            var19 = _closure1_slot16;
            var20 = var19.ACCEPT;
            var20 = var14 === var20;
            var9['loading'] = var20;
            var19 = var19.ACCEPT;
            var19 = var14 === var19;
            var9['disabled'] = var19;
            var12 = var18.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot12;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'variant': 'secondary', 'size': 'lg'};
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            if(var16) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var16 = var17.ndsK4Z;
            var16 = var18.bind(var19)(var16);
            _fun0009_ip = 94; continue _fun0009;
case 92:
            var17 = var17.WAI6xu;
            var16 = var18.bind(var19)(var17);
case 94:
            var10['text'] = var16;
            var15 = function handleCancelPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = _closure2_slot3;
                    var1 = _closure1_slot16;
                    var4 = var1.DECLINE;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.INVITE_ACCEPT_DISMISSED;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.code;
                    var3['invite_code'] = var8;
                    var8 = var7.guild;
                    var7 = null;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                    var7 = var8.id;
case 95:
                    var3['guild_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var10['onPress'] = var15;
            var13 = _closure1_slot16;
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
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();