// app/modules/icymi/native/ICYMIActiveVoiceRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 147; continue _fun0001 }
 13:
                    var2 = var5.isGuildStageVoice;
                    var4 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 26;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0001_ip = 102; continue _fun0001 }
 51:
                    var4 = 27;
                    var7 = var2[var4];
                    var4 = var2.paths;
                    var4 = var6.bind(var3)(var7, var4);
                    SaveGenerator(address=73);
 71:
                    return var4;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 99; continue _fun0001 }
 79:
                    var8 = var4.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var3)(var5, var7);
                    _fun0001_ip = 141; continue _fun0001;
 99:
                    return var4;
 102:
                    var4 = 25;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=124);
 122:
                    return var2;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 144; continue _fun0001 }
 130:
                    var4 = var2.connectAndOpen;
                    var4 = var4.bind(var3)(var5);
 141:
                    return var3;
 144:
                    return var2;
 147:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function ICYMIActiveVoiceRowInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.guild;
            var _closure2_slot0 = var6;
            var18 = var1.channel;
            var _closure2_slot1 = var18;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot26;
            var13 = var1.bind(var5)();
            var _closure2_slot2 = var13;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 24;
            var1 = var8[var7];
            var9 = var3.bind(var5)(var1);
            var4 = var9.useStateFromStoresArray;
            var1 = _closure1_slot19;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot19;
                var2 = var3.getVoiceStatesForChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var9)(var2, var1);
            var _closure2_slot3 = var1;
            var2 = 28;
            var2 = var8[var2];
            var9 = var3.bind(var5)(var2);
            var4 = var9.useSubscribeGuildMembers;
            var2 = {};
            var11 = var6.id;
            var12 = var1.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var1 = var1.id;
                return var1;
            };
            var10 = var12.bind(var1)(var10);
            var2[var11] = var10;
            var2 = var4.bind(var9)(var2);
            var2 = var8[var7];
            var11 = var3.bind(var5)(var2);
            var10 = var11.useStateFromStoresArray;
            var2 = _closure1_slot13;
            var9 = new Array(2);
            var9[0] = var2;
            var2 = _closure1_slot10;
            var9[1] = var2;
            var2 = var6.id;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var1;
            var2 = function() {
                var4 = _closure2_slot3;
                var3 = var4.map;
                var2 = function(arg1) {
                    var4 = _closure1_slot13;
                    var3 = var4.getMember;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = global;
                var2 = var2.Boolean;
                var3 = var3.bind(var4)(var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot10;
                    var3 = var4.compare;
                    var1 = arg1;
                    var2 = var1.userId;
                    var1 = arg2;
                    var1 = var1.userId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var10.bind(var11)(var9, var2, var4);
            var2 = var8[var7];
            var10 = var3.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot17;
            var4 = new Array(2);
            var4[0] = var2;
            var2 = _closure1_slot12;
            var4[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot17;
                    var1 = var3.getChannelId;
                    var4 = var1.bind(var3)();
                    var1 = null;
                    var3 = var1 != var4;
                    if(!var3) { _fun0003_ip = 40; continue _fun0003 }
 26:
                    var3 = _closure1_slot12;
                    var2 = var3.getChannel;
                    var1 = var2.bind(var3)(var4);
 40:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var4, var2);
            var4 = _closure1_slot1;
            var2 = 29;
            var2 = var8[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.bind(var5)(var9);
            var19 = var2.selfMute;
            var2 = var8[var7];
            var10 = var3.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot3;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    if(var4) { _fun0004_ip = 73; continue _fun0004 }
 35:
                    var5 = _closure1_slot11;
                    var4 = var5.getStreamForUser;
                    var3 = var3.user;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 73:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var3, var2);
            var _closure2_slot4 = var2;
            var3 = 30;
            var3 = var8[var3];
            var9 = var4.bind(var5)(var3);
            var11 = null;
            var3 = var11 == var2;
            var8 = undefined;
            if(var3) { _fun0002_ip = 366; continue _fun0002 }
 361:
            var8 = var2.guildId;
 366:
            var3 = var11 == var2;
            var4 = undefined;
            if(var3) { _fun0002_ip = 380; continue _fun0002 }
 375:
            var4 = var2.channelId;
 380:
            var10 = var11 == var2;
            var3 = undefined;
            if(var10) { _fun0002_ip = 395; continue _fun0002 }
 389:
            var3 = var2.ownerId;
 395:
            var3 = var9.bind(var5)(var8, var4, var3);
            var12 = var3.previewUrl;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var15 = var4.bind(var5)(var8);
            var10 = var15.useStateFromStores;
            var8 = _closure1_slot18;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot18;
                    var2 = var3.getUser;
                    var5 = _closure2_slot4;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 41; continue _fun0005 }
 31:
                    var4 = _closure2_slot4;
                    var1 = var4.ownerId;
 41:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var45 = var10.bind(var15)(var9, var8);
            var3 = var3[var7];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot16;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot8;
            var4[1] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getStreamerActivity;
                    var2 = _closure2_slot4;
                    var1 = _closure1_slot16;
                    var3 = var3.bind(var5)(var2, var1);
                    var5 = null;
                    var2 = var5 != var3;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 115; continue _fun0006 }
 59:
                    var2 = var3.application_id;
                    if(!(var5 == var2)) { _fun0006_ip = 91; continue _fun0006 }
 69:
                    var6 = _closure1_slot8;
                    var5 = var6.getApplicationByName;
                    var2 = var3.name;
                    var2 = var5.bind(var6)(var2);
                    _fun0006_ip = 112; continue _fun0006;
 91:
                    var5 = _closure1_slot8;
                    var4 = var5.getApplication;
                    var3 = var3.application_id;
                    var2 = var4.bind(var5)(var3);
 112:
                    var1 = var2;
 115:
                    return var1;
                }
            };
            var23 = var7.bind(var8)(var4, var3);
            var3 = var11 != var2;
            if(!var3) { _fun0002_ip = 513; continue _fun0002 }
 509:
            var3 = var11 != var45;
 513:
            _closure2_slot5 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var4 = new Array(4);
            var4[0] = var3;
            var9 = var11 == var2;
            var3 = undefined;
            if(var9) { _fun0002_ip = 548; continue _fun0002 }
 543:
            var3 = var2.guildId;
 548:
            var4[1] = var3;
            var9 = var11 == var2;
            var3 = undefined;
            if(var9) { _fun0002_ip = 566; continue _fun0002 }
 561:
            var3 = var2.channelId;
 566:
            var4[2] = var3;
            var9 = var11 == var2;
            var3 = undefined;
            if(var9) { _fun0002_ip = 585; continue _fun0002 }
 579:
            var3 = var2.ownerId;
 585:
            var4[3] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0007_ip = 68; continue _fun0007 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchStreamPreview;
                    var1 = _closure2_slot4;
                    var3 = var1.guildId;
                    var2 = var1.channelId;
                    var1 = var1.ownerId;
                    var1 = var4.bind(var5)(var3, var2, var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var4 = _closure1_slot9;
            var3 = var4.getChannelStatus;
            var26 = var3.bind(var4)(var18);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var3 = var18.id;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectVoiceChannel;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = new Array(2);
            var4[0] = var2;
            var3 = var18.id;
            var4[1] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.selectVoiceChannel;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot4;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0008_ip = 103; continue _fun0008 }
 58:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.watchStream;
                    var3 = _closure2_slot4;
                    var2 = {};
                    var6 = true;
                    var2['forceMultiple'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 103:
                    return var1;
                }
            };
            var27 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.toggleSelfMute;
                var2 = {};
                var5 = _closure1_slot22;
                var5 = var5.ACCOUNT_PANEL;
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var20 = var7.bind(var8)(var4, var3);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var18;
            var3 = function() {
                var2 = _closure2_slot1;
                var3 = function handleVoiceOrStageChannelConnectPress() {
                    var1 = undefined;
                    var4 = _closure1_slot27;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var3 = !var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 35;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.updateChatOpen;
                var3 = var2.id;
                var2 = true;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var21 = var7.bind(var8)(var3, var4);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var3 = var18.id;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var4 = var4.id;
                var2['userId'] = var4;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var4);
            _closure2_slot6 = var3;
            var3 = var11 != var23;
            var32 = null;
            if(!var3) { _fun0002_ip = 821; continue _fun0002 }
 795:
            var4 = var11 == var23;
            var3 = undefined;
            if(var4) { _fun0002_ip = 818; continue _fun0002 }
 804:
            var7 = var23.getIconSource;
            var4 = 48;
            var3 = var7.bind(var23)(var4);
 818:
            var32 = var3;
 821:
            var2 = var11 != var2;
            var10 = null;
            if(!var2) { _fun0002_ip = 1571; continue _fun0002 }
 833:
            var2 = var11 != var45;
            var10 = null;
            if(!var2) { _fun0002_ip = 1571; continue _fun0002 }
 845:
            var4 = _closure1_slot25;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var13.stream;
            var2['style'] = var7;
            var9 = _closure1_slot24;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var33 = 37;
            var7 = var7[var33];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            if(!(var11 == var12)) { _fun0002_ip = 917; continue _fun0002 }
 895:
            var22 = _closure1_slot1;
            var25 = _closure1_slot2;
            var15 = 38;
            var15 = var25[var15];
            var15 = var22.bind(var5)(var15);
            _fun0002_ip = 927; continue _fun0002;
 917:
            var22 = {};
            var22['uri'] = var12;
            var15 = var22;
 927:
            var7['source'] = var15;
            var22 = _closure1_slot1;
            var25 = _closure1_slot2;
            var15 = 38;
            var15 = var25[var15];
            var15 = var22.bind(var5)(var15);
            var7['placeholder'] = var15;
            if(!(var11 == var12)) { _fun0002_ip = 968; continue _fun0002 }
 960:
            var15 = var13.streamPreviewImagePlaceholder;
            _fun0002_ip = 974; continue _fun0002;
 968:
            var15 = var13.streamPreviewImage;
 974:
            var7['style'] = var15;
            var15 = var11 != var12;
            var12 = 'contain';
            if(!var15) { _fun0002_ip = 993; continue _fun0002 }
 989:
            var12 = 'cover';
 993:
            var7['resizeMode'] = var12;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var12 = _closure1_slot25;
            var9 = _closure1_slot6;
            var8 = {};
            var15 = var13.streamOverlay;
            var8['style'] = var15;
            var25 = _closure1_slot25;
            var22 = _closure1_slot6;
            var15 = {};
            var28 = var13.streamLeft;
            var15['style'] = var28;
            if(!(var11 == var32)) { _fun0002_ip = 1138; continue _fun0002 }
 1056:
            var30 = _closure1_slot24;
            var29 = _closure1_slot6;
            var28 = {};
            var31 = var13.activityIcon;
            var28['style'] = var31;
            var35 = _closure1_slot24;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 39;
            var31 = var36[var31];
            var31 = var34.bind(var5)(var31);
            var34 = var31.ScreenIcon;
            var31 = {'size': 'sm', 'color': 'interactive-active'};
            var31 = var35.bind(var5)(var34, var31);
            var28['children'] = var31;
            var28 = var30.bind(var5)(var29, var28);
            _fun0002_ip = 1181; continue _fun0002;
 1138:
            var31 = _closure1_slot24;
            var30 = _closure1_slot1;
            var29 = _closure1_slot2;
            var29 = var29[var33];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var29['source'] = var32;
            var32 = var13.activityIcon;
            var29['style'] = var32;
            var28 = var31.bind(var5)(var30, var29);
 1181:
            var29 = new Array(2);
            var29[0] = var28;
            var32 = _closure1_slot25;
            var31 = _closure1_slot6;
            var30 = {};
            var28 = var13.streamInfo;
            var30['style'] = var28;
            var33 = var11 != var23;
            var28 = null;
            if(!var33) { _fun0002_ip = 1276; continue _fun0002 }
 1218:
            var35 = _closure1_slot24;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var33 = 40;
            var33 = var36[var33];
            var33 = var34.bind(var5)(var33);
            var34 = var33.Text;
            var33 = {'variant': 'text-sm/bold', 'color': 'header-primary'};
            var36 = var23.name;
            var33['children'] = var36;
            var28 = var35.bind(var5)(var34, var33);
 1276:
            var33 = new Array(2);
            var33[0] = var28;
            var36 = _closure1_slot24;
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = 40;
            var28 = var35[var28];
            var28 = var34.bind(var5)(var28);
            var35 = var28.Text;
            var34 = {};
            var28 = var11 != var23;
            var23 = 'text-xs/semibold';
            if(!var28) { _fun0002_ip = 1334; continue _fun0002 }
 1328:
            var23 = 'text-xs/normal';
 1334:
            var34['variant'] = var23;
            var23 = 'header-primary';
            var34['color'] = var23;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var37 = 41;
            var38 = var28[var37];
            var38 = var23.bind(var5)(var38);
            var40 = var38.intl;
            var39 = var40.format;
            var37 = var28[var37];
            var37 = var23.bind(var5)(var37);
            var37 = var37.t;
            var38 = var37.0QO34e;
            var37 = {};
            var42 = _closure1_slot1;
            var41 = 42;
            var41 = var28[var41];
            var44 = var42.bind(var5)(var41);
            var43 = var44.getName;
            var42 = var6.id;
            var41 = var18.id;
            var41 = var43.bind(var44)(var42, var41, var45);
            var37['username'] = var41;
            var37 = var39.bind(var40)(var38, var37);
            var34['children'] = var37;
            var34 = var36.bind(var5)(var35, var34);
            var33[1] = var34;
            var30['children'] = var33;
            var30 = var32.bind(var5)(var31, var30);
            var29[1] = var30;
            var15['children'] = var29;
            var22 = var25.bind(var5)(var22, var15);
            var15 = new Array(2);
            var15[0] = var22;
            var25 = _closure1_slot24;
            var22 = 43;
            var22 = var28[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.Button;
            var22 = {'text': 'Watch', 'variant': 'primary-overlay', 'size': 'sm', 'shrink': true, 'grow': false};
            var22['onPress'] = var27;
            var22 = var25.bind(var5)(var23, var22);
            var15[1] = var22;
            var8['children'] = var15;
            var8 = var12.bind(var5)(var9, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var10 = var4.bind(var5)(var3, var2);
 1571:
            var3 = var1.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0002_ip = 2325; continue _fun0002 }
 1587:
            var4 = _closure1_slot24;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 44;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.VoiceChannelPost;
            var2 = {};
            var2['guild'] = var6;
            var2['channel'] = var18;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var2['timestamp'] = var6;
            var6 = '123';
            var2['id'] = var6;
            var2['onHeaderPress'] = var24;
            var2['onHeaderLongPress'] = var24;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var13.content;
            var6['style'] = var9;
            var9 = var11 != var26;
            var11 = null;
            if(!var9) { _fun0002_ip = 1808; continue _fun0002 }
 1697:
            var15 = _closure1_slot24;
            var12 = _closure1_slot0;
            var25 = _closure1_slot2;
            var9 = 40;
            var9 = var25[var9];
            var9 = var12.bind(var5)(var9);
            var12 = var9.Text;
            var9 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 1};
            var22 = {};
            var23 = _closure1_slot21;
            var22['marginBottom'] = var23;
            var9['style'] = var22;
            var23 = _closure1_slot1;
            var22 = 45;
            var22 = var25[var22];
            var25 = var23.bind(var5)(var22);
            var23 = var25.parseVoiceChannelStatus;
            var22 = {};
            var18 = var18.id;
            var22['channelId'] = var18;
            var18 = true;
            var18 = var23.bind(var25)(var26, var18, var22);
            var9['children'] = var18;
            var11 = var15.bind(var5)(var12, var9);
 1808:
            var9 = new Array(4);
            var9[0] = var11;
            var9[1] = var10;
            var12 = _closure1_slot24;
            var11 = _closure1_slot7;
            var10 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            var15 = var13.users;
            var10['contentContainerStyle'] = var15;
            var15 = var16.map;
            var14 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot18;
                    var3 = var4.getUser;
                    var1 = var2.userId;
                    var15 = var3.bind(var4)(var1);
                    var _closure3_slot0 = var15;
                    var1 = null;
                    var3 = var1 == var15;
                    if(var3) { _fun0009_ip = 287; continue _fun0009 }
 44:
                    var6 = _closure1_slot25;
                    var9 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var3 = 46;
                    var3 = var16[var3];
                    var5 = undefined;
                    var3 = var9.bind(var5)(var3);
                    var4 = var3.PressableOpacity;
                    var3 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.user;
                    var3['style'] = var10;
                    var7 = function onPress() {
                        var3 = _closure2_slot6;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var7;
                    var13 = _closure1_slot24;
                    var14 = _closure1_slot1;
                    var17 = 47;
                    var7 = var16[var17];
                    var10 = var14.bind(var5)(var7);
                    var7 = {};
                    var7['user'] = var15;
                    var12 = _closure2_slot0;
                    var18 = var12.id;
                    var7['guildId'] = var18;
                    var17 = var16[var17];
                    var17 = var9.bind(var5)(var17);
                    var17 = var17.AvatarSizes;
                    var17 = var17.SMALL;
                    var7['size'] = var17;
                    var10 = var13.bind(var5)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var10 = _closure1_slot24;
                    var8 = 40;
                    var8 = var16[var8];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.Text;
                    var8 = {'variant': 'text-sm/semibold', 'color': 'header-primary', 'lineClamp': 2};
                    var13 = 42;
                    var13 = var16[var13];
                    var14 = var14.bind(var5)(var13);
                    var13 = var14.getName;
                    var12 = var12.id;
                    var11 = _closure2_slot1;
                    var11 = var11.id;
                    var11 = var13.bind(var14)(var12, var11, var15);
                    var8['children'] = var11;
                    var8 = var10.bind(var5)(var9, var8);
                    var7[1] = var8;
                    var3['children'] = var7;
                    var2 = var2.userId;
                    var1 = var6.bind(var5)(var4, var3, var2);
 287:
                    return var1;
                }
            };
            var14 = var15.bind(var16)(var14);
            var10['children'] = var14;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var12 = _closure1_slot25;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var13.actions;
            var10['style'] = var13;
            var16 = _closure1_slot24;
            var25 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 48;
            var13 = var18[var14];
            var13 = var25.bind(var5)(var13);
            var15 = var13.IconButton;
            var13 = {};
            var13['onPress'] = var20;
            var20 = 41;
            var22 = var18[var20];
            var22 = var25.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var18 = var18[var20];
            var18 = var25.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.w4m94+;
            var18 = var22.bind(var23)(var18);
            var13['accessibilityLabel'] = var18;
            var18 = 'lg';
            var13['size'] = var18;
            var22 = 'primary-overlay';
            if(!var19) { _fun0002_ip = 2012; continue _fun0002 }
 2008:
            var22 = 'secondary';
 2012:
            var13['variant'] = var22;
            var22 = _closure1_slot1;
            var25 = _closure1_slot2;
            if(var19) { _fun0002_ip = 2036; continue _fun0002 }
 2027:
            var19 = 50;
            var19 = var25[var19];
            _fun0002_ip = 2043; continue _fun0002;
 2036:
            var23 = 49;
            var19 = var25[var23];
 2043:
            var19 = var22.bind(var5)(var19);
            var13['icon'] = var19;
            var15 = var16.bind(var5)(var15, var13);
            var13 = new Array(3);
            var13[0] = var15;
            var22 = _closure1_slot24;
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 43;
            var15 = var19[var15];
            var15 = var23.bind(var5)(var15);
            var16 = var15.Button;
            var15 = {'text': null, 'onPress': null, 'grow': true, 'size': 'lg', 'variant': 'active'};
            var25 = var19[var20];
            var25 = var23.bind(var5)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var19[var20];
            var25 = var23.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.96ANUF;
            var25 = var26.bind(var27)(var25);
            var15['text'] = var25;
            var15['onPress'] = var24;
            var15 = var22.bind(var5)(var16, var15);
            var13[1] = var15;
            var16 = _closure1_slot24;
            var14 = var19[var14];
            var14 = var23.bind(var5)(var14);
            var15 = var14.IconButton;
            var14 = {};
            var14['onPress'] = var21;
            var21 = var19[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var19[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.w4m94+;
            var20 = var21.bind(var22)(var20);
            var14['accessibilityLabel'] = var20;
            var14['size'] = var18;
            var18 = 'secondary';
            var14['variant'] = var18;
            var18 = _closure1_slot1;
            var17 = 51;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var14['icon'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 2325:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.ICYMI_MARGIN;
    var _closure1_slot21 = var12;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot22 = var7;
    var4 = var4.Permissions;
    var _closure1_slot23 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot24 = var7;
    var4 = var4.jsxs;
    var _closure1_slot25 = var4;
    var4 = 20;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingHorizontal'] = var12;
    var9['paddingBottom'] = var12;
    var4['content'] = var9;
    var9 = {'position': 'relative', 'height': 224, 'marginBottom': null, 'borderRadius': null, 'overflow': 'hidden'};
    var9['marginBottom'] = var12;
    var10 = 21;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var4['stream'] = var9;
    var9 = {'width': 32, 'height': 32, 'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_SURFACE_OVERLAY;
    var9['backgroundColor'] = var14;
    var4['activityIcon'] = var9;
    var9 = {};
    var16 = var13.absoluteFillObject;
    var17 = var9;
    var13 = copyDataProperties(var17, var16);
    var4['streamPreviewImage'] = var9;
    var9 = {'width': '75%', 'height': 224};
    var4['streamPreviewImagePlaceholder'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': 'rgba(0, 0, 0, 0.7)', 'padding': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var4['streamOverlay'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['streamLeft'] = var9;
    var9 = {};
    var4['streamInfo'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var9['marginBottom'] = var12;
    var4['users'] = var9;
    var9 = {'backgroundColor': null, 'paddingHorizontal': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 6, 'width': 96, 'maxWidth': 96, 'height': 104, 'maxHeight': 104};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_TERTIARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var4['user'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_OVERLAY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xl;
    var9['borderRadius'] = var10;
    var4['actions'] = var9;
    var9 = {'height': 48, 'width': 48};
    var4['roundButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot26 = var4;
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIActiveVoiceRow.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ICYMIActiveVoiceRow(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var6 = var7[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var _closure2_slot1 = var6;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot14;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0011_ip = 39; continue _fun0011 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var4 = null;
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0010_ip = 156; continue _fun0010 }
 123:
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0010_ip = 156; continue _fun0010 }
 132:
            var4 = _closure1_slot24;
            var3 = _closure1_slot28;
            var2 = {};
            var2['guild'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 156:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useEligibleActiveVoiceChannelId() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchUserAffinitiesV2;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var6)(var3, var2);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var7 = undefined;
            var4 = var8.bind(var7)(var2);
            var3 = var4.useICYMIActiveVoice;
            var2 = 'icymi';
            var3 = var3.bind(var4)(var2);
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var4 = null;
            var10 = var2.bind(var6)(var4);
            var6 = _closure1_slot4;
            var2 = 2;
            var10 = var6.bind(var7)(var10, var2);
            var2 = 0;
            var2 = var10[var2];
            var6 = 1;
            var6 = var10[var6];
            var _closure2_slot0 = var6;
            var6 = 24;
            var6 = var9[var6];
            var9 = var8.bind(var7)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot20;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var7, var6);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = function getEligibleVoiceChannels() {
                        var4 = _closure1_slot19;
                        var3 = var4.getAllVoiceStates;
                        var6 = var3.bind(var4)();
                        var _closure4_slot0 = var6;
                        var3 = _closure1_slot10;
                        var2 = var3.getUserAffinitiesMap;
                        var2 = var2.bind(var3)();
                        var _closure4_slot1 = var2;
                        var4 = {};
                        var _closure4_slot2 = var4;
                        var2 = global;
                        var5 = var2.Object;
                        var3 = var5.keys;
                        var6 = var3.bind(var5)(var6);
                        var5 = var6.forEach;
                        var3 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = arg1;
                            var5 = var3[var2];
                            var _closure5_slot0 = var5;
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.keys;
                            var2 = var5.getVoiceStates;
                            var2 = var2.bind(var5)();
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                    var3 = arg1;
                                    var4 = _closure5_slot0;
                                    var2 = var4.getVoiceStates;
                                    var2 = var2.bind(var4)();
                                    var5 = var2[var3];
                                    var6 = _closure1_slot12;
                                    var4 = var6.getChannel;
                                    var7 = var4.bind(var6)(var3);
                                    var6 = _closure1_slot15;
                                    var4 = var6.can;
                                    var2 = _closure1_slot23;
                                    var2 = var2.CONNECT;
                                    var2 = var4.bind(var6)(var2, var7);
                                    if(!var2) { _fun0014_ip = 205; continue _fun0014 }
 75:
                                    var4 = var5.map;
                                    var2 = function(arg1) {
                                        var1 = arg1;
                                        var1 = var1.user;
                                        var1 = var1.id;
                                        return var1;
                                    };
                                    var5 = var4.bind(var5)(var2);
                                    var4 = var5.map;
                                    var2 = function(arg1) {
                                        var3 = _closure4_slot1;
                                        var2 = var3.get;
                                        var1 = arg1;
                                        var1 = var2.bind(var3)(var1);
                                        return var1;
                                    };
                                    var5 = var4.bind(var5)(var2);
                                    var4 = var5.filter;
                                    var2 = global;
                                    var2 = var2.Boolean;
                                    var5 = var4.bind(var5)(var2);
                                    var4 = var5.sort;
                                    var2 = function(arg1, arg2) {
                                        var1 = arg1;
                                        var2 = var1.vcRank;
                                        var1 = arg2;
                                        var1 = var1.vcRank;
                                        var1 = var2 - var1;
                                        return var1;
                                    };
                                    var6 = var4.bind(var5)(var2);
                                    var5 = 0;
                                    var2 = var6[var5];
                                    var4 = null;
                                    var7 = var4 == var2;
                                    var4 = undefined;
                                    if(var7) { _fun0014_ip = 168; continue _fun0014 }
 162:
                                    var4 = var2.vcRank;
 168:
                                    var2 = 20;
                                    if(!(var4 < var2)) { _fun0014_ip = 205; continue _fun0014 }
 175:
                                    var2 = _closure4_slot2;
                                    var4 = var6.reduce;
                                    var1 = function(arg1, arg2) {
                                        var1 = arg2;
                                        var2 = var1.communicationProbability;
                                        var1 = arg1;
                                        var1 = var1 + var2;
                                        return var1;
                                    };
                                    var1 = var4.bind(var6)(var1, var5);
                                    var2[var3] = var1;
 205:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var3 = var5.bind(var6)(var3);
                        var3 = var2.Object;
                        var2 = var3.entries;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.sort;
                        var2 = function(arg1, arg2) {
                            var1 = arg2;
                            var3 = 1;
                            var2 = var1[var3];
                            var1 = arg1;
                            var1 = var1[var3];
                            var1 = var2 - var1;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.map;
                        var1 = function(arg1) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                var1 = arg1;
                                var2 = var1[Symbol.iterator];
                                var1 = var2().next;
                                var4 = var1().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                if(var3) { _fun0015_ip = 25; continue _fun0015 }
 22:
                                var1 = var4;
 25:
                                if(var3) { _fun0015_ip = 31; continue _fun0015 }
 28:
                                var2.return();
 31:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var3 = var4.length;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0013_ip = 42; continue _fun0013 }
 26:
                    var3 = _closure2_slot0;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
 42:
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = null;
            if(!var3) { _fun0012_ip = 203; continue _fun0012 }
 191:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0012_ip = 203; continue _fun0012 }
 200:
            var1 = var2;
 203:
            return var1;
        }
    };
    var3['useEligibleActiveVoiceChannelId'] = var2;
    return var1;
})();