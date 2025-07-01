// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.intl;
            entity = argBaz;
            if(entity) { _fun00008_ip = 55; continue _fun00007 }
 42:
            entity = zuuluu.formatToPlainString;
            entity = entity.bind(zuuluu)(report, tangon);
            _fun00008_ip = 67; continue _fun00007;
 55:
            michal = zuuluu.formatToParts;
            entity = michal.bind(zuuluu)(report, tangon);
 67:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            option = entity.quest;
            golfie = entity.taskDetails;
            romeon = entity.thirdPartyTaskDetails;
            report = entity.withoutMarkdown;
            foxtra = entity.currentUser;
            verify = entity.withVideoQuestShortDescription;
            oscard = undefined;
            if(!(verify === oscard)) { _fun00010_ip = 47; continue _fun00009 }
 45:
            verify = false;
 47:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            michal = 8;
            michal = entity[michal];
            offset = tangon.bind(oscard)(michal);
            zuuluu = offset.isPremium;
            michal = _closure1_slot6;
            michal = michal.TIER_2;
            zuuluu = zuuluu.bind(offset)(foxtra, michal);
            backup = 7;
            michal = entity[backup];
            foxtra = tangon.bind(oscard)(michal);
            offset = foxtra.getCollectibleQuestRewardDuration;
            michal = option.config;
            michal = offset.bind(foxtra)(michal);
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isConsoleQuest;
            entity = entity.bind(tangon)(option);
            if(!entity) { _fun00010_ip = 177; continue _fun00009 }
 143:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.shouldUsePlayOnDesktopTask;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 2067; continue _fun00009 }
 177:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isConsoleQuest;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 1721; continue _fun00009 }
 211:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.shouldUsePlayOnDesktopTask;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 1373; continue _fun00009 }
 245:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            offset = tangon.bind(oscard)(entity);
            tangon = offset.isTieredRewardCodeQuest;
            entity = {};
            entity['quest'] = option;
            entity = tangon.bind(offset)(entity);
            if(entity) { _fun00010_ip = 1254; continue _fun00009 }
 286:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.hasWatchVideoTasks;
            entity = entity.bind(tangon)(option);
            offset = _closure1_slot0;
            tangon = _closure1_slot1;
            if(entity) { _fun00010_ip = 857; continue _fun00009 }
 328:
            entity = tangon[backup];
            foxtra = offset.bind(oscard)(entity);
            entity = foxtra.hasPlayActivityTask;
            entity = entity.bind(foxtra)(option);
            if(entity) { _fun00010_ip = 715; continue _fun00009 }
 354:
            foxtra = null;
            if(!(foxtra == romeon)) { _fun00010_ip = 705; continue _fun00009 }
 363:
            kiloes = {};
            kiloes['quest'] = option;
            kiloes['taskDetails'] = golfie;
            kiloes['withoutMarkdown'] = report;
            kiloes['hasNitro'] = zuuluu;
            kiloes['collectibleRewardDuration'] = michal;
            entity = kiloes.quest;
            echoed = kiloes.taskDetails;
            sizing = kiloes.withoutMarkdown;
            ctrled = kiloes.hasNitro;
            result = kiloes.collectibleRewardDuration;
            vacuum = _closure1_slot0;
            kiloes = _closure1_slot1;
            output = 6;
            output = kiloes[output];
            output = vacuum.bind(oscard)(output);
            source = output.SharedQuestFields;
            update = source.build;
            output = entity.config;
            output = update.bind(source)(output);
            output = output.defaultRewardNameWithArticle;
            echoed = echoed.targetMinutes;
            update = entity.config;
            update = update.messages;
            update = update.gameTitle;
            source = kiloes[backup];
            config = vacuum.bind(oscard)(source);
            sequen = config.isCollectibleQuestRewardPremiumExtendable;
            source = entity.config;
            source = sequen.bind(config)(source);
            kiloes = kiloes[backup];
            vacuum = vacuum.bind(oscard)(kiloes);
            kiloes = vacuum.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            entity = entity.config;
            entity = kiloes.bind(vacuum)(entity);
            kiloes = _closure1_slot12;
            if(!ctrled) { _fun00010_ip = 551; continue _fun00009 }
 548:
            if(source) { _fun00010_ip = 626; continue _fun00009 }
 551:
            if(source) { _fun00010_ip = 591; continue _fun00009 }
 554:
            if(!(foxtra == result)) { _fun00010_ip = 591; continue _fun00009 }
 558:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            foxtra = 5;
            foxtra = ctrled[foxtra];
            foxtra = source.bind(oscard)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.hkJ+Gh;
            _fun00010_ip = 624; continue _fun00009;
 591:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(oscard)(source);
            source = source.t;
            foxtra = source.BLyDvL;
 624:
            _fun00010_ip = 675; continue _fun00009;
 626:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(oscard)(source);
            source = source.t;
            if(entity) { _fun00010_ip = 664; continue _fun00009 }
 654:
            entity = source.smG9qq;
            _fun00010_ip = 672; continue _fun00009;
 664:
            entity = source.X8Yt//;
 672:
            foxtra = entity;
 675:
            entity = {};
            entity['gameTitle'] = update;
            entity['streamingDurationRequirement'] = echoed;
            entity['duration'] = result;
            entity['questReward'] = output;
            entity = kiloes.bind(oscard)(foxtra, entity, sizing);
            _fun00010_ip = 710; continue _fun00009;
 705:
            entity = romeon.description;
 710:
            _fun00010_ip = 852; continue _fun00009;
 715:
            kiloes = {};
            kiloes['quest'] = option;
            kiloes['taskDetails'] = golfie;
            kiloes['withoutMarkdown'] = report;
            romeon = kiloes.quest;
            foxtra = kiloes.taskDetails;
            sizing = kiloes.withoutMarkdown;
            result = foxtra.targetMinutes;
            foxtra = _closure1_slot0;
            echoed = _closure1_slot1;
            kiloes = 6;
            kiloes = echoed[kiloes];
            kiloes = foxtra.bind(oscard)(kiloes);
            output = kiloes.SharedQuestFields;
            kiloes = output.build;
            romeon = romeon.config;
            romeon = kiloes.bind(output)(romeon);
            output = romeon.defaultRewardNameWithArticle;
            kiloes = _closure1_slot12;
            romeon = 5;
            romeon = echoed[romeon];
            romeon = foxtra.bind(oscard)(romeon);
            romeon = romeon.t;
            foxtra = romeon.VYwSSk;
            romeon = {};
            romeon['streamingDurationRequirement'] = result;
            romeon['questReward'] = output;
            entity = kiloes.bind(oscard)(foxtra, romeon, sizing);
 852:
            _fun00010_ip = 1252; continue _fun00009;
 857:
            romeon = 6;
            tangon = tangon[romeon];
            tangon = offset.bind(oscard)(tangon);
            foxtra = tangon.SharedQuestFields;
            offset = foxtra.build;
            tangon = option.config;
            tangon = offset.bind(foxtra)(tangon);
            offset = tangon.defaultWatchVideoTask;
            kiloes = null;
            foxtra = kiloes == offset;
            tangon = undefined;
            if(foxtra) { _fun00010_ip = 920; continue _fun00009 }
 908:
            offset = offset.messages;
            tangon = offset.videoTitle;
 920:
            offset = kiloes != tangon;
            foxtra = 'video';
            if(!offset) { _fun00010_ip = 934; continue _fun00009 }
 931:
            foxtra = tangon;
 934:
            offset = _closure1_slot0;
            tangon = _closure1_slot1;
            romeon = tangon[romeon];
            romeon = offset.bind(oscard)(romeon);
            output = romeon.SharedQuestFields;
            sizing = output.build;
            romeon = option.config;
            romeon = sizing.bind(output)(romeon);
            romeon = romeon.defaultRewardNameWithArticle;
            sizing = tangon[backup];
            result = offset.bind(oscard)(sizing);
            output = result.isCollectibleQuestRewardPremiumExtendable;
            sizing = option.config;
            sizing = output.bind(result)(sizing);
            tangon = tangon[backup];
            output = offset.bind(oscard)(tangon);
            offset = output.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = option.config;
            tangon = offset.bind(output)(tangon);
            offset = _closure1_slot12;
            if(!sizing) { _fun00010_ip = 1042; continue _fun00009 }
 1036:
            if(zuuluu) { _fun00010_ip = 1180; continue _fun00009 }
 1042:
            if(sizing) { _fun00010_ip = 1145; continue _fun00009 }
 1045:
            if(!(kiloes == michal)) { _fun00010_ip = 1145; continue _fun00009 }
 1049:
            sizing = option.id;
            kiloes = _closure1_slot4;
            if(!(sizing !== kiloes)) { _fun00010_ip = 1110; continue _fun00009 }
 1062:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            if(verify) { _fun00010_ip = 1100; continue _fun00009 }
 1090:
            verify = kiloes.yMsQ7e;
            _fun00010_ip = 1108; continue _fun00009;
 1100:
            verify = kiloes.g+InPD;
 1108:
            _fun00010_ip = 1143; continue _fun00009;
 1110:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            verify = kiloes.Rsd5bG;
 1143:
            _fun00010_ip = 1178; continue _fun00009;
 1145:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            verify = kiloes.W/HkLC;
 1178:
            _fun00010_ip = 1229; continue _fun00009;
 1180:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            if(tangon) { _fun00010_ip = 1218; continue _fun00009 }
 1208:
            tangon = kiloes.vs/xBg;
            _fun00010_ip = 1226; continue _fun00009;
 1218:
            tangon = kiloes.xqX+golfie;
 1226:
            verify = tangon;
 1229:
            tangon = {};
            tangon['videoTitle'] = foxtra;
            tangon['rewardNameWithArticle'] = romeon;
            tangon['duration'] = michal;
            entity = offset.bind(oscard)(verify, tangon, report);
 1252:
            _fun00010_ip = 1368; continue _fun00009;
 1254:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            foxtra = verify.targetMinutes;
            tangon = tangon.config;
            tangon = tangon.messages;
            kiloes = tangon.gameTitle;
            offset = _closure1_slot12;
            verify = _closure1_slot0;
            sizing = _closure1_slot1;
            tangon = 5;
            tangon = sizing[tangon];
            tangon = verify.bind(oscard)(tangon);
            tangon = tangon.t;
            verify = tangon.a/ia7O;
            tangon = {};
            tangon['gameTitle'] = kiloes;
            tangon['streamingDurationRequirement'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 1368:
            _fun00010_ip = 1716; continue _fun00009;
 1373:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            offset['hasNitro'] = zuuluu;
            offset['collectibleRewardDuration'] = michal;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            result = offset.hasNitro;
            kiloes = offset.collectibleRewardDuration;
            echoed = _closure1_slot0;
            offset = _closure1_slot1;
            foxtra = 6;
            foxtra = offset[foxtra];
            foxtra = echoed.bind(oscard)(foxtra);
            output = foxtra.SharedQuestFields;
            sizing = output.build;
            foxtra = tangon.config;
            foxtra = sizing.bind(output)(foxtra);
            foxtra = foxtra.defaultRewardNameWithArticle;
            sizing = verify.targetMinutes;
            verify = tangon.config;
            verify = verify.messages;
            output = verify.gameTitle;
            verify = offset[backup];
            source = echoed.bind(oscard)(verify);
            update = source.isCollectibleQuestRewardPremiumExtendable;
            verify = tangon.config;
            verify = update.bind(source)(verify);
            offset = offset[backup];
            echoed = echoed.bind(oscard)(offset);
            offset = echoed.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = tangon.config;
            tangon = offset.bind(echoed)(tangon);
            offset = _closure1_slot12;
            if(!result) { _fun00010_ip = 1561; continue _fun00009 }
 1558:
            if(verify) { _fun00010_ip = 1638; continue _fun00009 }
 1561:
            if(verify) { _fun00010_ip = 1605; continue _fun00009 }
 1564:
            verify = null;
            if(!(verify == kiloes)) { _fun00010_ip = 1605; continue _fun00009 }
 1570:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            verify = 5;
            verify = echoed[verify];
            verify = result.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.FZL5Q0;
            _fun00010_ip = 1636; continue _fun00009;
 1605:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            verify = result.AwuMRU;
 1636:
            _fun00010_ip = 1683; continue _fun00009;
 1638:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            if(tangon) { _fun00010_ip = 1674; continue _fun00009 }
 1666:
            tangon = result.ziB0HB;
            _fun00010_ip = 1680; continue _fun00009;
 1674:
            tangon = result.eb/SnZ;
 1680:
            verify = tangon;
 1683:
            tangon = {};
            tangon['gameTitle'] = output;
            tangon['streamingDurationRequirement'] = sizing;
            tangon['rewardNameWithArticle'] = foxtra;
            tangon['duration'] = kiloes;
            tangon['questReward'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 1716:
            _fun00010_ip = 2062; continue _fun00009;
 1721:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            offset['hasNitro'] = zuuluu;
            offset['collectibleRewardDuration'] = michal;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            result = offset.hasNitro;
            kiloes = offset.collectibleRewardDuration;
            echoed = _closure1_slot0;
            offset = _closure1_slot1;
            foxtra = 6;
            foxtra = offset[foxtra];
            foxtra = echoed.bind(oscard)(foxtra);
            output = foxtra.SharedQuestFields;
            sizing = output.build;
            foxtra = tangon.config;
            foxtra = sizing.bind(output)(foxtra);
            sizing = foxtra.defaultRewardNameWithArticle;
            foxtra = verify.targetMinutes;
            verify = tangon.config;
            verify = verify.messages;
            output = verify.gameTitle;
            verify = offset[backup];
            source = echoed.bind(oscard)(verify);
            update = source.isCollectibleQuestRewardPremiumExtendable;
            verify = tangon.config;
            verify = update.bind(source)(verify);
            offset = offset[backup];
            echoed = echoed.bind(oscard)(offset);
            offset = echoed.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = tangon.config;
            tangon = offset.bind(echoed)(tangon);
            offset = _closure1_slot12;
            if(!result) { _fun00010_ip = 1909; continue _fun00009 }
 1906:
            if(verify) { _fun00010_ip = 1984; continue _fun00009 }
 1909:
            if(verify) { _fun00010_ip = 1951; continue _fun00009 }
 1912:
            verify = null;
            if(!(verify == kiloes)) { _fun00010_ip = 1951; continue _fun00009 }
 1918:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            verify = 5;
            verify = echoed[verify];
            verify = result.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.NIimTk;
            _fun00010_ip = 1982; continue _fun00009;
 1951:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            verify = result.AwuMRU;
 1982:
            _fun00010_ip = 2029; continue _fun00009;
 1984:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            if(tangon) { _fun00010_ip = 2020; continue _fun00009 }
 2012:
            tangon = result.ziB0HB;
            _fun00010_ip = 2026; continue _fun00009;
 2020:
            tangon = result.eb/SnZ;
 2026:
            verify = tangon;
 2029:
            tangon = {};
            tangon['gameTitle'] = output;
            tangon['targetMinutes'] = foxtra;
            tangon['rewardNameWithArticle'] = sizing;
            tangon['duration'] = kiloes;
            tangon['streamingDurationRequirement'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 2062:
            _fun00010_ip = 2408; continue _fun00009;
 2067:
            tangon = {};
            tangon['quest'] = option;
            tangon['taskDetails'] = golfie;
            tangon['withoutMarkdown'] = report;
            tangon['hasNitro'] = zuuluu;
            tangon['collectibleRewardDuration'] = michal;
            michal = tangon.quest;
            zuuluu = tangon.taskDetails;
            report = tangon.withoutMarkdown;
            romeon = tangon.hasNitro;
            option = tangon.collectibleRewardDuration;
            foxtra = _closure1_slot0;
            tangon = _closure1_slot1;
            golfie = 6;
            golfie = tangon[golfie];
            golfie = foxtra.bind(oscard)(golfie);
            offset = golfie.SharedQuestFields;
            verify = offset.build;
            golfie = michal.config;
            golfie = verify.bind(offset)(golfie);
            verify = golfie.defaultRewardNameWithArticle;
            golfie = zuuluu.targetMinutes;
            zuuluu = michal.config;
            zuuluu = zuuluu.messages;
            offset = zuuluu.gameTitle;
            zuuluu = tangon[backup];
            sizing = foxtra.bind(oscard)(zuuluu);
            kiloes = sizing.isCollectibleQuestRewardPremiumExtendable;
            zuuluu = michal.config;
            zuuluu = kiloes.bind(sizing)(zuuluu);
            tangon = tangon[backup];
            foxtra = foxtra.bind(oscard)(tangon);
            tangon = foxtra.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            michal = michal.config;
            michal = tangon.bind(foxtra)(michal);
            tangon = _closure1_slot12;
            if(!romeon) { _fun00010_ip = 2255; continue _fun00009 }
 2252:
            if(zuuluu) { _fun00010_ip = 2330; continue _fun00009 }
 2255:
            if(zuuluu) { _fun00010_ip = 2297; continue _fun00009 }
 2258:
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00010_ip = 2297; continue _fun00009 }
 2264:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            zuuluu = 5;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NIimTk;
            _fun00010_ip = 2328; continue _fun00009;
 2297:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            romeon = 5;
            romeon = backup[romeon];
            romeon = foxtra.bind(oscard)(romeon);
            romeon = romeon.t;
            zuuluu = romeon.AwuMRU;
 2328:
            _fun00010_ip = 2375; continue _fun00009;
 2330:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 5;
            yankee = foxtra[yankee];
            yankee = romeon.bind(oscard)(yankee);
            yankee = yankee.t;
            if(michal) { _fun00010_ip = 2366; continue _fun00009 }
 2358:
            michal = yankee.ziB0HB;
            _fun00010_ip = 2372; continue _fun00009;
 2366:
            michal = yankee.eb/SnZ;
 2372:
            zuuluu = michal;
 2375:
            michal = {};
            michal['gameTitle'] = offset;
            michal['streamingDurationRequirement'] = golfie;
            michal['rewardNameWithArticle'] = verify;
            michal['duration'] = option;
            michal['targetMinutes'] = golfie;
            entity = tangon.bind(oscard)(zuuluu, michal, report);
 2408:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    tangon = function(argFoo) { // Original name: getQuestsInstructionsToWinReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot13;
            zuuluu = {};
            offset = zuuluu;
            verify = entity;
            tangon = copyDataProperties(offset, verify);
            golfie = entity.currentUser;
            oscard = null;
            if(!(oscard == golfie)) { _fun00012_ip = 47; continue _fun00011 }
 34:
            option = _closure1_slot3;
            tangon = option.getCurrentUser;
            golfie = tangon.bind(option)();
 47:
            tangon = 'currentUser';
            zuuluu[tangon] = golfie;
            tangon = entity.withVideoQuestShortDescription;
            oscard = oscard != tangon;
            if(!oscard) { _fun00012_ip = 72; continue _fun00011 }
 69:
            oscard = tangon;
 72:
            tangon = 'withVideoQuestShortDescription';
            zuuluu[tangon] = oscard;
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = entity.withoutMarkdown;
            entity = zuuluu;
            if(!report) { _fun00012_ip = 109; continue _fun00011 }
 100:
            michal = _closure1_slot8;
            entity = michal.bind(tangon)(zuuluu);
 109:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    entity = function(argFoo) { // Original name: useSimplifiedQuestTaskType
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 7;
                entity = entity[oscard];
                report = undefined;
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isConsoleQuest;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 227; continue _fun00013 }
 49:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.hasPlayActivityTask;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 227; continue _fun00013 }
 83:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                golfie = zuuluu.bind(report)(entity);
                zuuluu = golfie.hasStreamOnDesktopTask;
                entity = {};
                entity['quest'] = tangon;
                entity = zuuluu.bind(golfie)(entity);
                if(entity) { _fun00014_ip = 215; continue _fun00013 }
 121:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.hasWatchVideoTasks;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 203; continue _fun00013 }
 152:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isInGameQuest;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = _closure1_slot9;
                if(entity) { _fun00014_ip = 195; continue _fun00013 }
 187:
                entity = zuuluu.PLAY;
                _fun00014_ip = 201; continue _fun00013;
 195:
                entity = zuuluu.IN_GAME;
 201:
                _fun00014_ip = 213; continue _fun00013;
 203:
                zuuluu = _closure1_slot9;
                entity = zuuluu.WATCH_VIDEO;
 213:
                _fun00014_ip = 225; continue _fun00013;
 215:
                zuuluu = _closure1_slot9;
                entity = zuuluu.STREAM;
 225:
                _fun00014_ip = 237; continue _fun00013;
 227:
                michal = _closure1_slot9;
                entity = michal.PLAY;
 237:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    romeon = 0;
    option = golfie[romeon];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    yankee = 1;
    option = golfie[yankee];
    report = argBaz;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    offset = 2;
    report = golfie[offset];
    report = oscard.bind(entity)(report);
    option = report.ORBS_INTRO_QUEST_ID;
    var _closure1_slot4 = option;
    report = report.QuestVariants;
    var _closure1_slot5 = report;
    verify = 3;
    report = golfie[verify];
    report = oscard.bind(entity)(report);
    report = report.PremiumTypes;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    foxtra = oscard.bind(entity)(report);
    option = foxtra.getQuestLogger;
    report = {};
    report = option.bind(foxtra)(report);
    var _closure1_slot7 = report;
    report = function(argFoo) { // Original name: astNodeToString
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = undefined;
            michal = undefined;
            oscard = undefined;
            golfie = undefined;
 11: // try_start_0
            michal = '';
            zuuluu = entity;
            tangon = 'string';
            zuuluu = typeof zuuluu;
            if(!(tangon !== zuuluu)) { _fun00016_ip = 157; continue _fun00015 }
 32:
            zuuluu = global;
            option = zuuluu.Array;
            tangon = option.isArray;
            zuuluu = entity;
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00016_ip = 78; continue _fun00015 }
 59:
            option = _closure1_slot8;
            zuuluu = entity;
            zuuluu = zuuluu.content;
            zuuluu = option.bind(report)(zuuluu);
 76: // try_end0
            return zuuluu;
 78: // try_start_1
            option = _closure1_slot10;
            zuuluu = entity;
            zuuluu = option.bind(report)(zuuluu);
            golfie = zuuluu;
            zuuluu = zuuluu.bind(report)();
            oscard = zuuluu;
            zuuluu = zuuluu.done;
            if(zuuluu) { _fun00016_ip = 155; continue _fun00015 }
 108:
            zuuluu = oscard;
            zuuluu = zuuluu.value;
            option = michal;
            verify = _closure1_slot8;
            zuuluu = zuuluu.content;
            zuuluu = verify.bind(report)(zuuluu);
            michal = option + zuuluu;
            zuuluu = golfie;
            zuuluu = zuuluu.bind(report)();
            oscard = zuuluu;
            zuuluu = zuuluu.done;
            if(!zuuluu) { _fun00016_ip = 108; continue _fun00015 }
 155: // try_end1
            return michal;
 157:
            return entity;
 159: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=3);
            zuuluu = _closure1_slot7;
            michal = zuuluu.error;
            entity = 'Failed to convert ASTNode to string';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = '';
            return entity;
        }
    };
    var _closure1_slot8 = report;
    report = {};
    report['PLAY'] = romeon;
    option = 'PLAY';
    report[romeon] = option;
    report['STREAM'] = yankee;
    option = 'STREAM';
    report[yankee] = option;
    report['WATCH_VIDEO'] = offset;
    option = 'WATCH_VIDEO';
    report[offset] = option;
    report['IN_GAME'] = verify;
    option = 'IN_GAME';
    report[verify] = option;
    var _closure1_slot9 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/hooks/QuestCopyHooks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: useQuestsInstructionsToWinReward
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golfie = argFoo;
            report = golfie.quest;
            romeon = golfie.questContent;
            yankee = golfie.sourceQuestContent;
            michal = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 9;
            option = oscard[entity];
            zuuluu = undefined;
            offset = michal.bind(zuuluu)(option);
            verify = offset.useConnectedConsoleLinkOnClick;
            option = {};
            option['quest'] = report;
            option['questContent'] = romeon;
            option['sourceQuestContent'] = yankee;
            verify = verify.bind(offset)(option);
            option = 10;
            option = oscard[option];
            romeon = michal.bind(zuuluu)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot3;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = yankee.bind(romeon)(offset, option);
            entity = oscard[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.useThirdPartyTaskDetails;
            report = entity.bind(michal)(report);
            michal = _closure1_slot14;
            entity = {};
            kiloes = entity;
            backup = golfie;
            oscard = copyDataProperties(kiloes, backup);
            oscard = 'connectedConsoleLinkOnClick';
            entity[oscard] = verify;
            verify = false;
            oscard = 'withoutMarkdown';
            entity[oscard] = verify;
            oscard = 'currentUser';
            entity[oscard] = option;
            oscard = null;
            option = oscard != report;
            oscard = undefined;
            if(!option) { _fun00018_ip = 197; continue _fun00017 }
 194:
            oscard = report;
 197:
            report = 'thirdPartyTaskDetails';
            entity[report] = oscard;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 11;
            tangon = oscard[tangon];
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.useIsVideoQuestShortDescriptionEnabled;
            tangon = {};
            golfie = golfie.location;
            tangon['location'] = golfie;
            report = report.bind(oscard)(tangon);
            tangon = 'withVideoQuestShortDescription';
            entity[tangon] = report;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['useQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: usePrimaryCtaCopy
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.quest;
            zuuluu = _closure1_slot15;
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.PLAY;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 255; continue _fun00019 }
 40:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 255; continue _fun00019 }
 57:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.WATCH_VIDEO;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 196; continue _fun00019 }
 74:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.IN_GAME;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 90; continue _fun00019 }
 88:
            return report;
 90:
            michal = michal.config;
            tangon = michal.features;
            zuuluu = tangon.includes;
            michal = _closure1_slot5;
            michal = michal.START_QUEST_CTA;
            michal = zuuluu.bind(tangon)(michal);
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            tangon = option[zuuluu];
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00020_ip = 181; continue _fun00019 }
 168:
            michal = zuuluu.l7E81t;
            michal = tangon.bind(oscard)(michal);
            _fun00020_ip = 194; continue _fun00019;
 181:
            zuuluu = zuuluu.ToGcxM;
            michal = tangon.bind(oscard)(zuuluu);
 194:
            return michal;
 196:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.umdNio;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 255:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.l7E81t;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['usePrimaryCtaCopy'] = tangon;
    tangon = function(argFoo) { // Original name: usePremiumExtendableCopy
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot2;
            report = oscard.useMemo;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isCollectibleQuestRewardPremiumExtendable;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(michal, tangon);
            oscard = _closure1_slot2;
            report = oscard.useMemo;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = report.bind(oscard)(entity, michal);
            entity = null;
            if(!tangon) { _fun00022_ip = 153; continue _fun00021 }
 73:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00022_ip = 137; continue _fun00021 }
 122:
            michal = zuuluu.GYGb3N;
            michal = tangon.bind(report)(michal);
            _fun00022_ip = 150; continue _fun00021;
 137:
            zuuluu = zuuluu.hh7Rb2;
            michal = tangon.bind(report)(zuuluu);
 150:
            entity = michal;
 153:
            return entity;
        }
    };
    zuuluu['usePremiumExtendableCopy'] = tangon;
    michal = function(argFoo) { // Original name: useClaimRewardCopy
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = arguments[1];
            oscard = undefined;
            if(!(report === oscard)) { _fun00024_ip = 11; continue _fun00023 }
 9:
            report = true;
 11:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 12;
            entity = tangon[entity];
            tangon = zuuluu.bind(oscard)(entity);
            zuuluu = tangon.useIsQuestClaimRewardExclamationEnabled;
            entity = {};
            golfie = argFoo;
            entity['location'] = golfie;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(entity);
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00024_ip = 121; continue _fun00023 }
 106:
            entity = michal.cfY4PD;
            entity = zuuluu.bind(tangon)(entity);
            _fun00024_ip = 134; continue _fun00023;
 121:
            michal = michal.Av9jcX;
            entity = zuuluu.bind(tangon)(michal);
 134:
            return entity;
        }
    };
    zuuluu['useClaimRewardCopy'] = michal;
    return entity;
})();