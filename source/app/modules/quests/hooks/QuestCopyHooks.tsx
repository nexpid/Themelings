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
            verify = _closure1_slot9;
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
            golfie = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            oscard = michal.quest;
            golfie = michal.taskDetails;
            verify = michal.thirdPartyTaskDetails;
            report = michal.withoutMarkdown;
            entity = michal.withSimplifiedCopy;
            foxtra = michal.currentUser;
            if(!entity) { _fun00010_ip = 107; continue _fun00009 }
 42:
            michal = _closure1_slot13;
            tangon = undefined;
            zuuluu = michal.bind(tangon)(oscard);
            michal = _closure1_slot7;
            michal = michal.PLAY;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2618; continue _fun00009 }
 73:
            michal = _closure1_slot7;
            michal = michal.STREAM;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2537; continue _fun00009 }
 90:
            michal = _closure1_slot7;
            michal = michal.WATCH_VIDEO;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2425; continue _fun00009 }
 107:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = 7;
            zuuluu = michal[zuuluu];
            yankee = undefined;
            romeon = offset.bind(yankee)(zuuluu);
            option = romeon.isPremium;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.TIER_2;
            option = option.bind(romeon)(foxtra, zuuluu);
            echoed = 6;
            zuuluu = michal[echoed];
            foxtra = offset.bind(yankee)(zuuluu);
            romeon = foxtra.getCollectibleQuestRewardDuration;
            zuuluu = oscard.config;
            zuuluu = romeon.bind(foxtra)(zuuluu);
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.isConsoleQuest;
            michal = michal.bind(offset)(oscard);
            if(!michal) { _fun00010_ip = 239; continue _fun00009 }
 205:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.shouldUsePlayOnDesktopTask;
            michal = michal.bind(offset)(oscard);
            if(michal) { _fun00010_ip = 2070; continue _fun00009 }
 239:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.isConsoleQuest;
            michal = michal.bind(offset)(oscard);
            if(michal) { _fun00010_ip = 1712; continue _fun00009 }
 273:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.shouldUsePlayOnDesktopTask;
            michal = michal.bind(offset)(oscard);
            if(michal) { _fun00010_ip = 1352; continue _fun00009 }
 307:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            romeon = offset.bind(yankee)(michal);
            offset = romeon.isTieredRewardCodeQuest;
            michal = {};
            michal['quest'] = oscard;
            michal = offset.bind(romeon)(michal);
            if(michal) { _fun00010_ip = 1233; continue _fun00009 }
 348:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.hasWatchVideoTasks;
            michal = michal.bind(offset)(oscard);
            if(michal) { _fun00010_ip = 943; continue _fun00009 }
 382:
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[echoed];
            offset = offset.bind(yankee)(michal);
            michal = offset.hasPlayActivityTask;
            michal = michal.bind(offset)(oscard);
            if(michal) { _fun00010_ip = 789; continue _fun00009 }
 416:
            offset = null;
            if(!(offset == verify)) { _fun00010_ip = 779; continue _fun00009 }
 425:
            romeon = {};
            romeon['quest'] = oscard;
            romeon['taskDetails'] = golfie;
            romeon['withoutMarkdown'] = report;
            romeon['hasNitro'] = option;
            romeon['collectibleRewardDuration'] = zuuluu;
            michal = romeon.quest;
            output = romeon.taskDetails;
            foxtra = romeon.withoutMarkdown;
            source = romeon.hasNitro;
            kiloes = romeon.collectibleRewardDuration;
            ctrled = _closure1_slot0;
            romeon = _closure1_slot1;
            backup = 5;
            backup = romeon[backup];
            backup = ctrled.bind(yankee)(backup);
            update = backup.SharedQuestFields;
            result = update.build;
            backup = michal.config;
            backup = result.bind(update)(backup);
            backup = backup.defaultReward;
            backup = backup.messages;
            backup = backup.nameWithArticle;
            output = output.targetMinutes;
            result = michal.config;
            result = result.messages;
            result = result.gameTitle;
            update = romeon[echoed];
            sequen = ctrled.bind(yankee)(update);
            vacuum = sequen.isCollectibleQuestRewardPremiumExtendable;
            update = michal.config;
            update = vacuum.bind(sequen)(update);
            romeon = romeon[echoed];
            ctrled = ctrled.bind(yankee)(romeon);
            romeon = ctrled.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            michal = michal.config;
            michal = romeon.bind(ctrled)(michal);
            romeon = _closure1_slot10;
            if(!source) { _fun00010_ip = 625; continue _fun00009 }
 622:
            if(update) { _fun00010_ip = 700; continue _fun00009 }
 625:
            if(update) { _fun00010_ip = 665; continue _fun00009 }
 628:
            if(!(offset == kiloes)) { _fun00010_ip = 665; continue _fun00009 }
 632:
            update = _closure1_slot0;
            source = _closure1_slot1;
            offset = 4;
            offset = source[offset];
            offset = update.bind(yankee)(offset);
            offset = offset.t;
            offset = offset.hkJ+Gh;
            _fun00010_ip = 698; continue _fun00009;
 665:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            offset = update.BLyDvL;
 698:
            _fun00010_ip = 749; continue _fun00009;
 700:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            if(michal) { _fun00010_ip = 738; continue _fun00009 }
 728:
            michal = update.smG9qq;
            _fun00010_ip = 746; continue _fun00009;
 738:
            michal = update.X8Yt//;
 746:
            offset = michal;
 749:
            michal = {};
            michal['gameTitle'] = result;
            michal['streamingDurationRequirement'] = output;
            michal['duration'] = kiloes;
            michal['questReward'] = backup;
            michal = romeon.bind(yankee)(offset, michal, foxtra);
            _fun00010_ip = 784; continue _fun00009;
 779:
            michal = verify.description;
 784:
            _fun00010_ip = 938; continue _fun00009;
 789:
            romeon = {};
            romeon['quest'] = oscard;
            romeon['taskDetails'] = golfie;
            romeon['withoutMarkdown'] = report;
            verify = romeon.quest;
            offset = romeon.taskDetails;
            foxtra = romeon.withoutMarkdown;
            kiloes = offset.targetMinutes;
            offset = _closure1_slot0;
            output = _closure1_slot1;
            romeon = 5;
            romeon = output[romeon];
            romeon = offset.bind(yankee)(romeon);
            backup = romeon.SharedQuestFields;
            romeon = backup.build;
            verify = verify.config;
            verify = romeon.bind(backup)(verify);
            verify = verify.defaultReward;
            verify = verify.messages;
            backup = verify.nameWithArticle;
            romeon = _closure1_slot10;
            verify = 4;
            verify = output[verify];
            verify = offset.bind(yankee)(verify);
            verify = verify.t;
            offset = verify.VYwSSk;
            verify = {};
            verify['streamingDurationRequirement'] = kiloes;
            verify['questReward'] = backup;
            michal = romeon.bind(yankee)(offset, verify, foxtra);
 938:
            _fun00010_ip = 1231; continue _fun00009;
 943:
            verify = oscard.config;
            romeon = verify.videoMetadata;
            offset = null;
            foxtra = offset == romeon;
            verify = undefined;
            if(foxtra) { _fun00010_ip = 977; continue _fun00009 }
 965:
            romeon = romeon.messages;
            verify = romeon.videoTitle;
 977:
            offset = offset != verify;
            backup = 'video';
            if(!offset) { _fun00010_ip = 991; continue _fun00009 }
 988:
            backup = verify;
 991:
            romeon = _closure1_slot0;
            verify = _closure1_slot1;
            offset = 5;
            offset = verify[offset];
            offset = romeon.bind(yankee)(offset);
            kiloes = offset.SharedQuestFields;
            foxtra = kiloes.build;
            offset = oscard.config;
            offset = foxtra.bind(kiloes)(offset);
            offset = offset.defaultReward;
            offset = offset.messages;
            foxtra = offset.nameWithArticle;
            offset = verify[echoed];
            output = romeon.bind(yankee)(offset);
            kiloes = output.isCollectibleQuestRewardPremiumExtendable;
            offset = oscard.config;
            offset = kiloes.bind(output)(offset);
            verify = verify[echoed];
            kiloes = romeon.bind(yankee)(verify);
            romeon = kiloes.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            verify = oscard.config;
            verify = romeon.bind(kiloes)(verify);
            romeon = _closure1_slot10;
            if(!offset) { _fun00010_ip = 1111; continue _fun00009 }
 1108:
            if(option) { _fun00010_ip = 1159; continue _fun00009 }
 1111:
            output = _closure1_slot0;
            result = _closure1_slot1;
            kiloes = 4;
            kiloes = result[kiloes];
            kiloes = output.bind(yankee)(kiloes);
            kiloes = kiloes.t;
            if(offset) { _fun00010_ip = 1149; continue _fun00009 }
 1139:
            offset = kiloes.yMsQ7e;
            _fun00010_ip = 1157; continue _fun00009;
 1149:
            offset = kiloes.W/HkLC;
 1157:
            _fun00010_ip = 1208; continue _fun00009;
 1159:
            output = _closure1_slot0;
            result = _closure1_slot1;
            kiloes = 4;
            kiloes = result[kiloes];
            kiloes = output.bind(yankee)(kiloes);
            kiloes = kiloes.t;
            if(verify) { _fun00010_ip = 1197; continue _fun00009 }
 1187:
            verify = kiloes.vs/xBg;
            _fun00010_ip = 1205; continue _fun00009;
 1197:
            verify = kiloes.xqX+golfie;
 1205:
            offset = verify;
 1208:
            verify = {};
            verify['videoTitle'] = backup;
            verify['rewardNameWithArticle'] = foxtra;
            verify['duration'] = zuuluu;
            michal = romeon.bind(yankee)(offset, verify, report);
 1231:
            _fun00010_ip = 1347; continue _fun00009;
 1233:
            romeon = {};
            romeon['quest'] = oscard;
            romeon['taskDetails'] = golfie;
            romeon['withoutMarkdown'] = report;
            verify = romeon.quest;
            offset = romeon.taskDetails;
            foxtra = romeon.withoutMarkdown;
            backup = offset.targetMinutes;
            verify = verify.config;
            verify = verify.messages;
            kiloes = verify.gameTitle;
            romeon = _closure1_slot10;
            offset = _closure1_slot0;
            output = _closure1_slot1;
            verify = 4;
            verify = output[verify];
            verify = offset.bind(yankee)(verify);
            verify = verify.t;
            offset = verify.a/ia7O;
            verify = {};
            verify['gameTitle'] = kiloes;
            verify['streamingDurationRequirement'] = backup;
            michal = romeon.bind(yankee)(offset, verify, foxtra);
 1347:
            _fun00010_ip = 1707; continue _fun00009;
 1352:
            romeon = {};
            romeon['quest'] = oscard;
            romeon['taskDetails'] = golfie;
            romeon['withoutMarkdown'] = report;
            romeon['hasNitro'] = option;
            romeon['collectibleRewardDuration'] = zuuluu;
            verify = romeon.quest;
            offset = romeon.taskDetails;
            foxtra = romeon.withoutMarkdown;
            update = romeon.hasNitro;
            kiloes = romeon.collectibleRewardDuration;
            source = _closure1_slot0;
            romeon = _closure1_slot1;
            backup = 5;
            backup = romeon[backup];
            backup = source.bind(yankee)(backup);
            result = backup.SharedQuestFields;
            output = result.build;
            backup = verify.config;
            backup = output.bind(result)(backup);
            backup = backup.defaultReward;
            backup = backup.messages;
            backup = backup.nameWithArticle;
            output = offset.targetMinutes;
            offset = verify.config;
            offset = offset.messages;
            result = offset.gameTitle;
            offset = romeon[echoed];
            vacuum = source.bind(yankee)(offset);
            ctrled = vacuum.isCollectibleQuestRewardPremiumExtendable;
            offset = verify.config;
            offset = ctrled.bind(vacuum)(offset);
            romeon = romeon[echoed];
            source = source.bind(yankee)(romeon);
            romeon = source.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            verify = verify.config;
            verify = romeon.bind(source)(verify);
            romeon = _closure1_slot10;
            if(!update) { _fun00010_ip = 1552; continue _fun00009 }
 1549:
            if(offset) { _fun00010_ip = 1629; continue _fun00009 }
 1552:
            if(offset) { _fun00010_ip = 1596; continue _fun00009 }
 1555:
            offset = null;
            if(!(offset == kiloes)) { _fun00010_ip = 1596; continue _fun00009 }
 1561:
            update = _closure1_slot0;
            source = _closure1_slot1;
            offset = 4;
            offset = source[offset];
            offset = update.bind(yankee)(offset);
            offset = offset.t;
            offset = offset.FZL5Q0;
            _fun00010_ip = 1627; continue _fun00009;
 1596:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            offset = update.AwuMRU;
 1627:
            _fun00010_ip = 1674; continue _fun00009;
 1629:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            if(verify) { _fun00010_ip = 1665; continue _fun00009 }
 1657:
            verify = update.ziB0HB;
            _fun00010_ip = 1671; continue _fun00009;
 1665:
            verify = update.eb/SnZ;
 1671:
            offset = verify;
 1674:
            verify = {};
            verify['gameTitle'] = result;
            verify['streamingDurationRequirement'] = output;
            verify['rewardNameWithArticle'] = backup;
            verify['duration'] = kiloes;
            verify['questReward'] = backup;
            michal = romeon.bind(yankee)(offset, verify, foxtra);
 1707:
            _fun00010_ip = 2065; continue _fun00009;
 1712:
            romeon = {};
            romeon['quest'] = oscard;
            romeon['taskDetails'] = golfie;
            romeon['withoutMarkdown'] = report;
            romeon['hasNitro'] = option;
            romeon['collectibleRewardDuration'] = zuuluu;
            verify = romeon.quest;
            offset = romeon.taskDetails;
            foxtra = romeon.withoutMarkdown;
            update = romeon.hasNitro;
            kiloes = romeon.collectibleRewardDuration;
            source = _closure1_slot0;
            romeon = _closure1_slot1;
            backup = 5;
            backup = romeon[backup];
            backup = source.bind(yankee)(backup);
            result = backup.SharedQuestFields;
            output = result.build;
            backup = verify.config;
            backup = output.bind(result)(backup);
            backup = backup.defaultReward;
            backup = backup.messages;
            output = backup.nameWithArticle;
            backup = offset.targetMinutes;
            offset = verify.config;
            offset = offset.messages;
            result = offset.gameTitle;
            offset = romeon[echoed];
            vacuum = source.bind(yankee)(offset);
            ctrled = vacuum.isCollectibleQuestRewardPremiumExtendable;
            offset = verify.config;
            offset = ctrled.bind(vacuum)(offset);
            romeon = romeon[echoed];
            source = source.bind(yankee)(romeon);
            romeon = source.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            verify = verify.config;
            verify = romeon.bind(source)(verify);
            romeon = _closure1_slot10;
            if(!update) { _fun00010_ip = 1912; continue _fun00009 }
 1909:
            if(offset) { _fun00010_ip = 1987; continue _fun00009 }
 1912:
            if(offset) { _fun00010_ip = 1954; continue _fun00009 }
 1915:
            offset = null;
            if(!(offset == kiloes)) { _fun00010_ip = 1954; continue _fun00009 }
 1921:
            update = _closure1_slot0;
            source = _closure1_slot1;
            offset = 4;
            offset = source[offset];
            offset = update.bind(yankee)(offset);
            offset = offset.t;
            offset = offset.NIimTk;
            _fun00010_ip = 1985; continue _fun00009;
 1954:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            offset = update.AwuMRU;
 1985:
            _fun00010_ip = 2032; continue _fun00009;
 1987:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 4;
            update = ctrled[update];
            update = source.bind(yankee)(update);
            update = update.t;
            if(verify) { _fun00010_ip = 2023; continue _fun00009 }
 2015:
            verify = update.ziB0HB;
            _fun00010_ip = 2029; continue _fun00009;
 2023:
            verify = update.eb/SnZ;
 2029:
            offset = verify;
 2032:
            verify = {};
            verify['gameTitle'] = result;
            verify['targetMinutes'] = backup;
            verify['rewardNameWithArticle'] = output;
            verify['duration'] = kiloes;
            verify['streamingDurationRequirement'] = backup;
            michal = romeon.bind(yankee)(offset, verify, foxtra);
 2065:
            _fun00010_ip = 2423; continue _fun00009;
 2070:
            verify = {};
            verify['quest'] = oscard;
            verify['taskDetails'] = golfie;
            verify['withoutMarkdown'] = report;
            verify['hasNitro'] = option;
            verify['collectibleRewardDuration'] = zuuluu;
            zuuluu = verify.quest;
            option = verify.taskDetails;
            offset = verify.withoutMarkdown;
            output = verify.hasNitro;
            foxtra = verify.collectibleRewardDuration;
            result = _closure1_slot0;
            verify = _closure1_slot1;
            romeon = 5;
            romeon = verify[romeon];
            romeon = result.bind(yankee)(romeon);
            kiloes = romeon.SharedQuestFields;
            backup = kiloes.build;
            romeon = zuuluu.config;
            romeon = backup.bind(kiloes)(romeon);
            romeon = romeon.defaultReward;
            romeon = romeon.messages;
            backup = romeon.nameWithArticle;
            romeon = option.targetMinutes;
            option = zuuluu.config;
            option = option.messages;
            kiloes = option.gameTitle;
            option = verify[echoed];
            source = result.bind(yankee)(option);
            update = source.isCollectibleQuestRewardPremiumExtendable;
            option = zuuluu.config;
            option = update.bind(source)(option);
            verify = verify[echoed];
            result = result.bind(yankee)(verify);
            verify = result.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            zuuluu = zuuluu.config;
            zuuluu = verify.bind(result)(zuuluu);
            verify = _closure1_slot10;
            if(!output) { _fun00010_ip = 2270; continue _fun00009 }
 2267:
            if(option) { _fun00010_ip = 2345; continue _fun00009 }
 2270:
            if(option) { _fun00010_ip = 2312; continue _fun00009 }
 2273:
            option = null;
            if(!(option == foxtra)) { _fun00010_ip = 2312; continue _fun00009 }
 2279:
            output = _closure1_slot0;
            result = _closure1_slot1;
            option = 4;
            option = result[option];
            option = output.bind(yankee)(option);
            option = option.t;
            option = option.NIimTk;
            _fun00010_ip = 2343; continue _fun00009;
 2312:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            output = 4;
            output = echoed[output];
            output = result.bind(yankee)(output);
            output = output.t;
            option = output.AwuMRU;
 2343:
            _fun00010_ip = 2390; continue _fun00009;
 2345:
            output = _closure1_slot0;
            result = _closure1_slot1;
            sizing = 4;
            sizing = result[sizing];
            sizing = output.bind(yankee)(sizing);
            sizing = sizing.t;
            if(zuuluu) { _fun00010_ip = 2381; continue _fun00009 }
 2373:
            zuuluu = sizing.ziB0HB;
            _fun00010_ip = 2387; continue _fun00009;
 2381:
            zuuluu = sizing.eb/SnZ;
 2387:
            option = zuuluu;
 2390:
            zuuluu = {};
            zuuluu['gameTitle'] = kiloes;
            zuuluu['streamingDurationRequirement'] = romeon;
            zuuluu['rewardNameWithArticle'] = backup;
            zuuluu['duration'] = foxtra;
            zuuluu['targetMinutes'] = romeon;
            michal = verify.bind(yankee)(option, zuuluu, offset);
 2423:
            return michal;
 2425:
            option = _closure1_slot10;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 4;
            michal = verify[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.zus71N;
            michal = {};
            verify = golfie.targetMinutes;
            michal['targetMinutes'] = verify;
            verify = oscard.config;
            yankee = verify.videoMetadata;
            verify = null;
            romeon = verify == yankee;
            offset = undefined;
            if(romeon) { _fun00010_ip = 2509; continue _fun00009 }
 2497:
            yankee = yankee.messages;
            offset = yankee.videoTitle;
 2509:
            yankee = verify != offset;
            verify = 'video';
            if(!yankee) { _fun00010_ip = 2523; continue _fun00009 }
 2520:
            verify = offset;
 2523:
            michal['videoTitle'] = verify;
            michal = option.bind(tangon)(zuuluu, michal, report);
            return michal;
 2537:
            option = _closure1_slot10;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 4;
            michal = verify[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.NmzoDg;
            michal = {};
            verify = golfie.targetMinutes;
            michal['targetMinutes'] = verify;
            verify = oscard.config;
            verify = verify.messages;
            verify = verify.gameTitle;
            michal['gameTitle'] = verify;
            michal = option.bind(tangon)(zuuluu, michal, report);
            return michal;
 2618:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot0;
            option = _closure1_slot1;
            entity = 4;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.goA6o6;
            entity = {};
            golfie = golfie.targetMinutes;
            entity['targetMinutes'] = golfie;
            oscard = oscard.config;
            oscard = oscard.messages;
            oscard = oscard.gameTitle;
            entity['gameTitle'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tangon = function(argFoo) { // Original name: getQuestsInstructionsToWinReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot11;
            zuuluu = {};
            verify = zuuluu;
            option = entity;
            tangon = copyDataProperties(verify, option);
            oscard = entity.currentUser;
            tangon = null;
            if(!(tangon == oscard)) { _fun00012_ip = 47; continue _fun00011 }
 34:
            golfie = _closure1_slot3;
            tangon = golfie.getCurrentUser;
            oscard = tangon.bind(golfie)();
 47:
            tangon = 'currentUser';
            zuuluu[tangon] = oscard;
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = entity.withoutMarkdown;
            entity = zuuluu;
            if(!report) { _fun00012_ip = 84; continue _fun00011 }
 75:
            michal = _closure1_slot6;
            entity = michal.bind(tangon)(zuuluu);
 84:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    entity = function(argFoo) { // Original name: getSimplifiedQuestTaskType
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 6;
            entity = entity[oscard];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isConsoleQuest;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 177; continue _fun00013 }
 45:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.hasPlayActivityTask;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 177; continue _fun00013 }
 76:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            golfie = zuuluu.bind(report)(entity);
            zuuluu = golfie.hasStreamOnDesktopTask;
            entity = {};
            entity['quest'] = tangon;
            entity = zuuluu.bind(golfie)(entity);
            if(entity) { _fun00014_ip = 165; continue _fun00013 }
 114:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.hasWatchVideoTasks;
            entity = entity.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot7;
            if(entity) { _fun00014_ip = 157; continue _fun00013 }
 149:
            entity = zuuluu.PLAY;
            _fun00014_ip = 163; continue _fun00013;
 157:
            entity = zuuluu.WATCH_VIDEO;
 163:
            _fun00014_ip = 175; continue _fun00013;
 165:
            zuuluu = _closure1_slot7;
            entity = zuuluu.STREAM;
 175:
            _fun00014_ip = 187; continue _fun00013;
 177:
            michal = _closure1_slot7;
            entity = michal.PLAY;
 187:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    yankee = 0;
    option = golfie[yankee];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    offset = 1;
    option = golfie[offset];
    report = argBaz;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    verify = 2;
    report = golfie[verify];
    report = oscard.bind(entity)(report);
    report = report.PremiumTypes;
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    romeon = oscard.bind(entity)(report);
    option = romeon.getQuestLogger;
    report = {};
    report = option.bind(romeon)(report);
    var _closure1_slot5 = report;
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
            option = _closure1_slot6;
            zuuluu = entity;
            zuuluu = zuuluu.content;
            zuuluu = option.bind(report)(zuuluu);
 76: // try_end0
            return zuuluu;
 78: // try_start_1
            option = _closure1_slot8;
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
            verify = _closure1_slot6;
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
            zuuluu = _closure1_slot5;
            michal = zuuluu.error;
            entity = 'Failed to convert ASTNode to string';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = '';
            return entity;
        }
    };
    var _closure1_slot6 = report;
    report = {};
    report['PLAY'] = yankee;
    option = 'PLAY';
    report[yankee] = option;
    report['STREAM'] = offset;
    option = 'STREAM';
    report[offset] = option;
    report['WATCH_VIDEO'] = verify;
    option = 'WATCH_VIDEO';
    report[verify] = option;
    var _closure1_slot7 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/hooks/QuestCopyHooks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: useQuestsInstructionsToWinReward
        tangon = argFoo;
        yankee = tangon.quest;
        option = tangon.location;
        offset = tangon.questContent;
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        michal = 8;
        michal = golfie[michal];
        zuuluu = undefined;
        verify = oscard.bind(zuuluu)(michal);
        report = verify.useConnectedConsoleLinkOnClick;
        michal = {};
        michal['quest'] = yankee;
        michal['questContent'] = offset;
        verify = report.bind(verify)(michal);
        michal = 9;
        michal = golfie[michal];
        yankee = oscard.bind(zuuluu)(michal);
        offset = yankee.useStateFromStores;
        michal = _closure1_slot3;
        report = new Array(1);
        report[0] = michal;
        michal = function() {
            michal = _closure1_slot3;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            return entity;
        };
        report = offset.bind(yankee)(report, michal);
        michal = _closure1_slot12;
        entity = {};
        foxtra = entity;
        romeon = tangon;
        tangon = copyDataProperties(foxtra, romeon);
        tangon = 'connectedConsoleLinkOnClick';
        entity[tangon] = verify;
        verify = false;
        tangon = 'withoutMarkdown';
        entity[tangon] = verify;
        tangon = 10;
        tangon = golfie[tangon];
        golfie = oscard.bind(zuuluu)(tangon);
        oscard = golfie.useIsQuestBarCopySimplificationEnabled;
        tangon = {};
        tangon['location'] = option;
        oscard = oscard.bind(golfie)(tangon);
        tangon = 'withSimplifiedCopy';
        entity[tangon] = oscard;
        tangon = 'currentUser';
        entity[tangon] = report;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: usePrimaryCtaCopy
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.quest;
            option = entity.location;
            golfie = entity.autoTrackExposure;
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00018_ip = 28; continue _fun00017 }
 26:
            golfie = true;
 28:
            entity = function(argFoo) { // Original name: useSimplifiedQuestTaskType
                report = argFoo;
                var _closure3_slot0 = report;
                tangon = _closure1_slot2;
                zuuluu = tangon.useMemo;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    zuuluu = _closure1_slot13;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            tangon = entity.bind(oscard)(michal);
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 10;
            entity = report[entity];
            report = zuuluu.bind(oscard)(entity);
            zuuluu = report.useIsQuestBarCopySimplificationEnabled;
            entity = {};
            entity['location'] = option;
            entity['autoTrackExposure'] = golfie;
            entity = zuuluu.bind(report)(entity);
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.PLAY;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 266; continue _fun00017 }
 102:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 191; continue _fun00017 }
 116:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.WATCH_VIDEO;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 132; continue _fun00017 }
 130:
            return oscard;
 132:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 4;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.umdNio;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 191:
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 4;
            report = option[zuuluu];
            report = tangon.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.t;
            if(entity) { _fun00018_ip = 251; continue _fun00017 }
 238:
            zuuluu = tangon.l7E81t;
            zuuluu = report.bind(golfie)(zuuluu);
            _fun00018_ip = 264; continue _fun00017;
 251:
            tangon = tangon.hyrGU1;
            zuuluu = report.bind(golfie)(tangon);
 264:
            return zuuluu;
 266:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00018_ip = 326; continue _fun00017 }
 313:
            entity = michal.l7E81t;
            entity = zuuluu.bind(tangon)(entity);
            _fun00018_ip = 339; continue _fun00017;
 326:
            michal = michal.Y7LIPT;
            entity = zuuluu.bind(tangon)(michal);
 339:
            return entity;
        }
    };
    zuuluu['usePrimaryCtaCopy'] = tangon;
    michal = function(argFoo) { // Original name: usePremiumExtendableCopy
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
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
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isCollectibleQuestRewardPremiumExtendable;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(michal, tangon);
            report = oscard.useMemo;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 6;
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
            if(!tangon) { _fun00020_ip = 149; continue _fun00019 }
 69:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 4;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00020_ip = 133; continue _fun00019 }
 118:
            michal = zuuluu.GYGb3N;
            michal = tangon.bind(report)(michal);
            _fun00020_ip = 146; continue _fun00019;
 133:
            zuuluu = zuuluu.hh7Rb2;
            michal = tangon.bind(report)(zuuluu);
 146:
            entity = michal;
 149:
            return entity;
        }
    };
    zuuluu['usePremiumExtendableCopy'] = michal;
    return entity;
})();