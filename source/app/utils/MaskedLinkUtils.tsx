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
 0:
            var4 = _closure1_slot4;
            var2 = var4.getChannel;
            var5 = _closure1_slot9;
            var1 = var5.getChannelId;
            var1 = var1.bind(var5)();
            var6 = var2.bind(var4)(var1);
            var1 = null;
            var2 = var1 != var6;
            if(!var2) { _fun0001_ip = 59; continue _fun0001 }
 40:
            var5 = var6.type;
            var4 = _closure1_slot10;
            var4 = var4.DM;
            var2 = var5 === var4;
 59:
            if(!var2) { _fun0001_ip = 104; continue _fun0001 }
 62:
            var4 = _closure1_slot8;
            var3 = var4.isFriend;
            var5 = var6.getRecipientId;
            var5 = var5.bind(var6)();
            var6 = var1 != var5;
            var1 = '';
            if(!var6) { _fun0001_ip = 96; continue _fun0001 }
 93:
            var1 = var5;
 96:
            var1 = var3.bind(var4)(var1);
            var2 = !var1;
 104:
            var1 = !var2;
            if(var2) { _fun0001_ip = 120; continue _fun0001 }
 110:
            var3 = arg1;
            var2 = arg2;
            var1 = var3 === var2;
 120:
            return var1;
        }
    };
    var3['isLinkTrusted'] = var4;
    var2 = function handleClick(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var3 = arguments[2];
            var1 = arg2;
            var10 = undefined;
            if(!(var3 === var10)) { _fun0002_ip = 21; continue _fun0002 }
 17:
            var3 = new Array(0);
 21:
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
            if(!(var3 != var39)) { _fun0002_ip = 1992; continue _fun0002 }
 224:
            var39 = var21;
            var2 = var39;
            _closure2_slot2 = var39;
 234: // try_start_0
            var39 = global;
            var40 = var39.decodeURI;
            var39 = var21;
            var39 = var40.bind(var10)(var39);
 250: // try_end0
            _fun0002_ip = 274; continue _fun0002;
 252: // catch_target0
            CatchBlockStart(arg_register=38);
            var39 = global;
            var39 = var39.encodeURI;
            var21 = var39.bind(var10)(var21);
            var2 = var21;
            _closure2_slot2 = var21;
 274:
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
            if(!(var3 != var39)) { _fun0002_ip = 834; continue _fun0002 }
 321:
            var39 = var15;
            if(!(var3 != var39)) { _fun0002_ip = 834; continue _fun0002 }
 331:
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
            if(var39) { _fun0002_ip = 385; continue _fun0002 }
 377:
            var39 = var36;
            var38 = var39.guild_id;
 385:
            var11 = var38;
            var38 = var3 != var38;
            var39 = null;
            if(!var38) { _fun0002_ip = 400; continue _fun0002 }
 397:
            var39 = var11;
 400:
            var14 = var39;
            _closure2_slot3 = var39;
            var38 = _closure1_slot5;
            var11 = var38.getGuild;
            var28 = var11.bind(var38)(var39);
            var40 = var35;
            var42 = var3 == var40;
            var40 = undefined;
            if(var42) { _fun0002_ip = 459; continue _fun0002 }
 433:
            var42 = var35;
            var42 = var42.messageReference;
            var41 = var42;
            var42 = var3 == var42;
            var40 = undefined;
            if(var42) { _fun0002_ip = 459; continue _fun0002 }
 454:
            var40 = var41.guild_id;
 459:
            var40 = var3 != var40;
            var39 = var40;
            if(!var40) { _fun0002_ip = 494; continue _fun0002 }
 469:
            var40 = var35;
            var41 = var3 == var40;
            var40 = undefined;
            if(var41) { _fun0002_ip = 490; continue _fun0002 }
 481:
            var41 = var35;
            var40 = var41.webhookId;
 490:
            var39 = var3 != var40;
 494:
            var38 = var39;
            if(!var39) { _fun0002_ip = 539; continue _fun0002 }
 500:
            var39 = var35;
            var40 = var3 == var39;
            var39 = undefined;
            if(var40) { _fun0002_ip = 536; continue _fun0002 }
 512:
            var42 = var35;
            var41 = var42.hasFlag;
            var40 = _closure1_slot13;
            var40 = var40.IS_CROSSPOST;
            var39 = var41.bind(var42)(var40);
 536:
            var38 = var39;
 539:
            var11 = var38;
            if(!var38) { _fun0002_ip = 552; continue _fun0002 }
 545:
            var38 = var14;
            var11 = var3 != var38;
 552:
            var30 = var11;
            if(!var11) { _fun0002_ip = 600; continue _fun0002 }
 558:
            var11 = var35;
            var38 = var3 == var11;
            var11 = undefined;
            if(var38) { _fun0002_ip = 596; continue _fun0002 }
 570:
            var38 = var35;
            var38 = var38.messageReference;
            var37 = var38;
            var38 = var3 == var38;
            var11 = undefined;
            if(var38) { _fun0002_ip = 596; continue _fun0002 }
 591:
            var11 = var37.guild_id;
 596:
            if(!(var3 == var11)) { _fun0002_ip = 612; continue _fun0002 }
 600:
            var11 = var14;
            var12 = var11;
            _closure2_slot7 = var11;
            _fun0002_ip = 670; continue _fun0002;
 612:
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
 670:
            var37 = var36;
            var38 = var3 == var37;
            var37 = undefined;
            if(var38) { _fun0002_ip = 687; continue _fun0002 }
 682:
            var37 = var36.type;
 687:
            var36 = _closure1_slot10;
            var36 = var36.GUILD_ANNOUNCEMENT;
            var36 = var37 === var36;
            var11 = var36;
            if(!var36) { _fun0002_ip = 751; continue _fun0002 }
 707:
            var36 = var28;
            var37 = var3 == var36;
            var36 = undefined;
            if(var37) { _fun0002_ip = 745; continue _fun0002 }
 719:
            var38 = var28.features;
            var37 = var38.has;
            var28 = _closure1_slot12;
            var28 = var28.COMMUNITY;
            var36 = var37.bind(var38)(var28);
 745:
            var28 = true;
            var11 = var28 === var36;
 751:
            var29 = var11;
            var11 = var35;
            var11 = var3 == var11;
            var28 = undefined;
            if(var11) { _fun0002_ip = 790; continue _fun0002 }
 766:
            var37 = var35;
            var36 = var37.hasFlag;
            var11 = _closure1_slot13;
            var11 = var11.EPHEMERAL;
            var28 = var36.bind(var37)(var11);
 790:
            var11 = true;
            var34 = var11 === var28;
            var35 = var3 != var35;
            var28 = var35;
            if(!var35) { _fun0002_ip = 809; continue _fun0002 }
 806:
            var28 = !var34;
 809:
            var11 = var28;
            if(!var28) { _fun0002_ip = 827; continue _fun0002 }
 815:
            var28 = var30;
            if(var30) { _fun0002_ip = 824; continue _fun0002 }
 821:
            var28 = var29;
 824:
            var11 = var28;
 827:
            var7 = var11;
            _closure2_slot4 = var11;
 834:
            var11 = var15;
            if(!(var3 != var11)) { _fun0002_ip = 1149; continue _fun0002 }
 844:
            var29 = _closure1_slot4;
            var28 = var29.getChannel;
            var11 = var15;
            var11 = var28.bind(var29)(var11);
            var32 = var11;
            var29 = _closure1_slot5;
            var28 = var29.getGuild;
            var30 = var3 == var11;
            var11 = undefined;
            if(var30) { _fun0002_ip = 895; continue _fun0002 }
 882:
            var34 = var32;
            var30 = var34.getGuildId;
            var11 = var30.bind(var34)();
 895:
            var33 = var28.bind(var29)(var11);
            var29 = var32;
            var29 = var3 != var29;
            var28 = var29;
            if(!var29) { _fun0002_ip = 920; continue _fun0002 }
 913:
            var29 = var33;
            var28 = var3 != var29;
 920:
            var11 = var28;
            if(!var28) { _fun0002_ip = 955; continue _fun0002 }
 926:
            var28 = var33;
            var30 = var28.features;
            var29 = var30.has;
            var28 = _closure1_slot12;
            var28 = var28.DISCOVERABLE;
            var11 = var29.bind(var30)(var28);
 955:
            if(!var11) { _fun0002_ip = 1056; continue _fun0002 }
 958:
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
 1056:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var11 = 13;
            var11 = var29[var11];
            var28 = var28.bind(var10)(var11);
            var11 = var15;
            var11 = var28.bind(var10)(var11);
            if(!var11) { _fun0002_ip = 1149; continue _fun0002 }
 1087:
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
 1149:
            var29 = _closure1_slot1;
            var28 = _closure1_slot2;
            var11 = 14;
            var28 = var28[var11];
            var30 = var29.bind(var10)(var28);
            var29 = var30.trackLinkClicked;
            var28 = var2;
            var28 = var29.bind(var30)(var28);
            var28 = var26;
            if(!(var3 == var28)) { _fun0002_ip = 1259; continue _fun0002 }
 1190:
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
            if(!(var3 != var28)) { _fun0002_ip = 1276; continue _fun0002 }
 1243:
            var28 = var27;
            var27 = var1;
            var27 = var28.bind(var10)(var27);
            if(!var27) { _fun0002_ip = 1276; continue _fun0002 }
 1257:
            return var10;
 1259:
            var27 = var26;
            var26 = var1;
            var26 = var27.bind(var10)(var26);
            if(var26) { _fun0002_ip = 1990; continue _fun0002 }
 1276:
            var6 = function handleConfirm() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0003_ip = 90; continue _fun0003 }
 10:
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
 90:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 112; continue _fun0003 }
 100:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0003_ip = 146; continue _fun0003;
 112:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 146:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var25;
            if(!(var3 == var26)) { _fun0002_ip = 1295; continue _fun0002 }
 1288:
            var22 = function() {
                var1 = undefined;
                return var1;
            };
            _fun0002_ip = 1298; continue _fun0002;
 1295:
            var22 = var25;
 1298:
            var20 = var22;
            var26 = _closure1_slot3;
            var25 = var26.isBlockedDomain;
            var22 = var2;
            var22 = var25.bind(var26)(var22);
            if(!(var3 === var22)) { _fun0002_ip = 1935; continue _fun0002 }
 1326:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 18;
            var22 = var26[var22];
            var26 = var25.bind(var10)(var22);
            var25 = var26.shouldShowLinkNotDiscordWarning;
            var22 = var2;
            var22 = var25.bind(var26)(var22);
            if(var22) { _fun0002_ip = 1877; continue _fun0002 }
 1366:
            var22 = var24;
            var25 = 'function';
            var22 = typeof var22;
            if(!(var25 !== var22)) { _fun0002_ip = 1385; continue _fun0002 }
 1380:
            var22 = var24;
            _fun0002_ip = 1389; continue _fun0002;
 1385:
            var22 = var24.bind(var10)();
 1389:
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
            if(var24) { _fun0002_ip = 1454; continue _fun0002 }
 1443:
            var24 = var23;
            var23 = 'https:';
            var22 = var23 === var24;
 1454:
            var18 = !var22;
            if(!var22) { _fun0002_ip = 1492; continue _fun0002 }
 1460:
            if(var19) { _fun0002_ip = 1797; continue _fun0002 }
 1466:
            var23 = _closure1_slot6;
            var22 = var23.isTrustedDomain;
            var19 = var2;
            var19 = var22.bind(var23)(var19);
            if(var19) { _fun0002_ip = 1797; continue _fun0002 }
 1492:
            var19 = var18;
            if(!var19) { _fun0002_ip = 1524; continue _fun0002 }
 1498:
            var23 = _closure1_slot6;
            var22 = var23.isTrustedProtocol;
            var19 = var2;
            var19 = var22.bind(var23)(var19);
            if(var19) { _fun0002_ip = 1797; continue _fun0002 }
 1524:
            var19 = var1;
            if(!(var3 != var19)) { _fun0002_ip = 1544; continue _fun0002 }
 1531:
            var22 = var1;
            var19 = var22.preventDefault;
            var19 = var19.bind(var22)();
 1544:
            if(var18) { _fun0002_ip = 1700; continue _fun0002 }
 1550:
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 20;
            var18 = var22[var18];
            var22 = var19.bind(var10)(var18);
            var19 = var22.punycodeLink;
            var18 = var2;
            var18 = var19.bind(var22)(var18);
            var17 = var18;
            if(!(var3 == var18)) { _fun0002_ip = 1596; continue _fun0002 }
 1591:
            var22 = var2;
            _fun0002_ip = 1602; continue _fun0002;
 1596:
            var22 = var17.displayTarget;
 1602:
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
            _fun0002_ip = 1875; continue _fun0002;
 1700:
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
            _fun0002_ip = 1875; continue _fun0002;
 1797:
            var17 = var1;
            if(!(var3 != var17)) { _fun0002_ip = 1871; continue _fun0002 }
 1804:
            var17 = var8;
            if(!(var3 != var17)) { _fun0002_ip = 1814; continue _fun0002 }
 1811:
            if(var8) { _fun0002_ip = 1871; continue _fun0002 }
 1814:
            if(!var7) { _fun0002_ip = 1875; continue _fun0002 }
 1817:
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
            _fun0002_ip = 1875; continue _fun0002;
 1871:
            var6 = var6.bind(var10)();
 1875:
            return var10;
 1877:
            var6 = var1;
            if(!(var3 != var6)) { _fun0002_ip = 1897; continue _fun0002 }
 1884:
            var7 = var1;
            var6 = var7.preventDefault;
            var6 = var6.bind(var7)();
 1897:
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
 1935:
            var6 = var1;
            if(!(var3 != var6)) { _fun0002_ip = 1955; continue _fun0002 }
 1942:
            var7 = var1;
            var6 = var7.preventDefault;
            var6 = var6.bind(var7)();
 1955:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 17;
            var6 = var8[var6];
            var7 = var7.bind(var10)(var6);
            var6 = var7.show;
            var2 = var6.bind(var7)(var2);
            var2 = undefined;
            return var2;
 1990:
            return var10;
 1992:
            var2 = var1;
            if(!(var3 != var2)) { _fun0002_ip = 2012; continue _fun0002 }
 1999:
            var2 = var1;
            var1 = var2.preventDefault;
            var1 = var1.bind(var2)();
 2012:
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