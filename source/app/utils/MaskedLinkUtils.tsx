// app/utils/MaskedLinkUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot12 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot13 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/MaskedLinkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isLinkTrusted(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot4;
            var2 = var4.getChannel;
            var5 = _closure1_slot9;
            var1 = var5.getChannelId;
            var1 = var1.bind(var5)();
            var6 = var2.bind(var4)(var1);
            var1 = null;
            var2 = var1 != var6;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.type;
            var4 = _closure1_slot10;
            var4 = var4.DM;
            var2 = var5 === var4;
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot8;
            var3 = var4.isFriend;
            var5 = var6.getRecipientId;
            var5 = var5.bind(var6)();
            var6 = var1 != var5;
            var1 = '';
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var5;
case 6:
            var1 = var3.bind(var4)(var1);
            var2 = !var1;
case 4:
            var1 = !var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = arg1;
            var2 = arg2;
            var1 = var3 === var2;
case 8:
            return var1;
        }
    };
    var3['isLinkTrusted'] = var4;
    var2 = function handleClick(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var3 = arguments[2];
            var1 = arg2;
            var10 = undefined;
            if(!(var3 === var10)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = new Array(0);
case 10:
            var31 = var3;
            var4 = arguments[3];
            var24 = undefined;
            var26 = undefined;
            var _closure2_slot0 = var10;
            var25 = undefined;
            var8 = undefined;
            var38 = undefined;
            var15 = undefined;
            var _closure2_slot1 = var10;
            var21 = undefined;
            var2 = undefined;
            var _closure2_slot2 = var10;
            var14 = undefined;
            var _closure2_slot3 = var10;
            var7 = undefined;
            var _closure2_slot4 = var10;
            var16 = undefined;
            var _closure2_slot5 = var10;
            var13 = undefined;
            var _closure2_slot6 = var10;
            var12 = undefined;
            var _closure2_slot7 = var10;
            var11 = undefined;
            var41 = undefined;
            var37 = undefined;
            var35 = undefined;
            var36 = undefined;
            var28 = undefined;
            var30 = undefined;
            var29 = undefined;
            var34 = undefined;
            var32 = undefined;
            var33 = undefined;
            var27 = undefined;
            var6 = undefined;
            var20 = undefined;
            var19 = undefined;
            var23 = undefined;
            var18 = undefined;
            var17 = undefined;
            var24 = var9.trusted;
            var26 = var9.onClick;
            var3 = var9.onConfirm;
            _closure2_slot0 = var3;
            var25 = var9.onCancel;
            var8 = var9.shouldConfirm;
            var38 = var9.messageId;
            var3 = var9.channelId;
            var15 = var3;
            _closure2_slot1 = var3;
            var39 = _closure1_slot1;
            var40 = _closure1_slot2;
            var3 = 8;
            var3 = var40[var3];
            var40 = var39.bind(var10)(var3);
            var39 = var40.sanitizeUrl;
            var3 = var9.href;
            var39 = var39.bind(var40)(var3);
            var21 = var39;
            var3 = null;
            if(!(var3 != var39)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var39 = var21;
            var2 = var39;
            _closure2_slot2 = var39;
case 14: // try_start_0
            var39 = global;
            var40 = var39.decodeURI;
            var39 = var21;
            var39 = var40.bind(var10)(var39);
case 15: // try_end0
            _fun0002_ip = 16; continue _fun0002;
case 17: // catch_target0
            CatchBlockStart(arg_register=38);
            var39 = global;
            var39 = var39.encodeURI;
            var21 = var39.bind(var10)(var21);
            var2 = var21;
            _closure2_slot2 = var21;
case 16:
            var14 = null;
            _closure2_slot3 = var3;
            var21 = false;
            var7 = false;
            _closure2_slot4 = var21;
            var39 = var38;
            var16 = var39;
            _closure2_slot5 = var39;
            var40 = var15;
            var13 = var40;
            _closure2_slot6 = var40;
            var12 = null;
            _closure2_slot7 = var3;
            if(!(var3 != var39)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var39 = var15;
            if(!(var3 != var39)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
            var42 = _closure1_slot7;
            var39 = var42.getMessage;
            var40 = var15;
            var35 = var39.bind(var42)(var40, var38);
            var39 = _closure1_slot4;
            var38 = var39.getBasicChannel;
            var38 = var38.bind(var39)(var40);
            var36 = var38;
            var39 = var3 == var38;
            var38 = undefined;
            if(var39) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var39 = var36;
            var38 = var39.guild_id;
case 21:
            var11 = var38;
            var38 = var3 != var38;
            var39 = null;
            if(!var38) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var39 = var11;
case 23:
            var14 = var39;
            _closure2_slot3 = var39;
            var38 = _closure1_slot5;
            var11 = var38.getGuild;
            var28 = var11.bind(var38)(var39);
            var40 = var35;
            var42 = var3 == var40;
            var40 = undefined;
            if(var42) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var42 = var35;
            var42 = var42.messageReference;
            var41 = var42;
            var42 = var3 == var42;
            var40 = undefined;
            if(var42) { _fun0002_ip = 25; continue _fun0002 }
case 27:
            var40 = var41.guild_id;
case 25:
            var40 = var3 != var40;
            var39 = var40;
            if(!var40) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var40 = var35;
            var41 = var3 == var40;
            var40 = undefined;
            if(var41) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var41 = var35;
            var40 = var41.webhookId;
case 30:
            var39 = var3 != var40;
case 28:
            var38 = var39;
            if(!var39) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var39 = var35;
            var40 = var3 == var39;
            var39 = undefined;
            if(var40) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var42 = var35;
            var41 = var42.hasFlag;
            var40 = _closure1_slot13;
            var40 = var40.IS_CROSSPOST;
            var39 = var41.bind(var42)(var40);
case 34:
            var38 = var39;
case 32:
            var11 = var38;
            if(!var38) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var38 = var14;
            var11 = var3 != var38;
case 36:
            var30 = var11;
            if(!var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var11 = var35;
            var38 = var3 == var11;
            var11 = undefined;
            if(var38) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var38 = var35;
            var38 = var38.messageReference;
            var37 = var38;
            var38 = var3 == var38;
            var11 = undefined;
            if(var38) { _fun0002_ip = 40; continue _fun0002 }
case 42:
            var11 = var37.guild_id;
case 40:
            if(!(var3 == var11)) { _fun0002_ip = 43; continue _fun0002 }
case 38:
            var11 = var14;
            var12 = var11;
            _closure2_slot7 = var11;
            _fun0002_ip = 44; continue _fun0002;
case 43:
            var11 = var35;
            var37 = var11.messageReference;
            var37 = var37.message_id;
            var16 = var37;
            _closure2_slot5 = var37;
            var37 = var11.messageReference;
            var37 = var37.channel_id;
            var13 = var37;
            _closure2_slot6 = var37;
            var11 = var11.messageReference;
            var11 = var11.guild_id;
            var12 = var11;
            _closure2_slot7 = var11;
case 44:
            var37 = var36;
            var38 = var3 == var37;
            var37 = undefined;
            if(var38) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var37 = var36.type;
case 45:
            var36 = _closure1_slot10;
            var36 = var36.GUILD_ANNOUNCEMENT;
            var36 = var37 === var36;
            var11 = var36;
            if(!var36) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var36 = var28;
            var37 = var3 == var36;
            var36 = undefined;
            if(var37) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var38 = var28.features;
            var37 = var38.has;
            var28 = _closure1_slot12;
            var28 = var28.COMMUNITY;
            var36 = var37.bind(var38)(var28);
case 49:
            var28 = true;
            var11 = var28 === var36;
case 47:
            var29 = var11;
            var11 = var35;
            var11 = var3 == var11;
            var28 = undefined;
            if(var11) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var37 = var35;
            var36 = var37.hasFlag;
            var11 = _closure1_slot13;
            var11 = var11.EPHEMERAL;
            var28 = var36.bind(var37)(var11);
case 51:
            var11 = true;
            var34 = var11 === var28;
            var35 = var3 != var35;
            var28 = var35;
            if(!var35) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var28 = !var34;
case 53:
            var11 = var28;
            if(!var28) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var28 = var30;
            if(var30) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var28 = var29;
case 57:
            var11 = var28;
case 55:
            var7 = var11;
            _closure2_slot4 = var11;
case 18:
            var11 = var15;
            if(!(var3 != var11)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var29 = _closure1_slot4;
            var28 = var29.getChannel;
            var11 = var15;
            var11 = var28.bind(var29)(var11);
            var32 = var11;
            var29 = _closure1_slot5;
            var28 = var29.getGuild;
            var30 = var3 == var11;
            var11 = undefined;
            if(var30) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var34 = var32;
            var30 = var34.getGuildId;
            var11 = var30.bind(var34)();
case 61:
            var33 = var28.bind(var29)(var11);
            var29 = var32;
            var29 = var3 != var29;
            var28 = var29;
            if(!var29) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var29 = var33;
            var28 = var3 != var29;
case 63:
            var11 = var28;
            if(!var28) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var28 = var33;
            var30 = var28.features;
            var29 = var30.has;
            var28 = _closure1_slot12;
            var28 = var28.DISCOVERABLE;
            var11 = var29.bind(var30)(var28);
case 65:
            if(!var11) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var28 = _closure1_slot1;
            var36 = _closure1_slot2;
            var11 = 11;
            var11 = var36[var11];
            var30 = var28.bind(var10)(var11);
            var29 = var30.track;
            var11 = _closure1_slot11;
            var28 = var11.URL_CLICKED;
            var11 = {};
            var35 = _closure1_slot0;
            var34 = 12;
            var34 = var36[var34];
            var36 = var35.bind(var10)(var34);
            var35 = var36.getHostname;
            var34 = var2;
            var34 = var35.bind(var36)(var34);
            var11['url_domain'] = var34;
            var33 = var33.id;
            var11['guild_id'] = var33;
            var32 = var32.id;
            var11['channel_id'] = var32;
            var11 = var29.bind(var30)(var28, var11);
case 67:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var11 = 13;
            var11 = var29[var11];
            var28 = var28.bind(var10)(var11);
            var11 = var15;
            var11 = var28.bind(var10)(var11);
            if(!var11) { _fun0002_ip = 59; continue _fun0002 }
case 69:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var11 = 11;
            var11 = var29[var11];
            var30 = var28.bind(var10)(var11);
            var29 = var30.track;
            var11 = _closure1_slot11;
            var28 = var11.CHANGE_LOG_CTA_CLICKED;
            var11 = {};
            var32 = 'inline_link';
            var11['cta_type'] = var32;
            var32 = var2;
            var11['target'] = var32;
            var11 = var29.bind(var30)(var28, var11);
case 59:
            var29 = _closure1_slot1;
            var28 = _closure1_slot2;
            var11 = 14;
            var28 = var28[var11];
            var30 = var29.bind(var10)(var28);
            var29 = var30.trackLinkClicked;
            var28 = var2;
            var28 = var29.bind(var30)(var28);
            var28 = var26;
            if(!(var3 == var28)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 15;
            var28 = var30[var28];
            var28 = var29.bind(var10)(var28);
            var30 = var28.default;
            var29 = var2;
            var28 = {};
            var28['skipExtensionCheck'] = var10;
            var28['analyticsLocations'] = var31;
            var28 = var30.bind(var10)(var29, var28);
            var27 = var28;
            if(!(var3 != var28)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var28 = var27;
            var27 = var1;
            var27 = var28.bind(var10)(var27);
            if(!var27) { _fun0002_ip = 72; continue _fun0002 }
case 74:
            return var10;
case 70:
            var27 = var26;
            var26 = var1;
            var26 = var27.bind(var10)(var26);
            if(var26) { _fun0002_ip = 75; continue _fun0002 }
case 72:
            var6 = function handleConfirm() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackAnnouncementMessageLinkClicked;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var2['messageId'] = var5;
                    var5 = _closure2_slot1;
                    var2['channelId'] = var5;
                    var5 = _closure2_slot3;
                    var2['guildId'] = var5;
                    var5 = _closure2_slot6;
                    var2['sourceChannelId'] = var5;
                    var5 = _closure2_slot7;
                    var2['sourceGuildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 76:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0003_ip = 80; continue _fun0003;
case 78:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
case 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var25;
            if(!(var3 == var26)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var22 = function() {
                var1 = undefined;
                return var1;
            };
            _fun0002_ip = 83; continue _fun0002;
case 81:
            var22 = var25;
case 83:
            var20 = var22;
            var26 = _closure1_slot3;
            var25 = var26.isBlockedDomain;
            var22 = var2;
            var22 = var25.bind(var26)(var22);
            if(!(var3 === var22)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 18;
            var22 = var26[var22];
            var26 = var25.bind(var10)(var22);
            var25 = var26.shouldShowLinkNotDiscordWarning;
            var22 = var2;
            var22 = var25.bind(var26)(var22);
            if(var22) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var22 = var24;
            var25 = 'function';
            var22 = typeof var22;
            if(!(var25 !== var22)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var22 = var24;
            _fun0002_ip = 90; continue _fun0002;
case 88:
            var22 = var24.bind(var10)();
case 90:
            var19 = var22;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 12;
            var22 = var25[var22];
            var25 = var24.bind(var10)(var22);
            var24 = var25.getProtocol;
            var22 = var2;
            var25 = var24.bind(var25)(var22);
            var23 = var25;
            var24 = 'http:';
            var24 = var24 === var25;
            var22 = var24;
            if(var24) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var24 = var23;
            var23 = 'https:';
            var22 = var23 === var24;
case 91:
            var18 = !var22;
            if(!var22) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            if(var19) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var23 = _closure1_slot6;
            var22 = var23.isTrustedDomain;
            var19 = var2;
            var19 = var22.bind(var23)(var19);
            if(var19) { _fun0002_ip = 95; continue _fun0002 }
case 93:
            var19 = var18;
            if(!var19) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var23 = _closure1_slot6;
            var22 = var23.isTrustedProtocol;
            var19 = var2;
            var19 = var22.bind(var23)(var19);
            if(var19) { _fun0002_ip = 95; continue _fun0002 }
case 97:
            var19 = var1;
            if(!(var3 != var19)) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var22 = var1;
            var19 = var22.preventDefault;
            var19 = var19.bind(var22)();
case 99:
            if(var18) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 20;
            var18 = var22[var18];
            var22 = var19.bind(var10)(var18);
            var19 = var22.punycodeLink;
            var18 = var2;
            var18 = var19.bind(var22)(var18);
            var17 = var18;
            if(!(var3 == var18)) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var22 = var2;
            _fun0002_ip = 105; continue _fun0002;
case 103:
            var22 = var17.displayTarget;
case 105:
            var18 = _closure1_slot1;
            var24 = _closure1_slot2;
            var17 = 21;
            var17 = var24[var17];
            var19 = var18.bind(var10)(var17);
            var18 = var19.show;
            var17 = {};
            var17['url'] = var22;
            var23 = _closure1_slot0;
            var22 = 22;
            var22 = var24[var22];
            var22 = var23.bind(var10)(var22);
            var22 = var22.trustDomain;
            var17['trustUrl'] = var22;
            var22 = var6;
            var17['onConfirm'] = var22;
            var22 = var20;
            var17['onCancel'] = var22;
            var17['isProtocol'] = var21;
            var21 = var4;
            var17['contextKey'] = var21;
            var17 = var18.bind(var19)(var17);
            _fun0002_ip = 106; continue _fun0002;
case 101:
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 21;
            var17 = var23[var17];
            var19 = var18.bind(var10)(var17);
            var18 = var19.show;
            var17 = {};
            var21 = var2;
            var17['url'] = var21;
            var22 = _closure1_slot0;
            var21 = 22;
            var21 = var23[var21];
            var21 = var22.bind(var10)(var21);
            var21 = var21.trustProtocol;
            var17['trustUrl'] = var21;
            var21 = var6;
            var17['onConfirm'] = var21;
            var17['onCancel'] = var20;
            var20 = true;
            var17['isProtocol'] = var20;
            var20 = var4;
            var17['contextKey'] = var20;
            var17 = var18.bind(var19)(var17);
            _fun0002_ip = 106; continue _fun0002;
case 95:
            var17 = var1;
            if(!(var3 != var17)) { _fun0002_ip = 107; continue _fun0002 }
case 108:
            var17 = var8;
            if(!(var3 != var17)) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            if(var8) { _fun0002_ip = 107; continue _fun0002 }
case 109:
            if(!var7) { _fun0002_ip = 106; continue _fun0002 }
case 111:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var11 = var8.bind(var10)(var7);
            var8 = var11.trackAnnouncementMessageLinkClicked;
            var7 = {};
            var7['messageId'] = var16;
            var7['channelId'] = var15;
            var7['guildId'] = var14;
            var7['sourceChannelId'] = var13;
            var7['sourceGuildId'] = var12;
            var7 = var8.bind(var11)(var7);
            _fun0002_ip = 106; continue _fun0002;
case 107:
            var6 = var6.bind(var10)();
case 106:
            return var10;
case 86:
            var6 = var1;
            if(!(var3 != var6)) { _fun0002_ip = 112; continue _fun0002 }
case 113:
            var7 = var1;
            var6 = var7.preventDefault;
            var6 = var6.bind(var7)();
case 112:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 19;
            var6 = var8[var6];
            var8 = var7.bind(var10)(var6);
            var7 = var8.show;
            var6 = var2;
            var6 = var7.bind(var8)(var6);
            var6 = undefined;
            return var6;
case 84:
            var6 = var1;
            if(!(var3 != var6)) { _fun0002_ip = 114; continue _fun0002 }
case 115:
            var7 = var1;
            var6 = var7.preventDefault;
            var6 = var6.bind(var7)();
case 114:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 17;
            var6 = var8[var6];
            var7 = var7.bind(var10)(var6);
            var6 = var7.show;
            var2 = var6.bind(var7)(var2);
            var2 = undefined;
            return var2;
case 75:
            return var10;
case 12:
            var2 = var1;
            if(!(var3 != var2)) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            var2 = var1;
            var1 = var2.preventDefault;
            var1 = var1.bind(var2)();
case 116:
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var3 = var2.bind(var10)(var1);
            var2 = var3.show;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 10;
            var7 = var11[var5];
            var7 = var6.bind(var10)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var5];
            var7 = var6.bind(var10)(var7);
            var7 = var7.t;
            var7 = var7.x87gam;
            var7 = var8.bind(var12)(var7);
            var1['title'] = var7;
            var7 = var11[var5];
            var7 = var6.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var5 = var11[var5];
            var5 = var6.bind(var10)(var5);
            var5 = var5.t;
            var6 = var5.9rqRws;
            var5 = {};
            var9 = var9.href;
            var5['url'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['body'] = var5;
            var5 = true;
            var1['isDismissable'] = var5;
            var1['contextKey'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['handleClick'] = var2;
    return var1;
})();