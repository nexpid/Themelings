// app/components_native/chat/ChatBeginningRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ThreadOwner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var _closure2_slot0 = var3;
            var10 = var1.guildId;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot45;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 42;
            var6 = var7[var3];
            var11 = var5.bind(var4)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot25;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot25;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var8, var6);
            var6 = var7[var3];
            var12 = var5.bind(var4)(var6);
            var9 = var12.useStateFromStores;
            var6 = _closure1_slot20;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var5 = _closure1_slot20;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var6 = var9.bind(var12)(var8, var6);
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useStateFromStores;
            var8 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var1 = _closure1_slot9;
                var1 = var1.roleStyle;
                return var1;
            };
            var12 = var5.bind(var7)(var3, var2);
            var2 = null;
            var5 = var2 == var6;
            var3 = undefined;
            if(var5) { _fun0001_ip = 181; continue _fun0001 }
 175:
            var3 = var6.nick;
 181:
            if(!(var2 == var3)) { _fun0001_ip = 216; continue _fun0001 }
 185:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 43;
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.getName;
            var3 = var5.bind(var7)(var11);
 216:
            var7 = var2 != var3;
            var5 = '???';
            if(!var7) { _fun0001_ip = 232; continue _fun0001 }
 229:
            var5 = var3;
 232:
            var3 = var2 == var6;
            var7 = undefined;
            if(var3) { _fun0001_ip = 247; continue _fun0001 }
 241:
            var7 = var6.colorString;
 247:
            var8 = var2 != var7;
            var3 = null;
            if(!var8) { _fun0001_ip = 259; continue _fun0001 }
 256:
            var3 = var7;
 259:
            var8 = var2 == var6;
            var7 = undefined;
            if(var8) { _fun0001_ip = 274; continue _fun0001 }
 268:
            var7 = var6.colorStrings;
 274:
            var8 = var2 != var7;
            var6 = null;
            if(!var8) { _fun0001_ip = 286; continue _fun0001 }
 283:
            var6 = var7;
 286:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 44;
            var8 = var13[var7];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useProcessColorStringsArray;
            var8 = var8.bind(var14)(var6);
            var7 = var13[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.useIsRoleStyleAndRoleColorsEligibleForERC;
            var13 = var2 == var11;
            var16 = var6;
            var6 = undefined;
            if(var13) { _fun0001_ip = 349; continue _fun0001 }
 344:
            var6 = var11.id;
 349:
            var22 = var9;
            var21 = var10;
            var20 = var6;
            var19 = var12;
            var18 = var8;
            var9 = var22[var7](var21, var20, var19, var18, var17);
            var6 = 'username';
            if(!(var6 !== var12)) { _fun0001_ip = 541; continue _fun0001 }
 379:
            var10 = _closure1_slot44;
            var7 = _closure1_slot43;
            var6 = {};
            var11 = 'dot';
            var12 = var11 === var12;
            if(!var12) { _fun0001_ip = 404; continue _fun0001 }
 400:
            var12 = var2 != var3;
 404:
            if(!var12) { _fun0001_ip = 464; continue _fun0001 }
 407:
            var14 = _closure1_slot42;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 46;
            var11 = var17[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.RoleDot;
            var11 = {};
            var11['color'] = var3;
            var11['colors'] = var16;
            var15 = var15.threadCreatorRoleDot;
            var11['containerStyles'] = var15;
            var12 = var14.bind(var4)(var13, var11);
 464:
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot42;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 34;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/semibold', 'color': 'header-secondary'};
            var12['children'] = var5;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            return var6;
 541:
            var2 = var2 != var3;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 559; continue _fun0001 }
 550:
            var2 = {};
            var2['color'] = var3;
            var6 = var2;
 559:
            var3 = _closure1_slot42;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 45;
            var7 = var11[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.isFabric;
            var7 = var7.bind(var10)();
            var7 = !var7;
            var1['experimental_useNativeText'] = var7;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 628; continue _fun0001 }
 625:
            var7 = var8;
 628:
            var1['gradientColors'] = var7;
            var1['style'] = var6;
            var6 = 'text-md/semibold';
            var1['variant'] = var6;
            var6 = 'header-secondary';
            var1['color'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function DMSpamButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var1 = var3.user;
            var4 = var3.showingSpamBanner;
            var12 = var3.color;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0003_ip = 71; continue _fun0003 }
 36:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 68;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.Colors;
            var12 = var6.RED;
 71:
            var9 = var3.text;
            if(!(var9 === var5)) { _fun0003_ip = 140; continue _fun0003 }
 80:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 29;
            var7 = var13[var6];
            var7 = var11.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var13[var6];
            var6 = var11.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.HHZmDg;
            var9 = var7.bind(var8)(var6);
 140:
            var14 = var3.style;
            var11 = var3.renderIcon;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot45;
            var16 = var3.bind(var5)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 69;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useIsRelationshipTypeSpamReportable;
            var3 = var1.id;
            var3 = var6.bind(var7)(var3);
            if(var3) { _fun0003_ip = 211; continue _fun0003 }
 205:
            var3 = var1.bot;
 211:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 70;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useLongestChannelMessageBeforeReply;
            var2 = var2.id;
            var1 = var1.id;
            var2 = var6.bind(var7)(var2, var1);
            _closure2_slot1 = var2;
            var17 = null;
            var1 = null;
            if(var4) { _fun0003_ip = 432; continue _fun0003 }
 267:
            var1 = null;
            if(!var3) { _fun0003_ip = 432; continue _fun0003 }
 275:
            var2 = var17 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 432; continue _fun0003 }
 287:
            var4 = _closure1_slot42;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var16.buttonContainer;
            var2['style'] = var6;
            var8 = _closure1_slot42;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var15 = 68;
            var6 = var6[var15];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            if(!(var17 == var14)) { _fun0003_ip = 343; continue _fun0003 }
 337:
            var14 = var16.spamButton;
 343:
            var6['style'] = var14;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.XSMALL;
            var6['size'] = var13;
            var6['color'] = var12;
            var6['text'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 71;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.showReportModalForFirstDM;
                var3 = _closure2_slot1;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 72;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.closePrivateChannel;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6['onPress'] = var9;
            var9 = undefined;
            if(!var11) { _fun0003_ip = 411; continue _fun0003 }
 404:
            var9 = function() {
                var4 = _closure1_slot42;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 27;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Sizes;
                var5 = var5.SMALL;
                var1['size'] = var5;
                var5 = 73;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
 411:
            var6['renderIcon'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 432:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function ManageAppButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = var3.user;
            var2 = var3.application;
            var _closure2_slot0 = var2;
            var4 = var3.channel;
            var _closure2_slot1 = var4;
            var3 = var3.oauth2Token;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot45;
            var5 = undefined;
            var13 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 42;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getSelfEmbeddedActivities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var _closure2_slot3 = var3;
            var4 = var1.bot;
            var3 = null;
            var1 = null;
            if(!var4) { _fun0004_ip = 335; continue _fun0004 }
 121:
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0004_ip = 335; continue _fun0004 }
 133:
            var4 = _closure1_slot42;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var13.buttonContainer;
            var2['style'] = var6;
            var8 = _closure1_slot42;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 68;
            var6 = var14[var11];
            var7 = var12.bind(var5)(var6);
            var6 = {};
            var13 = var13.appDMButton;
            var6['style'] = var13;
            var13 = var14[var11];
            var13 = var12.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.XSMALL;
            var6['size'] = var13;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.Colors;
            var11 = var11.GREY;
            var6['color'] = var11;
            var13 = _closure1_slot0;
            var10 = 29;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.5S3sQE;
            var10 = var11.bind(var12)(var10);
            var6['text'] = var10;
            var10 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 74;
                var3 = var5[var1];
                var1 = undefined;
                var10 = var4.bind(var1)(var3);
                var9 = var10.openAlert;
                var11 = _closure1_slot42;
                var4 = _closure1_slot1;
                var3 = 75;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var3 = {};
                var7 = _closure2_slot0;
                var3['application'] = var7;
                var12 = function onDelete() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 76;
                        var2 = var4[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.delete;
                        var2 = _closure2_slot2;
                        var2 = var2.id;
                        var2 = var6.bind(var7)(var2);
                        var7 = _closure2_slot3;
                        var6 = var7.get;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var7 = var6.bind(var7)(var2);
                        var2 = 77;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.leaveActivity;
                        var2 = {};
                        var6 = null;
                        var8 = var6 == var7;
                        var6 = undefined;
                        if(var8) { _fun0005_ip = 106; continue _fun0005 }
 101:
                        var6 = var7.location;
 106:
                        var2['location'] = var6;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var2['applicationId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3['onDelete'] = var12;
                var8 = var11.bind(var1)(var8, var3);
                var3 = 'confirm-delete-authed-app';
                var3 = var9.bind(var10)(var3, var8);
                var3 = 78;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot26;
                var3 = var2.APP_MANAGE_CTA_CLICKED;
                var2 = {};
                var7 = var7.id;
                var2['application_id'] = var7;
                var6 = _closure2_slot1;
                var7 = var6.id;
                var2['channel_id'] = var7;
                var6 = var6.type;
                var2['channel_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6['onPress'] = var10;
            var9 = function renderIcon() {
                var4 = _closure1_slot42;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 27;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Sizes;
                var5 = var5.SMALL;
                var1['size'] = var5;
                var5 = 79;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderIcon'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 335:
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function MuteAppButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var1 = var1.user;
            var2 = _closure1_slot45;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var _closure2_slot1 = var15;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 42;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot24;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot24;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = null;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var10 = var4.bind(var6)(var3, var2);
            var _closure2_slot2 = var10;
            var2 = var1.bot;
            var1 = null;
            if(!var2) { _fun0006_ip = 343; continue _fun0006 }
 104:
            var4 = _closure1_slot42;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var15.buttonContainer;
            var2['style'] = var6;
            var8 = _closure1_slot42;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var14 = 68;
            var6 = var12[var14];
            var7 = var13.bind(var5)(var6);
            var6 = {};
            var15 = var15.appDMButton;
            var6['style'] = var15;
            var12 = var12[var14];
            var12 = var13.bind(var5)(var12);
            var12 = var12.Sizes;
            var12 = var12.XSMALL;
            var6['size'] = var12;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Colors;
            if(var10) { _fun0006_ip = 219; continue _fun0006 }
 211:
            var12 = var13.RED;
            _fun0006_ip = 225; continue _fun0006;
 219:
            var12 = var13.GREY;
 225:
            var6['color'] = var12;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 29;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            if(var10) { _fun0006_ip = 289; continue _fun0006 }
 276:
            var10 = var11.w4m94+;
            var10 = var12.bind(var13)(var10);
            _fun0006_ip = 300; continue _fun0006;
 289:
            var11 = var11.YqAjX1;
            var10 = var12.bind(var13)(var11);
 300:
            var6['text'] = var10;
            var10 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    if(var4) { _fun0007_ip = 103; continue _fun0007 }
 21:
                    var4 = 84;
                    var4 = var9[var4];
                    var10 = undefined;
                    var8 = var2.bind(var10)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 86;
                    var4 = var9[var4];
                    var6 = var5.bind(var10)(var4);
                    var4 = 85;
                    var5 = var9[var4];
                    var4 = var9.paths;
                    var6 = var6.bind(var10)(var5, var4);
                    var5 = {};
                    var4 = _closure2_slot0;
                    var5['channel'] = var4;
                    var4 = 'MessageNotificationChannelActionSheet';
                    var4 = var7.bind(var8)(var6, var4, var5);
                    _fun0007_ip = 282; continue _fun0007;
 103:
                    var4 = 80;
                    var4 = var9[var4];
                    var8 = undefined;
                    var10 = var2.bind(var8)(var4);
                    var6 = var10.updateChannelOverrideSettings;
                    var3 = _closure2_slot0;
                    var13 = var3.id;
                    var4 = {};
                    var3 = false;
                    var4['muted'] = var3;
                    var7 = _closure1_slot0;
                    var1 = 81;
                    var1 = var9[var1];
                    var1 = var7.bind(var8)(var1);
                    var1 = var1.NotificationLabels;
                    var11 = var1.Unmuted;
                    var14 = null;
                    var15 = var10;
                    var12 = var4;
                    var1 = var15[var6](var14, var13, var12, var11, var10);
                    var1 = 82;
                    var1 = var9[var1];
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'NOTIFICATIONS_UNMUTED';
                    var1['key'] = var4;
                    var4 = 29;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4./6kul5;
                    var4 = var5.bind(var6)(var4);
                    var1['content'] = var4;
                    var4 = function icon() {
                        var4 = _closure1_slot42;
                        var3 = _closure1_slot8;
                        var2 = {};
                        var8 = _closure2_slot1;
                        var5 = var8.unmutedNotificationContainer;
                        var2['style'] = var5;
                        var7 = _closure1_slot42;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 27;
                        var5 = var11[var1];
                        var1 = undefined;
                        var6 = var10.bind(var1)(var5);
                        var5 = {};
                        var9 = 83;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var5['source'] = var9;
                        var9 = 26;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.unsafe_rawColors;
                        var9 = var9.WHITE_500;
                        var5['color'] = var9;
                        var8 = var8.unmutedNotification;
                        var5['style'] = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['icon'] = var4;
                    var1 = var2.bind(var3)(var1);
 282:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var10;
            var9 = function renderIcon() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot42;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 27;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var8.bind(var3)(var1);
                    var1 = {};
                    var5 = var7[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.Sizes;
                    var5 = var5.SMALL;
                    var1['size'] = var5;
                    var7 = _closure2_slot2;
                    var10 = _closure1_slot2;
                    if(var7) { _fun0008_ip = 79; continue _fun0008 }
 70:
                    var7 = 83;
                    var7 = var10[var7];
                    _fun0008_ip = 86; continue _fun0008;
 79:
                    var9 = 87;
                    var7 = var10[var9];
 86:
                    var7 = var8.bind(var3)(var7);
                    var1['source'] = var7;
                    var7 = _closure2_slot2;
                    var5 = undefined;
                    if(var7) { _fun0008_ip = 135; continue _fun0008 }
 104:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 26;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.unsafe_rawColors;
                    var5 = var6.WHITE_500;
 135:
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderIcon'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 343:
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.Image;
    var _closure1_slot7 = var7;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var16 = 8;
    var4 = var6[var16];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot15 = var4;
    var4 = 11;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot17 = var4;
    var15 = 12;
    var4 = var6[var15];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var13 = 16;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var14 = 20;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot26 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot27 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot28 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot29 = var7;
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot30 = var7;
    var7 = var4.GuildSettingsSections;
    var _closure1_slot31 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot32 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot33 = var7;
    var7 = var4.Permissions;
    var _closure1_slot34 = var7;
    var7 = var4.RelationshipTypes;
    var _closure1_slot35 = var7;
    var7 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot36 = var7;
    var4 = var4.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot37 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot38 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsActions;
    var _closure1_slot39 = var7;
    var4 = var4.AnalyticsSetupTypes;
    var _closure1_slot40 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
    var _closure1_slot41 = var4;
    var18 = 24;
    var4 = var6[var18];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot42 = var7;
    var7 = var4.Fragment;
    var _closure1_slot43 = var7;
    var4 = var4.jsxs;
    var _closure1_slot44 = var4;
    var4 = 25;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'paddingVertical': 8, 'paddingHorizontal': 12, 'width': '100%'};
    var4['container'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['title'] = var9;
    var9 = {'marginBottom': 16, 'lineHeight': 20};
    var4['subtitle'] = var9;
    var9 = {'borderRadius': null, 'marginTop': 16, 'width': '100%'};
    var11 = 26;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['gdmInviteFriends'] = var9;
    var9 = {'borderRadius': null, 'marginTop': 8, 'width': '100%'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['gdmShareInviteLink'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['gdmShareInviteLinkNoRelationships'] = var9;
    var9 = {};
    var9['marginLeft'] = var16;
    var4['ctaLabel'] = var9;
    var10 = 'row';
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['ctaContainer'] = var9;
    var17 = 'center';
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['ctaButton'] = var9;
    var9 = {};
    var9['paddingRight'] = var18;
    var4['ctaAddRoles'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['channelIcon'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var4['avatar'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var4['avatarRedesign'] = var9;
    var9 = {'paddingHorizontal': 8, 'alignItems': 'center'};
    var4['centerHeader'] = var9;
    var9 = {};
    var9['textAlign'] = var17;
    var4['gdmText'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['dmTitle'] = var9;
    var9 = {};
    var9['marginTop'] = var16;
    var4['dmBeginningMessage'] = var9;
    var9 = {};
    var9['marginTop'] = var15;
    var4['provisionalAccountExplainer'] = var9;
    var9 = {'marginTop': 8, 'marginLeft': 8, 'height': 26};
    var4['mutualGuildsLabel'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['mutualGuildsIcons'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 6};
    var4['mutualGuildsContainer'] = var9;
    var9 = {'width': 64, 'height': 64, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xxl;
    var9['borderRadius'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var15;
    var4['threadIconContainer'] = var9;
    var9 = {};
    var9['lineHeight'] = var14;
    var4['threadDetails'] = var9;
    var9 = {'paddingRight': 4, 'paddingTop': 2};
    var4['threadCreatorRoleDot'] = var9;
    var9 = {'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['tagContainer'] = var9;
    var9 = {'width': 64, 'height': 64, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xxl;
    var9['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var4['forumPostIconContainer'] = var9;
    var9 = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['buttonContainer'] = var9;
    var9 = {'flexGrow': 0, 'paddingHorizontal': 8, 'marginRight': 8};
    var4['spamButton'] = var9;
    var9 = {'flexGrow': 0, 'paddingHorizontal': 0, 'marginRight': 8};
    var4['spamButtonNoPadding'] = var9;
    var9 = {};
    var14 = 32;
    var9['top'] = var14;
    var4['systemDMContainer'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var14;
    var9['padding'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['systemDMHeaderContainer'] = var9;
    var9 = {};
    var9['flexDirection'] = var10;
    var4['systemDMImages'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_ACTIVE;
    var9['color'] = var13;
    var4['forumPostIconColor'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE;
    var9['backgroundColor'] = var11;
    var4['unmutedNotificationContainer'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['unmutedNotification'] = var9;
    var9 = {};
    var9['flexDirection'] = var10;
    var4['appDMButtonContainer'] = var9;
    var9 = {'flexGrow': 0, 'marginRight': 8};
    var4['appDMButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot45 = var4;
    var4 = function ChatBeginningRowIcon(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var1 = var3.isPrivate;
            var2 = var3.isThread;
            var4 = var3.isNSFW;
            var3 = var3.isForumPost;
            var5 = _closure1_slot45;
            var4 = undefined;
            var8 = var5.bind(var4)();
            if(var3) { _fun0009_ip = 349; continue _fun0009 }
 46:
            if(var2) { _fun0009_ip = 216; continue _fun0009 }
 52:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0009_ip = 83; continue _fun0009 }
 63:
            var1 = 32;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.TextIcon;
            _fun0009_ip = 101; continue _fun0009;
 83:
            var1 = 31;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.TextLockIcon;
 101:
            var3 = _closure1_slot42;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var8.threadIconContainer;
            var1['style'] = var5;
            var6 = _closure1_slot42;
            var5 = {'size': 'lg', 'color': 'white'};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 29;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.GK18KC;
            var9 = var11.bind(var12)(var9);
            var5['accessibilityLabel'] = var9;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 216:
            var3 = _closure1_slot42;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var8.threadIconContainer;
            var1['style'] = var5;
            var7 = _closure1_slot42;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 30;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.ThreadIcon;
            var5 = {'size': 'lg', 'color': 'white'};
            var9 = 29;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.7Xm5QE;
            var9 = var11.bind(var12)(var9);
            var5['accessibilityLabel'] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 349:
            var3 = _closure1_slot42;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var8.forumPostIconContainer;
            var1['style'] = var5;
            var7 = _closure1_slot42;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 27;
            var5 = var12[var9];
            var6 = var13.bind(var4)(var5);
            var5 = {};
            var11 = 28;
            var11 = var12[var11];
            var11 = var13.bind(var4)(var11);
            var5['source'] = var11;
            var11 = _closure1_slot0;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.IconSizes;
            var9 = var9.LARGE;
            var5['size'] = var9;
            var8 = var8.forumPostIconColor;
            var8 = var8.color;
            var5['color'] = var8;
            var8 = 29;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.GbryDQ;
            var8 = var9.bind(var10)(var8);
            var5['accessibilityLabel'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot46 = var4;
    var4 = function ChatBeginningRowHeader(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var16 = var1.title;
            var10 = var1.subtitle;
            var15 = var1.isPrivate;
            var12 = var1.isThread;
            var17 = var1.isNSFW;
            var20 = var1.isForumPost;
            var2 = var1.subtitleLink;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot45;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 33;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var1 = var1.bind(var3)();
            var6 = null;
            var14 = var6 != var2;
            if(!var14) { _fun0010_ip = 105; continue _fun0010 }
 102:
            var14 = var1;
 105:
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var9 = _closure1_slot42;
            var8 = _closure1_slot46;
            var5 = {};
            var5['isNSFW'] = var17;
            var5['isPrivate'] = var15;
            var5['isThread'] = var12;
            var5['isForumPost'] = var20;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var15 = _closure1_slot42;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 34;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var18 = var11.title;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var19 = 8;
            if(!var20) { _fun0010_ip = 225; continue _fun0010 }
 223:
            var19 = 0;
 225:
            var18['marginBottom'] = var19;
            var17[1] = var18;
            var8['style'] = var17;
            var8['children'] = var16;
            var8 = var15.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0010_ip = 355; continue _fun0010 }
 260:
            var9 = _closure1_slot42;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var12 = undefined;
            if(!var14) { _fun0010_ip = 297; continue _fun0010 }
 293:
            var12 = 'link';
 297:
            var7['accessibilityRole'] = var12;
            var12 = undefined;
            if(!var14) { _fun0010_ip = 313; continue _fun0010 }
 306:
            var12 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openURL;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
 313:
            var7['onPress'] = var12;
            var11 = var11.subtitle;
            var7['style'] = var11;
            var11 = 'text-md/medium';
            var7['variant'] = var11;
            var11 = 'header-secondary';
            var7['color'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 355:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot47 = var4;
    var4 = function LinkManageButtons(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var5 = var1.canManageRoles;
            var6 = var1.canEdit;
            var7 = var1.isPrivate;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var8 = var1.theme;
            var1 = _closure1_slot45;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 36;
            var1 = var12[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var9 = _closure1_slot1;
            var1 = 26;
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.TEXT_LINK;
            var15 = var2.bind(var3)(var1, var8);
            var3 = _closure1_slot44;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = var14.ctaContainer;
            var1['style'] = var8;
            if(!var7) { _fun0011_ip = 135; continue _fun0011 }
 132:
            var7 = var5;
 135:
            if(!var7) { _fun0011_ip = 437; continue _fun0011 }
 141:
            var9 = _closure1_slot44;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 37;
            var5 = var22[var5];
            var5 = var21.bind(var4)(var5);
            var8 = var5.PressableOpacity;
            var5 = {};
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openAddMembersActionSheet;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPress'] = var12;
            var13 = var14.ctaButton;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var14.subtitle;
            var12[1] = var13;
            var5['style'] = var12;
            var16 = _closure1_slot42;
            var19 = _closure1_slot1;
            var17 = 27;
            var12 = var22[var17];
            var13 = var19.bind(var4)(var12);
            var12 = {};
            var18 = 39;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var12['source'] = var18;
            var17 = var22[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.IconSizes;
            var17 = var17.REFRESH_SMALL_16;
            var12['size'] = var17;
            var12['color'] = var15;
            var13 = var16.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var17 = _closure1_slot42;
            var13 = 34;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var19 = var14.ctaLabel;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var14.ctaAddRoles;
            var18[1] = var19;
            var13['style'] = var18;
            var18 = 29;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.dMJ3Y2;
            var18 = var19.bind(var20)(var18);
            var13['children'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var12[1] = var13;
            var5['children'] = var12;
            var7 = var9.bind(var4)(var8, var5);
 437:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0011_ip = 739; continue _fun0011 }
 451:
            var9 = _closure1_slot44;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 37;
            var7 = var18[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var12 = 'button';
            var7['accessibilityRole'] = var12;
            var10 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 40;
                var6 = var4[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.setSection;
                var5 = _closure1_slot29;
                var5 = var5.OVERVIEW;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var12 = var14.ctaButton;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = var14.subtitle;
            var10[1] = var12;
            var7['style'] = var10;
            var13 = _closure1_slot42;
            var20 = _closure1_slot1;
            var16 = 27;
            var10 = var18[var16];
            var12 = var20.bind(var4)(var10);
            var10 = {};
            var19 = 41;
            var19 = var18[var19];
            var19 = var20.bind(var4)(var19);
            var10['source'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.IconSizes;
            var16 = var16.REFRESH_SMALL_16;
            var10['size'] = var16;
            var10['color'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot42;
            var11 = 34;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var15 = var14.ctaLabel;
            var14 = new Array(1);
            var14[0] = var15;
            var11['style'] = var14;
            var14 = 29;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.GE1Tlp;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 739:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot48 = var4;
    var4 = function ChatBeginningRowThread(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot45;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 47;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var15 = var1.bind(var5)(var12);
            var2 = _closure1_slot0;
            var1 = 48;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.isPrivateGuildChannel;
            var14 = var1.bind(var4)(var12);
            var1 = 49;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useAppliedTags;
            var18 = var1.bind(var4)(var12);
            var1 = 42;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var9 = var1.firstMessage;
            var1 = var12.threadMetadata;
            var10 = null;
            var2 = var10 == var1;
            var1 = null;
            if(var2) { _fun0012_ip = 654; continue _fun0012 }
 171:
            var4 = _closure1_slot44;
            var3 = _closure1_slot43;
            var2 = {};
            var13 = _closure1_slot42;
            var7 = _closure1_slot47;
            var6 = {};
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 50;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.isChannelNSFW;
            var16 = var16.bind(var17)(var12);
            var6['isNSFW'] = var16;
            var6['title'] = var15;
            var6['isPrivate'] = var14;
            var14 = true;
            var6['isThread'] = var14;
            var14 = var12.isForumPost;
            var14 = var14.bind(var12)();
            var6['isForumPost'] = var14;
            var7 = var13.bind(var5)(var7, var6);
            var6 = new Array(4);
            var6[0] = var7;
            var7 = var12.isForumPost;
            var13 = var7.bind(var12)();
            var7 = null;
            if(!var13) { _fun0012_ip = 350; continue _fun0012 }
 287:
            var14 = var18.length;
            var13 = 0;
            var13 = var14 > var13;
            var7 = null;
            if(!var13) { _fun0012_ip = 350; continue _fun0012 }
 303:
            var15 = _closure1_slot42;
            var14 = _closure1_slot8;
            var13 = {};
            var16 = var11.tagContainer;
            var13['style'] = var16;
            var17 = var18.map;
            var16 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot42;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 51;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.AppliedForumTagPill;
                var2 = {};
                var2['tag'] = var1;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var7 = var15.bind(var5)(var14, var13);
 350:
            var6[1] = var7;
            var7 = var12.isForumPost;
            var7 = var7.bind(var12)();
            var7 = !var7;
            if(!var7) { _fun0012_ip = 500; continue _fun0012 }
 373:
            var15 = _closure1_slot42;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 34;
            var13 = var21[var13];
            var13 = var17.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var16 = var11.threadDetails;
            var13['style'] = var16;
            var16 = 29;
            var18 = var21[var16];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.format;
            var16 = var21[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.imPXd3;
            var16 = {};
            var20 = function usernameHook(arg1, arg2) {
                var5 = _closure1_slot42;
                var4 = _closure1_slot57;
                var3 = {};
                var1 = _closure2_slot0;
                var2 = var1.ownerId;
                var3['userId'] = var2;
                var1 = var1.guild_id;
                var3['guildId'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var16['usernameHook'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var13['children'] = var16;
            var7 = var15.bind(var5)(var14, var13);
 500:
            var6[2] = var7;
            var7 = var12.isForumPost;
            var12 = var7.bind(var12)();
            var7 = null;
            if(!var12) { _fun0012_ip = 640; continue _fun0012 }
 519:
            var9 = var10 == var9;
            var7 = null;
            if(!var9) { _fun0012_ip = 640; continue _fun0012 }
 528:
            var10 = _closure1_slot42;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 34;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var11 = var11.threadDetails;
            var8['style'] = var11;
            var11 = 29;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.mE3KJC;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 640:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 654:
            return var1;
        }
    };
    var _closure1_slot49 = var4;
    var4 = function ChatBeginningRowGuildNonDefaultChannel(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var13 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 47;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var13.bind(var4)(var2);
            var2 = true;
            var9 = var3.bind(var4)(var11, var2);
            var5 = _closure1_slot22;
            var8 = var5.can;
            var2 = _closure1_slot34;
            var3 = var2.MANAGE_CHANNELS;
            var8 = var8.bind(var5)(var3, var11);
            var12 = var5.can;
            var3 = var2.MANAGE_ROLES;
            var15 = var12.bind(var5)(var3, var11);
            var3 = var5.can;
            var2 = var2.READ_MESSAGE_HISTORY;
            var3 = var3.bind(var5)(var2, var11);
            var2 = _closure1_slot0;
            var5 = 48;
            var5 = var1[var5];
            var12 = var2.bind(var4)(var5);
            var5 = var12.isPrivateGuildChannel;
            var12 = var5.bind(var12)(var11);
            var5 = 52;
            var5 = var1[var5];
            var5 = var13.bind(var4)(var5);
            var14 = var5.bind(var4)();
            var17 = 29;
            var5 = var1[var17];
            var5 = var2.bind(var4)(var5);
            var13 = var5.intl;
            var5 = var13.formatToPlainString;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.q0tgLS;
            var1 = {};
            var1['channelName'] = var9;
            var16 = var5.bind(var13)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var17];
            var5 = var2.bind(var4)(var5);
            var5 = var5.intl;
            if(var12) { _fun0013_ip = 331; continue _fun0013 }
 239:
            if(var3) { _fun0013_ip = 289; continue _fun0013 }
 242:
            var18 = var5.format;
            var3 = var1[var17];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var13 = var3.hPVEQE;
            var3 = {};
            var19 = var11.name;
            var3['channelName'] = var19;
            var13 = var18.bind(var5)(var13, var3);
            _fun0013_ip = 329; continue _fun0013;
 289:
            var19 = var5.formatToPlainString;
            var3 = var1[var17];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var18 = var3.JHKUGB;
            var3 = {};
            var3['channelName'] = var9;
            var13 = var19.bind(var5)(var18, var3);
 329:
            _fun0013_ip = 385; continue _fun0013;
 331:
            var3 = var5.format;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.QuwqjI;
            var1 = {};
            var1['channelName'] = var9;
            var6 = function topicHook() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 53;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.parseTopic;
                var1 = _closure2_slot0;
                var3 = var1.topic;
                var2 = {};
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = true;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var1['topicHook'] = var6;
            var13 = var3.bind(var5)(var2, var1);
 385:
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var9 = _closure1_slot42;
            var6 = _closure1_slot47;
            var5 = {};
            var5['title'] = var16;
            var5['subtitle'] = var13;
            var5['isPrivate'] = var12;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot42;
            var9 = _closure1_slot48;
            var6 = {};
            var6['canManageRoles'] = var15;
            var6['canEdit'] = var8;
            var6['isPrivate'] = var12;
            var6['channel'] = var11;
            var6['theme'] = var14;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = null;
            if(!var12) { _fun0013_ip = 526; continue _fun0013 }
 481:
            var6 = null;
            if(!var8) { _fun0013_ip = 526; continue _fun0013 }
 486:
            var9 = _closure1_slot42;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 54;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channel'] = var11;
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 526:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot50 = var4;
    var4 = function ChatBeginningRowGuild(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var7 = var2.guild;
            var _closure2_slot0 = var7;
            var6 = var2.channel;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 42;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var4 = var8.useStateFromStores;
            var9 = _closure1_slot19;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot19;
                var2 = var3.getDefaultChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var8)(var3, var1);
            var8 = _closure1_slot22;
            var4 = var8.can;
            var3 = _closure1_slot34;
            var3 = var3.READ_MESSAGE_HISTORY;
            var3 = var4.bind(var8)(var3, var6);
            if(!var3) { _fun0014_ip = 128; continue _fun0014 }
 103:
            var3 = null;
            var4 = var3 == var1;
            var3 = undefined;
            if(var4) { _fun0014_ip = 119; continue _fun0014 }
 114:
            var3 = var1.id;
 119:
            var1 = var6.id;
            if(!(var3 !== var1)) { _fun0014_ip = 154; continue _fun0014 }
 128:
            var4 = _closure1_slot42;
            var3 = _closure1_slot50;
            var1 = {};
            var1['guild'] = var7;
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0014_ip = 178; continue _fun0014;
 154:
            var4 = _closure1_slot42;
            var3 = _closure1_slot52;
            var2 = {};
            var2['guild'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 178:
            return var1;
        }
    };
    var _closure1_slot51 = var4;
    var4 = function ChatBeginningRowGuildDefaultChannel(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var18 = var1.channel;
            var _closure2_slot1 = var18;
            var1 = var10.id;
            var _closure2_slot2 = var1;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 55;
            var2 = var13[var1];
            var4 = undefined;
            var3 = var12.bind(var4)(var2);
            var2 = var3.useCompletedStates;
            var2 = var2.bind(var3)(var10);
            var15 = var2.guildPopulated;
            var17 = var2.guildPersonalized;
            var1 = var13[var1];
            var2 = var12.bind(var4)(var1);
            var1 = var2.usePermissions;
            var1 = var1.bind(var2)(var18, var10);
            var2 = var1.canInvite;
            var3 = var1.canManageGuild;
            var5 = 42;
            var1 = var13[var5];
            var9 = var12.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot25;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var9)(var6, var1);
            var6 = _closure1_slot1;
            var1 = 56;
            var1 = var13[var1];
            var14 = var6.bind(var4)(var1);
            var8 = null;
            var11 = var8 != var9;
            var1 = 'ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined';
            var1 = var14.bind(var4)(var11, var1);
            var1 = _closure1_slot15;
            var9 = var1.bind(var4)(var10, var9);
            var1 = 57;
            var1 = var13[var1];
            var11 = var6.bind(var4)(var1);
            var6 = var11.extractTimestamp;
            var1 = var10.id;
            var11 = var6.bind(var11)(var1);
            var1 = global;
            var14 = var1.Date;
            var6 = var14.now;
            var14 = var6.bind(var14)();
            var6 = _closure1_slot37;
            var6 = var14 - var6;
            var14 = var11 < var6;
            var6 = 48;
            var6 = var13[var6];
            var11 = var12.bind(var4)(var6);
            var6 = var11.isPrivateGuildChannel;
            var11 = var6.bind(var11)(var18);
            var6 = 58;
            var6 = var13[var6];
            var18 = var12.bind(var4)(var6);
            var6 = var18.useIsEligibleForGuildProgress;
            var6 = var6.bind(var18)(var10);
            var5 = var13[var5];
            var18 = var12.bind(var4)(var5);
            var13 = var18.useStateFromStoresObject;
            var5 = _closure1_slot12;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getErrors;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var13.bind(var18)(var12, var5);
            var _closure2_slot3 = var5;
            var18 = _closure1_slot5;
            var13 = var18.useLayoutEffect;
            var5 = var5.message;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.message;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 63; continue _fun0016 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 59;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.presentError;
                    var1 = _closure2_slot3;
                    var1 = var1.message;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var18)(var5, var12);
            var12 = undefined;
            if(!var3) { _fun0015_ip = 543; continue _fun0015 }
 390:
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0017_ip = 178; continue _fun0017 }
 10:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var8 = 60;
                            var2 = var6[var8];
                            var3 = undefined;
                            var10 = var5.bind(var3)(var2);
                            var9 = var10.init;
                            var2 = _closure2_slot2;
                            var2 = var9.bind(var10)(var2);
                            var2 = 61;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.openImagePicker;
                            var2 = {};
                            var9 = _closure1_slot36;
                            var2['size'] = var9;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=90);
 88:
                            return var2;
 90:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0017_ip = 175; continue _fun0017 }
 96:
                            var11 = var2.base64;
                            var5 = null;
                            if(!(var5 != var11)) { _fun0017_ip = 172; continue _fun0017 }
 108:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var9 = var5[var8];
                            var10 = var6.bind(var3)(var9);
                            var9 = var10.updateIcon;
                            var7 = _closure2_slot2;
                            var9 = var9.bind(var10)(var7, var11);
                            var5 = var5[var8];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.open;
                            var4 = _closure1_slot31;
                            var4 = var4.LANDING;
                            var4 = var5.bind(var6)(var7, var4);
 172:
                            return var3;
 175:
                            return var2;
 178:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var18 = var3.bind(var4)();
            var13 = _closure1_slot42;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 62;
            var3 = var22[var3];
            var5 = var19.bind(var4)(var3);
            var3 = {};
            var3['onPress'] = var18;
            var18 = 63;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var3['source'] = var18;
            var21 = _closure1_slot0;
            var18 = 29;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.Yhi9/P;
            var18 = var19.bind(var20)(var18);
            var3['title'] = var18;
            var3['isCompleted'] = var17;
            var17 = _closure1_slot40;
            var17 = var17.CHANNEL_WELCOME;
            var3['analyticsSetupType'] = var17;
            var17 = _closure1_slot39;
            var17 = var17.PERSONALIZE_SERVER;
            var3['analyticsAction'] = var17;
            var12 = var13.bind(var4)(var5, var3);
 543:
            var13 = undefined;
            if(!var2) { _fun0015_ip = 700; continue _fun0015 }
 551:
            var5 = _closure1_slot42;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 62;
            var2 = var20[var2];
            var3 = var17.bind(var4)(var2);
            var2 = {};
            var16 = function onPress() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.vanityURLCode;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0018_ip = 68; continue _fun0018 }
 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 64;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.showInstantInviteActionSheet;
                    var3 = _closure2_slot1;
                    var2 = 'Welcome Message';
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0018_ip = 120; continue _fun0018;
 68:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 64;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.showVanityUrlInviteActionSheet;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = 'Welcome Message';
                    var1 = var4.bind(var5)(var3, var2, var1);
 120:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var16;
            var16 = 65;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var2['source'] = var16;
            var19 = _closure1_slot0;
            var16 = 29;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.q9n0TU;
            var16 = var17.bind(var18)(var16);
            var2['title'] = var16;
            var2['isCompleted'] = var15;
            var15 = _closure1_slot40;
            var15 = var15.CHANNEL_WELCOME;
            var2['analyticsSetupType'] = var15;
            var15 = _closure1_slot39;
            var15 = var15.INVITE;
            var2['analyticsAction'] = var15;
            var13 = var5.bind(var4)(var3, var2);
 700:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var21 = 29;
            var3 = var2[var21];
            var3 = var15.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var21];
            var2 = var15.bind(var4)(var2);
            var2 = var2.t;
            if(var14) { _fun0015_ip = 780; continue _fun0015 }
 747:
            if(var9) { _fun0015_ip = 765; continue _fun0015 }
 750:
            var9 = var2.ezm+/v;
            var9 = var3.bind(var5)(var9);
            _fun0015_ip = 778; continue _fun0015;
 765:
            var14 = var2.1ach9P;
            var9 = var3.bind(var5)(var14);
 778:
            _fun0015_ip = 793; continue _fun0015;
 780:
            var2 = var2.gwyU/P;
            var9 = var3.bind(var5)(var2);
 793:
            var15 = !var6;
            if(!var15) { _fun0015_ip = 813; continue _fun0015 }
 799:
            var2 = var8 != var13;
            if(var2) { _fun0015_ip = 810; continue _fun0015 }
 806:
            var2 = var8 != var12;
 810:
            var15 = var2;
 813:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 66;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getArticleURL;
            var2 = _closure1_slot32;
            var2 = var2.GUILD_GETTING_STARTED;
            var5 = var3.bind(var5)(var2);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm';
            var14 = var3.bind(var2)(var5, var1);
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var9;
            var8 = null;
            if(!var15) { _fun0015_ip = 1000; continue _fun0015 }
 904:
            var17 = _closure1_slot44;
            var16 = _closure1_slot43;
            var9 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = var18[var21];
            var20 = var19.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.format;
            var18 = var18[var21];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.UOtD39;
            var18 = {};
            var18['guideURL'] = var14;
            var19 = var20.bind(var22)(var19, var18);
            var18 = [' '];
            var18[1] = var19;
            var9['children'] = var18;
            var8 = var17.bind(var4)(var16, var9);
 1000:
            var5[1] = var8;
            var1['children'] = var5;
            var16 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot44;
            var1 = _closure1_slot5;
            var2 = var1.Fragment;
            var1 = {};
            var9 = _closure1_slot42;
            var8 = _closure1_slot47;
            var5 = {};
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var21];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var17[var21];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.j59F/f;
            var17 = {};
            var21 = var10.name;
            var17['guildName'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var5['title'] = var17;
            var5['subtitle'] = var16;
            var5['isPrivate'] = var11;
            var11 = undefined;
            if(!var15) { _fun0015_ip = 1129; continue _fun0015 }
 1126:
            var11 = var14;
 1129:
            var5['subtitleLink'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(var6) { _fun0015_ip = 1185; continue _fun0015 }
 1151:
            var9 = _closure1_slot44;
            var8 = _closure1_slot43;
            var6 = {};
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0015_ip = 1221; continue _fun0015;
 1185:
            var9 = _closure1_slot42;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 67;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1221:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot52 = var4;
    var4 = function ChatBeginningRowDM(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var14 = var1.channel;
            var _closure2_slot0 = var14;
            var12 = var1.showingSpamBanner;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot45;
            var18 = var1.bind(var5)();
            var _closure2_slot1 = var18;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 88;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var6 = _closure1_slot0;
            var2 = 42;
            var1 = var4[var2];
            var8 = var6.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot25;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot25;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var7.bind(var8)(var6, var1);
            var _closure2_slot3 = var13;
            var1 = 89;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var13;
            var3 = undefined;
            if(var6) { _fun0019_ip = 169; continue _fun0019 }
 164:
            var3 = var13.id;
 169:
            if(!(var1 == var3)) { _fun0019_ip = 177; continue _fun0019 }
 173:
            var3 = _closure1_slot30;
 177:
            var20 = var4.bind(var5)(var3);
            _closure2_slot4 = var20;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = var7[var2];
            var11 = var4.bind(var5)(var3);
            var8 = var11.useStateFromStoresObject;
            var3 = _closure1_slot16;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot16;
                    var4 = var5.getNewestTokenForApplication;
                    var7 = _closure2_slot4;
                    var3 = null;
                    var7 = var3 == var7;
                    var3 = undefined;
                    if(var7) { _fun0020_ip = 42; continue _fun0020 }
 33:
                    var6 = _closure2_slot4;
                    var3 = var6.id;
 42:
                    var3 = var4.bind(var5)(var3);
                    var1['authorizedAppToken'] = var3;
                    var3 = _closure1_slot16;
                    var2 = var3.getFetchState;
                    var2 = var2.bind(var3)();
                    var1['authorizedAppsFetchState'] = var2;
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var6, var3);
            var8 = var3.authorizedAppToken;
            var3 = var3.authorizedAppsFetchState;
            _closure2_slot5 = var3;
            var2 = var7[var2];
            var15 = var4.bind(var5)(var2);
            var11 = var15.useStateFromStores;
            var2 = _closure1_slot13;
            var6 = new Array(1);
            var6[0] = var2;
            var4 = new Array(1);
            var4[0] = var13;
            var2 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0021_ip = 43; continue _fun0021 }
 16:
                    var4 = _closure1_slot13;
                    var3 = var4.getMutualGuilds;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var2 = var11.bind(var15)(var6, var2, var4);
            _closure2_slot6 = var2;
            var2 = var14.isSystemDM;
            var2 = var2.bind(var14)();
            var6 = _closure1_slot1;
            var4 = 90;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useExperiment;
            var4 = {};
            var11 = 'EmptyMessages';
            var4['location'] = var11;
            var4 = var6.bind(var7)(var4);
            var11 = var4.enabledMobile;
            var7 = _closure1_slot5;
            var15 = var7.useEffect;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var14;
            var4 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var2 = _closure2_slot3;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0022_ip = 101; continue _fun0022 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 91;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var7 = _closure2_slot3;
                    var3 = var7.id;
                    var6 = var7.getAvatarURL;
                    var2 = _closure2_slot0;
                    var8 = var8 == var2;
                    var2 = undefined;
                    if(var8) { _fun0022_ip = 75; continue _fun0022 }
 66:
                    var1 = _closure2_slot0;
                    var2 = var1.guild_id;
 75:
                    var1 = 80;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {'withMutualGuilds': true, 'dispatchWait': true};
                    var1 = var4.bind(var5)(var3, var2, var1);
 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var15.bind(var7)(var4, var6);
            var6 = var7.useEffect;
            var4 = var1 == var13;
            var15 = undefined;
            if(var4) { _fun0019_ip = 411; continue _fun0019 }
 405:
            var15 = var13.bot;
 411:
            var4 = new Array(3);
            var4[0] = var15;
            var4[1] = var8;
            var4[2] = var3;
            var3 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0023_ip = 26; continue _fun0023 }
 16:
                    var3 = _closure2_slot3;
                    var1 = var3.bot;
 26:
                    if(!var1) { _fun0023_ip = 50; continue _fun0023 }
 29:
                    var3 = _closure2_slot5;
                    var2 = _closure1_slot17;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
 50:
                    if(!var1) { _fun0023_ip = 88; continue _fun0023 }
 53:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 76;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var1 != var13)) { _fun0019_ip = 1682; continue _fun0019 }
 447:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 43;
            var7 = var3[var4];
            var16 = var6.bind(var5)(var7);
            var15 = var16.getUserTag;
            var7 = {'decoration': 'never', 'identifiable': 'always'};
            var24 = var15.bind(var16)(var13, var7);
            _closure2_slot7 = var24;
            var4 = var3[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getName;
            var28 = var4.bind(var6)(var13);
            var25 = function handleCopyUserTag() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 92;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot7;
                var2 = var5.bind(var6)(var2);
                var2 = 59;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = _closure1_slot0;
            var23 = 29;
            var4 = var3[var23];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var3[var23];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.Rzvnio;
            var17 = var4.bind(var6)(var3);
            if(var2) { _fun0019_ip = 641; continue _fun0019 }
 580:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var23];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var23];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.Q56TRE;
            var2 = {};
            var2['username'] = var28;
            var17 = var4.bind(var6)(var3, var2);
 641:
            var2 = function handleOpenMutualGuilds() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 84;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 86;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 93;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot3;
                var3['user'] = var2;
                var2 = function onPressMutualGuild(arg1) {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 94;
                    var3 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.trackUserProfileAction;
                    var3 = {};
                    var8 = 'PRESS_MUTUAL_GUILD';
                    var3['action'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = 95;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.transitionToGuild;
                    var3 = arg1;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var3 = 84;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var3 = 96;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot41;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3['onPressMutualGuild'] = var2;
                var2 = 'MutualGuildsActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            _closure2_slot8 = var2;
            var2 = var1 != var14;
            if(!var2) { _fun0019_ip = 663; continue _fun0019 }
 659:
            var2 = var1 != var20;
 663:
            if(!var2) { _fun0019_ip = 670; continue _fun0019 }
 666:
            var2 = var1 != var8;
 670:
            var7 = undefined;
            if(!var2) { _fun0019_ip = 921; continue _fun0019 }
 678:
            var4 = _closure1_slot44;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var18.appDMButtonContainer;
            var2['style'] = var6;
            var16 = _closure1_slot42;
            var15 = _closure1_slot60;
            var6 = {};
            var6['user'] = var13;
            var6['channel'] = var14;
            var15 = var16.bind(var5)(var15, var6);
            var6 = new Array(3);
            var6[0] = var15;
            var19 = _closure1_slot42;
            var16 = _closure1_slot59;
            var15 = {};
            var15['user'] = var13;
            var15['application'] = var20;
            var15['channel'] = var14;
            var15['oauth2Token'] = var8;
            var15 = var19.bind(var5)(var16, var15);
            var6[1] = var15;
            if(!var11) { _fun0019_ip = 907; continue _fun0019 }
 773:
            var19 = _closure1_slot42;
            var16 = _closure1_slot58;
            var15 = {};
            var15['channel'] = var14;
            var15['user'] = var13;
            var15['showingSpamBanner'] = var12;
            var22 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 68;
            var21 = var20[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.Colors;
            var21 = var21.GREY;
            var15['color'] = var21;
            var26 = _closure1_slot0;
            var21 = var20[var23];
            var21 = var26.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var23];
            var20 = var26.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.+78Pfn;
            var20 = var21.bind(var22)(var20);
            var15['text'] = var20;
            var20 = var18.spamButtonNoPadding;
            var15['style'] = var20;
            var20 = true;
            var15['renderIcon'] = var20;
            var11 = var19.bind(var5)(var16, var15);
 907:
            var6[2] = var11;
            var2['children'] = var6;
            var7 = var4.bind(var5)(var3, var2);
 921:
            var4 = _closure1_slot44;
            var3 = _closure1_slot43;
            var2 = {};
            var16 = _closure1_slot42;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 37;
            var6 = var21[var15];
            var6 = var22.bind(var5)(var6);
            var11 = var6.PressableOpacity;
            var6 = {};
            var26 = 'button';
            var6['accessibilityRole'] = var26;
            var19 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 97;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot3;
                var5 = var5.id;
                var2['userId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var4 = _closure2_slot2;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onPress'] = var19;
            var19 = var21[var23];
            var19 = var22.bind(var5)(var19);
            var27 = var19.intl;
            var20 = var27.string;
            var19 = var21[var23];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.iXAna2;
            var19 = var20.bind(var27)(var19);
            var6['accessibilityLabel'] = var19;
            var27 = _closure1_slot42;
            var20 = _closure1_slot1;
            var29 = 98;
            var19 = var21[var29];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var30 = var18.avatar;
            var19['style'] = var30;
            var19['user'] = var13;
            var30 = var14.guild_id;
            var19['guildId'] = var30;
            var29 = var21[var29];
            var29 = var22.bind(var5)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.XXLARGE;
            var19['size'] = var29;
            var29 = var13.avatarDecoration;
            var19['avatarDecoration'] = var29;
            var19 = var27.bind(var5)(var20, var19);
            var6['children'] = var19;
            var11 = var16.bind(var5)(var11, var6);
            var6 = new Array(9);
            var6[0] = var11;
            var20 = _closure1_slot42;
            var11 = var21[var15];
            var11 = var22.bind(var5)(var11);
            var16 = var11.PressableOpacity;
            var11 = {};
            var11['accessibilityRole'] = var26;
            var11['onPress'] = var25;
            var19 = var21[var23];
            var19 = var22.bind(var5)(var19);
            var29 = var19.intl;
            var27 = var29.string;
            var19 = var21[var23];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.y5MwJy;
            var19 = var27.bind(var29)(var19);
            var11['accessibilityHint'] = var19;
            var27 = _closure1_slot42;
            var19 = 34;
            var21 = var21[var19];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'heading-xxl/extrabold', 'color': 'header-primary'};
            var21['children'] = var28;
            var21 = var27.bind(var5)(var22, var21);
            var11['children'] = var21;
            var11 = var20.bind(var5)(var16, var11);
            var6[1] = var11;
            var11 = var13.isProvisional;
            var11 = !var11;
            if(!var11) { _fun0019_ip = 1425; continue _fun0019 }
 1287:
            var20 = _closure1_slot42;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var15];
            var15 = var22.bind(var5)(var15);
            var16 = var15.PressableOpacity;
            var15 = {};
            var15['accessibilityRole'] = var26;
            var15['onPress'] = var25;
            var25 = var21[var23];
            var25 = var22.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var23 = var21[var23];
            var23 = var22.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.y5MwJy;
            var23 = var25.bind(var26)(var23);
            var15['accessibilityHint'] = var23;
            var23 = _closure1_slot42;
            var21 = var21[var19];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'heading-lg/medium', 'color': 'header-secondary'};
            var21['children'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var15['children'] = var21;
            var11 = var20.bind(var5)(var16, var15);
 1425:
            var6[2] = var11;
            var16 = _closure1_slot42;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var15.bind(var5)(var11);
            var15 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var19 = var18.dmBeginningMessage;
            var11['style'] = var19;
            var11['children'] = var17;
            var11 = var16.bind(var5)(var15, var11);
            var6[3] = var11;
            var11 = var13.isProvisional;
            if(!var11) { _fun0019_ip = 1569; continue _fun0019 }
 1504:
            var17 = _closure1_slot42;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 99;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.ChatProvisionalAccountExplainerCard;
            var15 = {};
            var18 = var18.provisionalAccountExplainer;
            var15['style'] = var18;
            var18 = var13.id;
            var15['userId'] = var18;
            var18 = 14;
            var15['iconSize'] = var18;
            var11 = var17.bind(var5)(var16, var15);
 1569:
            var6[4] = var11;
            var11 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0024_ip = 383; continue _fun0024 }
 18:
                    var1 = _closure2_slot6;
                    var2 = var1.length;
                    var1 = 1;
                    if(!(!(var2 < var1))) { _fun0024_ip = 383; continue _fun0024 }
 37:
                    var1 = _closure2_slot6;
                    var13 = var1.length;
                    var4 = _closure2_slot6;
                    var3 = var4.slice;
                    var2 = 5;
                    var1 = var13 > var2;
                    if(!var1) { _fun0024_ip = 68; continue _fun0024 }
 65:
                    var2 = 4;
 68:
                    var1 = 0;
                    var15 = var3.bind(var4)(var1, var2);
                    var4 = _closure1_slot44;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 37;
                    var1 = var14[var1];
                    var3 = undefined;
                    var1 = var10.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var7 = 'button';
                    var1['accessibilityRole'] = var7;
                    var7 = _closure2_slot8;
                    var1['onPress'] = var7;
                    var9 = _closure2_slot1;
                    var5 = var9.mutualGuildsContainer;
                    var1['style'] = var5;
                    var8 = _closure1_slot42;
                    var5 = 100;
                    var5 = var14[var5];
                    var5 = var10.bind(var3)(var5);
                    var7 = var5.GuildIconPile;
                    var5 = {};
                    var12 = 101;
                    var12 = var14[var12];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.GuildIconSizes;
                    var12 = var12.SMALL;
                    var5['size'] = var12;
                    var16 = var15.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        var1 = var1.name;
                        return var1;
                    };
                    var12 = var16.bind(var15)(var12);
                    var5['names'] = var12;
                    var5['totalCount'] = var13;
                    var12 = var15.map;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        var5 = _closure1_slot42;
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 101;
                        var2 = var8[var6];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['guild'] = var1;
                        var7 = _closure1_slot0;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.GuildIconSizes;
                        var6 = var6.SMALL;
                        var2['size'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var11 = var12.bind(var15)(var11);
                    var5['children'] = var11;
                    var7 = var8.bind(var3)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot42;
                    var6 = 34;
                    var6 = var14[var6];
                    var6 = var10.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var9 = var9.mutualGuildsLabel;
                    var6['style'] = var9;
                    var9 = 29;
                    var11 = var14[var9];
                    var11 = var10.bind(var3)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var14[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.t;
                    var10 = var9.eE3oen;
                    var9 = {};
                    var9['count'] = var13;
                    var9 = var11.bind(var12)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 383:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var11.bind(var5)();
            var6[5] = var11;
            var15 = _closure1_slot42;
            var11 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 42;
                    var1 = var3[var1];
                    var4 = undefined;
                    var5 = var2.bind(var4)(var1);
                    var3 = var5.useStateFromStores;
                    var1 = _closure1_slot23;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() {
                        var3 = _closure1_slot23;
                        var2 = var3.getRelationshipType;
                        var1 = _closure2_slot3;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var5)(var2, var1);
                    var _closure3_slot0 = var2;
                    var9 = function handleAddFriend() {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = _closure1_slot35;
                            var1 = var1.PENDING_INCOMING;
                            if(!(var2 === var1)) { _fun0026_ip = 91; continue _fun0026 }
 24:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 103;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.maybeConfirmFriendRequestAccept;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var4 = var4.id;
                            var1['userId'] = var4;
                            var4 = _closure1_slot27;
                            var4 = var4.DM_CHANNEL;
                            var1['location'] = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun0026_ip = 162; continue _fun0026;
 91:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 102;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.addRelationship;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var4 = var4.id;
                            var1['userId'] = var4;
                            var4 = {};
                            var5 = _closure1_slot27;
                            var5 = var5.DM_CHANNEL;
                            var4['location'] = var5;
                            var1['context'] = var4;
                            var1 = var2.bind(var3)(var1);
 162:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = _closure1_slot35;
                    var1 = var1.FRIEND;
                    if(!(var2 !== var1)) { _fun0025_ip = 899; continue _fun0025 }
 85:
                    var1 = _closure2_slot3;
                    var1 = var1.bot;
                    if(var1) { _fun0025_ip = 899; continue _fun0025 }
 104:
                    var1 = _closure1_slot35;
                    var1 = var1.NONE;
                    if(!(var1 !== var2)) { _fun0025_ip = 690; continue _fun0025 }
 121:
                    var1 = _closure1_slot35;
                    var1 = var1.PENDING_INCOMING;
                    if(!(var1 !== var2)) { _fun0025_ip = 347; continue _fun0025 }
 138:
                    var1 = _closure1_slot35;
                    var1 = var1.PENDING_OUTGOING;
                    if(!(var1 !== var2)) { _fun0025_ip = 156; continue _fun0025 }
 152:
                    var1 = null;
                    return var1;
 156:
                    var3 = _closure1_slot42;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var15 = _closure2_slot1;
                    var5 = var15.buttonContainer;
                    var1['style'] = var5;
                    var7 = _closure1_slot42;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 68;
                    var5 = var12[var8];
                    var6 = var11.bind(var4)(var5);
                    var5 = {};
                    var15 = var15.spamButton;
                    var5['style'] = var15;
                    var18 = _closure1_slot0;
                    var15 = 29;
                    var16 = var12[var15];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var12[var15];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.xMH6vL;
                    var15 = var16.bind(var17)(var15);
                    var5['text'] = var15;
                    var15 = var12[var8];
                    var15 = var11.bind(var4)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.XSMALL;
                    var5['size'] = var15;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.Colors;
                    var8 = var8.GREEN;
                    var5['color'] = var8;
                    var8 = true;
                    var5['disabled'] = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 347:
                    var3 = _closure1_slot44;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var17 = _closure2_slot1;
                    var5 = var17.buttonContainer;
                    var1['style'] = var5;
                    var7 = _closure1_slot42;
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 68;
                    var5 = var15[var11];
                    var6 = var12.bind(var4)(var5);
                    var5 = {};
                    var8 = var17.spamButton;
                    var5['style'] = var8;
                    var19 = _closure1_slot0;
                    var16 = 29;
                    var8 = var15[var16];
                    var8 = var19.bind(var4)(var8);
                    var20 = var8.intl;
                    var18 = var20.string;
                    var8 = var15[var16];
                    var8 = var19.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.+WbSn5;
                    var8 = var18.bind(var20)(var8);
                    var5['text'] = var8;
                    var8 = var15[var11];
                    var8 = var12.bind(var4)(var8);
                    var8 = var8.Sizes;
                    var8 = var8.XSMALL;
                    var5['size'] = var8;
                    var8 = var15[var11];
                    var8 = var12.bind(var4)(var8);
                    var8 = var8.Colors;
                    var8 = var8.GREEN;
                    var5['color'] = var8;
                    var5['onPress'] = var9;
                    var6 = var7.bind(var4)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot42;
                    var6 = var15[var11];
                    var7 = var12.bind(var4)(var6);
                    var6 = {};
                    var17 = var17.spamButton;
                    var6['style'] = var17;
                    var17 = var15[var16];
                    var17 = var19.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var15[var16];
                    var16 = var19.bind(var4)(var16);
                    var16 = var16.t;
                    var16 = var16.rQSndn;
                    var16 = var17.bind(var18)(var16);
                    var6['text'] = var16;
                    var16 = var15[var11];
                    var16 = var12.bind(var4)(var16);
                    var16 = var16.Sizes;
                    var16 = var16.XSMALL;
                    var6['size'] = var16;
                    var11 = var15[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.Colors;
                    var11 = var11.PRIMARY;
                    var6['color'] = var11;
                    var10 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 102;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.cancelFriendRequest;
                        var2 = _closure2_slot3;
                        var3 = var2.id;
                        var2 = {};
                        var6 = _closure1_slot27;
                        var6 = var6.DM_CHANNEL;
                        var2['location'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6['onPress'] = var10;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 690:
                    var3 = _closure1_slot42;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.buttonContainer;
                    var1['style'] = var5;
                    var5 = _closure2_slot3;
                    var6 = var5.bot;
                    var5 = null;
                    if(var6) { _fun0025_ip = 887; continue _fun0025 }
 732:
                    var8 = _closure1_slot42;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 68;
                    var6 = var12[var10];
                    var7 = var11.bind(var4)(var6);
                    var6 = {};
                    var14 = _closure2_slot1;
                    var14 = var14.spamButton;
                    var6['style'] = var14;
                    var16 = _closure1_slot0;
                    var13 = 29;
                    var14 = var12[var13];
                    var14 = var16.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var12[var13];
                    var13 = var16.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.PMsq/f;
                    var13 = var14.bind(var15)(var13);
                    var6['text'] = var13;
                    var13 = var12[var10];
                    var13 = var11.bind(var4)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.XSMALL;
                    var6['size'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.Colors;
                    var10 = var10.GREEN;
                    var6['color'] = var10;
                    var6['onPress'] = var9;
                    var5 = var8.bind(var4)(var7, var6);
 887:
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 899:
                    var1 = null;
                    return var1;
                }
            };
            var10 = {};
            var10 = var15.bind(var5)(var11, var10);
            var6[6] = var10;
            var8 = var1 == var8;
            if(!var8) { _fun0019_ip = 1630; continue _fun0019 }
 1618:
            var11 = var13.bot;
            var10 = true;
            var8 = var10 !== var11;
 1630:
            if(!var8) { _fun0019_ip = 1662; continue _fun0019 }
 1633:
            var11 = _closure1_slot42;
            var10 = _closure1_slot58;
            var9 = {};
            var9['channel'] = var14;
            var9['user'] = var13;
            var9['showingSpamBanner'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 1662:
            var6[7] = var8;
            var6[8] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1682:
            return var1;
        }
    };
    var _closure1_slot53 = var4;
    var4 = function ChatBeginningRowSystemDM(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var15 = var1.channel;
            var12 = var1.showingSpamBanner;
            var1 = _closure1_slot45;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 52;
            var1 = var17[var1];
            var1 = var13.bind(var4)(var1);
            var16 = var1.bind(var4)();
            var3 = _closure1_slot44;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var9.systemDMContainer;
            var1['style'] = var5;
            var7 = _closure1_slot42;
            var6 = _closure1_slot8;
            var5 = {};
            var8 = var9.systemDMHeaderContainer;
            var5['style'] = var8;
            var11 = _closure1_slot42;
            var10 = _closure1_slot53;
            var8 = {};
            var8['channel'] = var15;
            var8['showingSpamBanner'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot44;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var9.systemDMImages;
            var6['style'] = var9;
            var10 = _closure1_slot42;
            var12 = _closure1_slot7;
            var9 = {};
            var11 = 104;
            var11 = var17[var11];
            var11 = var13.bind(var4)(var11);
            var9['source'] = var11;
            var10 = var10.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var11 = _closure1_slot42;
            var10 = {};
            var15 = _closure1_slot0;
            var13 = 105;
            var13 = var17[var13];
            var15 = var15.bind(var4)(var13);
            var13 = var15.isThemeDark;
            var13 = var13.bind(var15)(var16);
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var13) { _fun0027_ip = 252; continue _fun0027 }
 238:
            var13 = 107;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            _fun0027_ip = 264; continue _fun0027;
 252:
            var14 = 106;
            var14 = var16[var14];
            var13 = var15.bind(var4)(var14);
 264:
            var10['source'] = var13;
            var10 = var11.bind(var4)(var12, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot54 = var4;
    var4 = function ChatBeginningRowButton(arg1) {
        var2 = arg1;
        var10 = var2.title;
        var9 = var2.subtitle;
        var15 = var2.IconComponent;
        var14 = var2.iconVariant;
        var1 = var2.style;
        var17 = var2.onPress;
        var8 = var2.trailing;
        var4 = _closure1_slot42;
        var3 = _closure1_slot8;
        var2 = {};
        var2['style'] = var1;
        var7 = _closure1_slot42;
        var12 = _closure1_slot0;
        var16 = _closure1_slot2;
        var11 = 108;
        var5 = var16[var11];
        var1 = undefined;
        var5 = var12.bind(var1)(var5);
        var6 = var5.RowButton;
        var5 = {};
        var5['onPress'] = var17;
        var13 = _closure1_slot42;
        var11 = var16[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.RowButton;
        var12 = var11.Icon;
        var11 = {};
        var11['IconComponent'] = var15;
        var11['variant'] = var14;
        var11 = var13.bind(var1)(var12, var11);
        var5['icon'] = var11;
        var5['label'] = var10;
        var5['subLabel'] = var9;
        var5['trailing'] = var8;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot55 = var4;
    var4 = function ChatBeginningRowGroupDM(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var2 = arg1;
            var15 = var2.channel;
            var _closure2_slot0 = var15;
            var2 = _closure1_slot45;
            var4 = undefined;
            var21 = var2.bind(var4)();
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 47;
            var2 = var6[var2];
            var2 = var9.bind(var4)(var2);
            var24 = var2.bind(var4)(var15);
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var11 = false;
            var7 = var2.bind(var5)(var11);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var7, var2);
            var2 = 0;
            var18 = var3[var2];
            var _closure2_slot1 = var18;
            var2 = 1;
            var13 = var3[var2];
            var _closure2_slot2 = var13;
            var8 = _closure1_slot0;
            var2 = 42;
            var2 = var6[var2];
            var10 = var8.bind(var4)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot23;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getRelationshipCount;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var23 = var7.bind(var10)(var3, var2);
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 109;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.navigateToNewGroupDM;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = _closure1_slot28;
                var2 = var2.CHANNEL_TEXT_AREA;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var7.bind(var5)(var2, var3);
            var _closure2_slot3 = var2;
            var10 = var5.useCallback;
            var7 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0029_ip = 174; continue _fun0029 }
 10:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0029_ip = 169; continue _fun0029 }
 23:
                        var4 = _closure2_slot2;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 110;
                        var2 = var7[var2];
                        var8 = var6.bind(var5)(var2);
                        var7 = var8.mobileCreateInvite;
                        var6 = _closure2_slot0;
                        var2 = _closure1_slot33;
                        var2 = var2.GROUP_DM;
                        var2 = var7.bind(var8)(var6, var2);
                        SaveGenerator(address=89);
 87:
                        return var2;
 89:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0029_ip = 166; continue _fun0029 }
 95:
                        var6 = null;
                        if(!(var6 != var2)) { _fun0029_ip = 153; continue _fun0029 }
 101:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 64;
                        var6 = var8[var6];
                        var9 = var7.bind(var5)(var6);
                        var8 = var9.handleCopy;
                        var12 = _closure2_slot0;
                        var4 = _closure1_slot33;
                        var11 = var4.GROUP_DM;
                        var10 = false;
                        var14 = var9;
                        var13 = var2;
                        var4 = var14[var8](var13, var12, var11, var10, var9);
 153:
                        var4 = _closure2_slot2;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        _fun0029_ip = 169; continue _fun0029;
 166:
                        return var2;
 169:
                        var2 = undefined;
                        return var2;
 174:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var7.bind(var4)(var3);
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var18;
            var3[2] = var13;
            var7 = var10.bind(var5)(var7, var3);
            var _closure2_slot4 = var7;
            var10 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 111;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_isDismissibleContentDismissed;
                    var3 = 112;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.GDM_INVITE_REMINDER;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0030_ip = 104; continue _fun0030 }
 63:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 113;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot3;
                    var2['onClick'] = var4;
                    var2 = var3.bind(var1)(var2);
                    _fun0030_ip = 115; continue _fun0030;
 104:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
 115:
                    return var1;
                }
            };
            var19 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 111;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_isDismissibleContentDismissed;
                    var3 = 112;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.GDM_INVITE_REMINDER;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0031_ip = 104; continue _fun0031 }
 63:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 113;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot4;
                    var2['onClick'] = var4;
                    var2 = var3.bind(var1)(var2);
                    _fun0031_ip = 115; continue _fun0031;
 104:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
 115:
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var2 = var15.id;
            var1 = 114;
            var1 = var6[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            var7 = var2 === var1;
            var3 = _closure1_slot44;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var21.centerHeader;
            var1['style'] = var5;
            var10 = _closure1_slot42;
            var5 = 115;
            var5 = var6[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var21.avatarRedesign;
            var5['style'] = var13;
            var5['channel'] = var15;
            var13 = 98;
            var13 = var6[var13];
            var13 = var8.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.XXLARGE;
            var5['size'] = var13;
            var5['accessible'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var9 = _closure1_slot42;
            var10 = 34;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {};
            var11 = var21.dmTitle;
            var6['style'] = var11;
            var11 = null;
            var14 = var11 != var24;
            var16 = 'heading-xxl/extrabold';
            var13 = var16;
            if(!var14) { _fun0028_ip = 478; continue _fun0028 }
 454:
            var20 = var24.length;
            var14 = 40;
            var14 = var20 > var14;
            var13 = var16;
            if(!var14) { _fun0028_ip = 478; continue _fun0028 }
 472:
            var13 = 'heading-lg/extrabold';
 478:
            var6['variant'] = var13;
            var13 = 'header-primary';
            var6['color'] = var13;
            var6['children'] = var24;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var9 = _closure1_slot42;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var10 = var21.gdmText;
            var6['style'] = var10;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var22 = 29;
            var10 = var13[var22];
            var10 = var14.bind(var4)(var10);
            var20 = var10.intl;
            if(var7) { _fun0028_ip = 620; continue _fun0028 }
 586:
            var16 = var20.string;
            var10 = var13[var22];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.0Q7uk5;
            var10 = var16.bind(var20)(var10);
            _fun0028_ip = 659; continue _fun0028;
 620:
            var16 = var20.format;
            var13 = var13[var22];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.MFwcqK;
            var13 = {};
            var13['name'] = var24;
            var10 = var16.bind(var20)(var14, var13);
 659:
            var6['children'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = null;
            if(var7) { _fun0028_ip = 1116; continue _fun0028 }
 681:
            var9 = _closure1_slot44;
            var8 = _closure1_slot43;
            var7 = {};
            var13 = null;
            if(!var23) { _fun0028_ip = 814; continue _fun0028 }
 696:
            var16 = _closure1_slot42;
            var14 = _closure1_slot55;
            var10 = {};
            var20 = var21.gdmInviteFriends;
            var10['style'] = var20;
            var10['onPress'] = var19;
            var25 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = 116;
            var20 = var19[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.GroupPlusIcon;
            var10['IconComponent'] = var20;
            var20 = 'blurple';
            var10['iconVariant'] = var20;
            var20 = var19[var22];
            var20 = var25.bind(var4)(var20);
            var24 = var20.intl;
            var20 = var24.string;
            var19 = var19[var22];
            var19 = var25.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.LR+Ptb;
            var19 = var20.bind(var24)(var19);
            var10['title'] = var19;
            var13 = var16.bind(var4)(var14, var10);
 814:
            var10 = new Array(3);
            var10[0] = var13;
            var16 = _closure1_slot42;
            var14 = _closure1_slot55;
            var13 = {};
            var20 = var21.gdmShareInviteLink;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = null;
            if(var23) { _fun0028_ip = 857; continue _fun0028 }
 851:
            var20 = var21.gdmShareInviteLinkNoRelationships;
 857:
            var19[1] = var20;
            var13['style'] = var19;
            var13['onPress'] = var17;
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 117;
            var19 = var17[var19];
            var19 = var21.bind(var4)(var19);
            var19 = var19.LinkIcon;
            var13['IconComponent'] = var19;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var23 = var19.intl;
            var20 = var23.string;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.3XVNys;
            var19 = var20.bind(var23)(var19);
            var13['title'] = var19;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var17[var22];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.qa9CQk;
            var17 = var19.bind(var20)(var17);
            var13['subtitle'] = var17;
            var17 = null;
            if(!var18) { _fun0028_ip = 1020; continue _fun0028 }
 1004:
            var20 = _closure1_slot42;
            var19 = _closure1_slot6;
            var18 = {};
            var17 = var20.bind(var4)(var19, var18);
 1020:
            var13['trailing'] = var17;
            var13 = var16.bind(var4)(var14, var13);
            var10[1] = var13;
            var14 = var15.hasFlag;
            var13 = _closure1_slot38;
            var13 = var13.IS_JOIN_REQUEST_INTERVIEW_CHANNEL;
            var13 = var14.bind(var15)(var13);
            var11 = null;
            if(!var13) { _fun0028_ip = 1102; continue _fun0028 }
 1061:
            var14 = _closure1_slot42;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 118;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var15 = var15.id;
            var12['channelId'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 1102:
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1116:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot56 = var4;
    var4 = 121;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/ChatBeginningRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var3 = var2.guildId;
            var _closure2_slot1 = var3;
            var3 = var2.shouldRender;
            var10 = var2.showingSpamBanner;
            var2 = _closure1_slot45;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 42;
            var7 = var6[var2];
            var13 = var8.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot18;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var12.bind(var13)(var11, var7);
            var2 = var6[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var12 = _closure1_slot21;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var3 = _closure1_slot21;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var11)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 119;
            var1 = var6[var1];
            var12 = var2.bind(var4)(var1);
            var8 = var12.useExperiment;
            var6 = {};
            var1 = 'b606a2_1';
            var6['location'] = var1;
            var2 = {};
            var1 = null;
            var13 = var1 == var7;
            var14 = undefined;
            if(var13) { _fun0032_ip = 194; continue _fun0032 }
 184:
            var13 = var7.isSystemDM;
            var14 = var13.bind(var7)();
 194:
            var13 = var1 != var14;
            if(!var13) { _fun0032_ip = 204; continue _fun0032 }
 201:
            var13 = var14;
 204:
            var2['autoTrackExposure'] = var13;
            var2 = var8.bind(var12)(var6, var2);
            var2 = var2.systemDMRedesignEnabled;
            if(!var3) { _fun0032_ip = 228; continue _fun0032 }
 224:
            var3 = var1 != var7;
 228:
            var8 = null;
            if(!var3) { _fun0032_ip = 450; continue _fun0032 }
 236:
            var12 = _closure1_slot14;
            var6 = var12.has;
            var3 = var7.type;
            var3 = var6.bind(var12)(var3);
            if(var3) { _fun0032_ip = 427; continue _fun0032 }
 261:
            var3 = var7.isDM;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0032_ip = 290; continue _fun0032 }
 274:
            var3 = var7.isSystemDM;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0032_ip = 290; continue _fun0032 }
 287:
            if(var2) { _fun0032_ip = 400; continue _fun0032 }
 290:
            var2 = var7.isDM;
            var2 = var2.bind(var7)();
            if(var2) { _fun0032_ip = 373; continue _fun0032 }
 303:
            var2 = var7.isGroupDM;
            var2 = var2.bind(var7)();
            if(var2) { _fun0032_ip = 351; continue _fun0032 }
 316:
            var2 = var1 != var11;
            var1 = null;
            if(!var2) { _fun0032_ip = 349; continue _fun0032 }
 325:
            var6 = _closure1_slot42;
            var3 = _closure1_slot51;
            var2 = {};
            var2['guild'] = var11;
            var2['channel'] = var7;
            var1 = var6.bind(var4)(var3, var2);
 349:
            _fun0032_ip = 371; continue _fun0032;
 351:
            var6 = _closure1_slot42;
            var3 = _closure1_slot56;
            var2 = {};
            var2['channel'] = var7;
            var1 = var6.bind(var4)(var3, var2);
 371:
            _fun0032_ip = 398; continue _fun0032;
 373:
            var6 = _closure1_slot42;
            var3 = _closure1_slot53;
            var2 = {};
            var2['channel'] = var7;
            var2['showingSpamBanner'] = var10;
            var1 = var6.bind(var4)(var3, var2);
 398:
            _fun0032_ip = 425; continue _fun0032;
 400:
            var6 = _closure1_slot42;
            var3 = _closure1_slot54;
            var2 = {};
            var2['channel'] = var7;
            var2['showingSpamBanner'] = var10;
            var1 = var6.bind(var4)(var3, var2);
 425:
            _fun0032_ip = 447; continue _fun0032;
 427:
            var6 = _closure1_slot42;
            var3 = _closure1_slot49;
            var2 = {};
            var2['channel'] = var7;
            var1 = var6.bind(var4)(var3, var2);
 447:
            var8 = var1;
 450:
            var3 = _closure1_slot42;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 120;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var7 = _closure1_slot42;
            var6 = _closure1_slot8;
            var5 = {};
            var10 = false;
            var5['collapsable'] = var10;
            var9 = var9.container;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();