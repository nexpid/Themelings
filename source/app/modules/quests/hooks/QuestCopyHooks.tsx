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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot7;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscard = entity.quest;
            golfie = entity.taskDetails;
            zuuluu = entity.thirdPartyTaskDetails;
            report = entity.withoutMarkdown;
            entity = entity.withSimplifiedCopy;
            if(!entity) { _fun00010_ip = 101; continue _fun00009 }
 36:
            michal = _closure1_slot11;
            tangon = undefined;
            option = michal.bind(tangon)(oscard);
            michal = _closure1_slot5;
            michal = michal.PLAY;
            if(!(michal !== option)) { _fun00010_ip = 2119; continue _fun00009 }
 67:
            michal = _closure1_slot5;
            michal = michal.STREAM;
            if(!(michal !== option)) { _fun00010_ip = 2038; continue _fun00009 }
 84:
            michal = _closure1_slot5;
            michal = michal.WATCH_VIDEO;
            if(!(michal !== option)) { _fun00010_ip = 1926; continue _fun00009 }
 101:
            michal = oscard.config;
            michal = michal.messages;
            backup = michal.gameTitle;
            foxtra = golfie.targetMinutes;
            verify = _closure1_slot0;
            option = _closure1_slot1;
            output = 4;
            yankee = option[output];
            offset = undefined;
            kiloes = verify.bind(offset)(yankee);
            romeon = kiloes.getCollectibleQuestRewardDuration;
            yankee = oscard.config;
            romeon = romeon.bind(kiloes)(yankee);
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.isConsoleQuest;
            option = option.bind(verify)(oscard);
            if(!option) { _fun00010_ip = 222; continue _fun00009 }
 188:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.shouldUsePlayOnDesktopTask;
            option = option.bind(verify)(oscard);
            if(option) { _fun00010_ip = 1612; continue _fun00009 }
 222:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.isConsoleQuest;
            option = option.bind(verify)(oscard);
            if(option) { _fun00010_ip = 1334; continue _fun00009 }
 256:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.shouldUsePlayOnDesktopTask;
            option = option.bind(verify)(oscard);
            if(option) { _fun00010_ip = 1045; continue _fun00009 }
 290:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            yankee = verify.bind(offset)(option);
            verify = yankee.isTieredRewardCodeQuest;
            option = {};
            option['quest'] = oscard;
            option = verify.bind(yankee)(option);
            if(option) { _fun00010_ip = 929; continue _fun00009 }
 331:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.hasWatchVideoTasks;
            option = option.bind(verify)(oscard);
            if(option) { _fun00010_ip = 771; continue _fun00009 }
 365:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.hasPlayActivityTask;
            option = option.bind(verify)(oscard);
            if(option) { _fun00010_ip = 620; continue _fun00009 }
 399:
            option = null;
            if(!(option == zuuluu)) { _fun00010_ip = 613; continue _fun00009 }
 408:
            yankee = _closure1_slot0;
            verify = _closure1_slot1;
            verify = verify[output];
            kiloes = yankee.bind(offset)(verify);
            yankee = kiloes.isCollectibleQuestRewardPremiumExtendable;
            verify = oscard.config;
            yankee = yankee.bind(kiloes)(verify);
            kiloes = _closure1_slot0;
            verify = _closure1_slot1;
            sizing = 2;
            verify = verify[sizing];
            verify = kiloes.bind(offset)(verify);
            verify = verify.t;
            if(yankee) { _fun00010_ip = 479; continue _fun00009 }
 469:
            yankee = verify.BLyDvL;
            _fun00010_ip = 487; continue _fun00009;
 479:
            yankee = verify.KYP2pa;
 487:
            verify = _closure1_slot8;
            if(!(option == romeon)) { _fun00010_ip = 523; continue _fun00009 }
 495:
            kiloes = _closure1_slot0;
            option = _closure1_slot1;
            option = option[sizing];
            option = kiloes.bind(offset)(option);
            option = option.t;
            yankee = option.hkJ+Gh;
 523:
            option = {};
            option['gameTitle'] = backup;
            option['streamingDurationRequirement'] = foxtra;
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            foxtra = 3;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(offset)(foxtra);
            kiloes = foxtra.SharedQuestFields;
            backup = kiloes.build;
            foxtra = oscard.config;
            foxtra = backup.bind(kiloes)(foxtra);
            foxtra = foxtra.defaultReward;
            foxtra = foxtra.messages;
            foxtra = foxtra.nameWithArticle;
            option['questReward'] = foxtra;
            option['duration'] = romeon;
            option = verify.bind(offset)(yankee, option, report);
            return option;
 613:
            zuuluu = zuuluu.description;
            return zuuluu;
 620:
            verify = {};
            verify['quest'] = oscard;
            verify['taskDetails'] = golfie;
            verify['withoutMarkdown'] = report;
            zuuluu = verify.quest;
            option = verify.taskDetails;
            yankee = verify.withoutMarkdown;
            foxtra = option.targetMinutes;
            option = _closure1_slot0;
            backup = _closure1_slot1;
            verify = 3;
            verify = backup[verify];
            verify = option.bind(offset)(verify);
            romeon = verify.SharedQuestFields;
            verify = romeon.build;
            zuuluu = zuuluu.config;
            zuuluu = verify.bind(romeon)(zuuluu);
            zuuluu = zuuluu.defaultReward;
            zuuluu = zuuluu.messages;
            romeon = zuuluu.nameWithArticle;
            verify = _closure1_slot8;
            zuuluu = 2;
            zuuluu = backup[zuuluu];
            zuuluu = option.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.VYwSSk;
            zuuluu = {};
            zuuluu['streamingDurationRequirement'] = foxtra;
            zuuluu['questReward'] = romeon;
            zuuluu = verify.bind(offset)(option, zuuluu, yankee);
            return zuuluu;
 771:
            zuuluu = oscard.config;
            verify = zuuluu.videoMetadata;
            option = null;
            yankee = option == verify;
            zuuluu = undefined;
            if(yankee) { _fun00010_ip = 805; continue _fun00009 }
 793:
            verify = verify.messages;
            zuuluu = verify.videoTitle;
 805:
            option = option != zuuluu;
            romeon = 'video';
            if(!option) { _fun00010_ip = 819; continue _fun00009 }
 816:
            romeon = zuuluu;
 819:
            option = _closure1_slot0;
            foxtra = _closure1_slot1;
            zuuluu = 3;
            zuuluu = foxtra[zuuluu];
            zuuluu = option.bind(offset)(zuuluu);
            yankee = zuuluu.SharedQuestFields;
            verify = yankee.build;
            zuuluu = oscard.config;
            zuuluu = verify.bind(yankee)(zuuluu);
            zuuluu = zuuluu.defaultReward;
            zuuluu = zuuluu.messages;
            yankee = zuuluu.nameWithArticle;
            verify = _closure1_slot8;
            zuuluu = 2;
            zuuluu = foxtra[zuuluu];
            zuuluu = option.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.yMsQ7e;
            zuuluu = {};
            zuuluu['videoTitle'] = romeon;
            zuuluu['rewardNameWithArticle'] = yankee;
            zuuluu = verify.bind(offset)(option, zuuluu, report);
            return zuuluu;
 929:
            verify = {};
            verify['quest'] = oscard;
            verify['taskDetails'] = golfie;
            verify['withoutMarkdown'] = report;
            zuuluu = verify.quest;
            option = verify.taskDetails;
            yankee = verify.withoutMarkdown;
            romeon = option.targetMinutes;
            zuuluu = zuuluu.config;
            zuuluu = zuuluu.messages;
            foxtra = zuuluu.gameTitle;
            verify = _closure1_slot8;
            option = _closure1_slot0;
            backup = _closure1_slot1;
            zuuluu = 2;
            zuuluu = backup[zuuluu];
            zuuluu = option.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.a/ia7O;
            zuuluu = {};
            zuuluu['gameTitle'] = foxtra;
            zuuluu['streamingDurationRequirement'] = romeon;
            zuuluu = verify.bind(offset)(option, zuuluu, yankee);
            return zuuluu;
 1045:
            option = {};
            option['quest'] = oscard;
            option['taskDetails'] = golfie;
            option['withoutMarkdown'] = report;
            zuuluu = option.quest;
            backup = option.taskDetails;
            yankee = option.withoutMarkdown;
            verify = _closure1_slot0;
            option = _closure1_slot1;
            romeon = 3;
            romeon = option[romeon];
            romeon = verify.bind(offset)(romeon);
            kiloes = romeon.SharedQuestFields;
            foxtra = kiloes.build;
            romeon = zuuluu.config;
            romeon = foxtra.bind(kiloes)(romeon);
            romeon = romeon.defaultReward;
            romeon = romeon.messages;
            romeon = romeon.nameWithArticle;
            foxtra = option[output];
            sizing = verify.bind(offset)(foxtra);
            kiloes = sizing.getCollectibleQuestRewardDuration;
            foxtra = zuuluu.config;
            foxtra = kiloes.bind(sizing)(foxtra);
            backup = backup.targetMinutes;
            kiloes = zuuluu.config;
            kiloes = kiloes.messages;
            kiloes = kiloes.gameTitle;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.isCollectibleQuestRewardPremiumExtendable;
            zuuluu = zuuluu.config;
            option = option.bind(verify)(zuuluu);
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            result = 2;
            zuuluu = zuuluu[result];
            zuuluu = verify.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            if(option) { _fun00010_ip = 1251; continue _fun00009 }
 1241:
            verify = zuuluu.AwuMRU;
            _fun00010_ip = 1259; continue _fun00009;
 1251:
            verify = zuuluu.Lc6EpK;
 1259:
            option = _closure1_slot8;
            zuuluu = null;
            if(!(zuuluu == foxtra)) { _fun00010_ip = 1299; continue _fun00009 }
 1269:
            sizing = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[result];
            zuuluu = sizing.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            verify = zuuluu.FZL5Q0;
 1299:
            zuuluu = {};
            zuuluu['gameTitle'] = kiloes;
            zuuluu['streamingDurationRequirement'] = backup;
            zuuluu['rewardNameWithArticle'] = romeon;
            zuuluu['duration'] = foxtra;
            zuuluu['questReward'] = romeon;
            zuuluu = option.bind(offset)(verify, zuuluu, yankee);
            return zuuluu;
 1334:
            option = {};
            option['quest'] = oscard;
            option['taskDetails'] = golfie;
            option['withoutMarkdown'] = report;
            zuuluu = option.quest;
            backup = option.taskDetails;
            yankee = option.withoutMarkdown;
            verify = _closure1_slot0;
            option = _closure1_slot1;
            romeon = 3;
            romeon = option[romeon];
            romeon = verify.bind(offset)(romeon);
            kiloes = romeon.SharedQuestFields;
            foxtra = kiloes.build;
            romeon = zuuluu.config;
            romeon = foxtra.bind(kiloes)(romeon);
            romeon = romeon.defaultReward;
            romeon = romeon.messages;
            foxtra = romeon.nameWithArticle;
            romeon = option[output];
            sizing = verify.bind(offset)(romeon);
            kiloes = sizing.getCollectibleQuestRewardDuration;
            romeon = zuuluu.config;
            romeon = kiloes.bind(sizing)(romeon);
            backup = backup.targetMinutes;
            kiloes = zuuluu.config;
            kiloes = kiloes.messages;
            kiloes = kiloes.gameTitle;
            option = option[output];
            verify = verify.bind(offset)(option);
            option = verify.isCollectibleQuestRewardPremiumExtendable;
            zuuluu = zuuluu.config;
            option = option.bind(verify)(zuuluu);
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            result = 2;
            zuuluu = zuuluu[result];
            zuuluu = verify.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            if(option) { _fun00010_ip = 1538; continue _fun00009 }
 1530:
            verify = zuuluu.Ta44ur;
            _fun00010_ip = 1544; continue _fun00009;
 1538:
            verify = zuuluu.fSYpaW;
 1544:
            option = _closure1_slot8;
            zuuluu = null;
            if(!(zuuluu == romeon)) { _fun00010_ip = 1582; continue _fun00009 }
 1554:
            sizing = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[result];
            zuuluu = sizing.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            verify = zuuluu.NIimTk;
 1582:
            zuuluu = {};
            zuuluu['gameTitle'] = kiloes;
            zuuluu['targetMinutes'] = backup;
            zuuluu['rewardNameWithArticle'] = foxtra;
            zuuluu['duration'] = romeon;
            zuuluu = option.bind(offset)(verify, zuuluu, yankee);
            return zuuluu;
 1612:
            verify = {};
            verify['quest'] = oscard;
            verify['taskDetails'] = golfie;
            verify['withoutMarkdown'] = report;
            zuuluu = verify.quest;
            option = verify.taskDetails;
            verify = verify.withoutMarkdown;
            sizing = _closure1_slot0;
            kiloes = _closure1_slot1;
            yankee = 3;
            yankee = kiloes[yankee];
            yankee = sizing.bind(offset)(yankee);
            foxtra = yankee.SharedQuestFields;
            romeon = foxtra.build;
            yankee = zuuluu.config;
            yankee = romeon.bind(foxtra)(yankee);
            yankee = yankee.defaultReward;
            yankee = yankee.messages;
            foxtra = yankee.nameWithArticle;
            yankee = kiloes[output];
            backup = sizing.bind(offset)(yankee);
            romeon = backup.getCollectibleQuestRewardDuration;
            yankee = zuuluu.config;
            yankee = romeon.bind(backup)(yankee);
            romeon = option.targetMinutes;
            option = zuuluu.config;
            option = option.messages;
            backup = option.gameTitle;
            option = _closure1_slot8;
            kiloes = kiloes[output];
            sizing = sizing.bind(offset)(kiloes);
            kiloes = sizing.isCollectibleQuestRewardPremiumExtendable;
            zuuluu = zuuluu.config;
            zuuluu = kiloes.bind(sizing)(zuuluu);
            if(!zuuluu) { _fun00010_ip = 1793; continue _fun00009 }
 1787:
            zuuluu = null;
            if(!(zuuluu == yankee)) { _fun00010_ip = 1865; continue _fun00009 }
 1793:
            zuuluu = null;
            if(!(zuuluu == yankee)) { _fun00010_ip = 1832; continue _fun00009 }
 1799:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot1;
            zuuluu = 2;
            zuuluu = sizing[zuuluu];
            zuuluu = kiloes.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NIimTk;
            _fun00010_ip = 1863; continue _fun00009;
 1832:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 2;
            kiloes = output[kiloes];
            kiloes = sizing.bind(offset)(kiloes);
            kiloes = kiloes.t;
            zuuluu = kiloes.Ta44ur;
 1863:
            _fun00010_ip = 1896; continue _fun00009;
 1865:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot1;
            michal = 2;
            michal = sizing[michal];
            michal = kiloes.bind(offset)(michal);
            michal = michal.t;
            zuuluu = michal.fSYpaW;
 1896:
            michal = {};
            michal['gameTitle'] = backup;
            michal['rewardNameWithArticle'] = foxtra;
            michal['targetMinutes'] = romeon;
            michal['duration'] = yankee;
            michal = option.bind(offset)(zuuluu, michal, verify);
            return michal;
 1926:
            option = _closure1_slot8;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 2;
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
            if(romeon) { _fun00010_ip = 2010; continue _fun00009 }
 1998:
            yankee = yankee.messages;
            offset = yankee.videoTitle;
 2010:
            yankee = verify != offset;
            verify = 'video';
            if(!yankee) { _fun00010_ip = 2024; continue _fun00009 }
 2021:
            verify = offset;
 2024:
            michal['videoTitle'] = verify;
            michal = option.bind(tangon)(zuuluu, michal, report);
            return michal;
 2038:
            option = _closure1_slot8;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 2;
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
 2119:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
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
    var _closure1_slot9 = entity;
    tangon = function(argFoo) { // Original name: getQuestsInstructionsToWinReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot9;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            report = entity.withoutMarkdown;
            entity = zuuluu;
            if(!report) { _fun00012_ip = 38; continue _fun00011 }
 29:
            michal = _closure1_slot4;
            entity = michal.bind(tangon)(zuuluu);
 38:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = function(argFoo) { // Original name: getSimplifiedQuestTaskType
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 4;
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
            zuuluu = _closure1_slot5;
            if(entity) { _fun00014_ip = 157; continue _fun00013 }
 149:
            entity = zuuluu.PLAY;
            _fun00014_ip = 163; continue _fun00013;
 157:
            entity = zuuluu.WATCH_VIDEO;
 163:
            _fun00014_ip = 175; continue _fun00013;
 165:
            zuuluu = _closure1_slot5;
            entity = zuuluu.STREAM;
 175:
            _fun00014_ip = 187; continue _fun00013;
 177:
            michal = _closure1_slot5;
            entity = michal.PLAY;
 187:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    offset = 0;
    option = golfie[offset];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    verify = 1;
    report = golfie[verify];
    yankee = oscard.bind(entity)(report);
    option = yankee.getQuestLogger;
    report = {};
    report = option.bind(yankee)(report);
    var _closure1_slot3 = report;
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
            option = _closure1_slot4;
            zuuluu = entity;
            zuuluu = zuuluu.content;
            zuuluu = option.bind(report)(zuuluu);
 76: // try_end0
            return zuuluu;
 78: // try_start_1
            option = _closure1_slot6;
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
            verify = _closure1_slot4;
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
            zuuluu = _closure1_slot3;
            michal = zuuluu.error;
            entity = 'Failed to convert ASTNode to string';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = '';
            return entity;
        }
    };
    var _closure1_slot4 = report;
    report = {};
    report['PLAY'] = offset;
    option = 'PLAY';
    report[offset] = option;
    report['STREAM'] = verify;
    option = 'STREAM';
    report[verify] = option;
    verify = 2;
    report['WATCH_VIDEO'] = verify;
    option = 'WATCH_VIDEO';
    report[verify] = option;
    var _closure1_slot5 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/hooks/QuestCopyHooks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: useQuestsInstructionsToWinReward
        tangon = argFoo;
        yankee = tangon.quest;
        golfie = tangon.location;
        offset = tangon.questContent;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 5;
        michal = oscard[michal];
        zuuluu = undefined;
        verify = report.bind(zuuluu)(michal);
        option = verify.useConnectedConsoleLinkOnClick;
        michal = {};
        michal['quest'] = yankee;
        michal['questContent'] = offset;
        option = option.bind(verify)(michal);
        michal = _closure1_slot10;
        entity = {};
        foxtra = entity;
        romeon = tangon;
        tangon = copyDataProperties(foxtra, romeon);
        tangon = 'connectedConsoleLinkOnClick';
        entity[tangon] = option;
        option = false;
        tangon = 'withoutMarkdown';
        entity[tangon] = option;
        tangon = 6;
        tangon = oscard[tangon];
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useIsQuestBarCopySimplificationEnabled;
        tangon = {};
        tangon['location'] = golfie;
        report = report.bind(oscard)(tangon);
        tangon = 'withSimplifiedCopy';
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
                    zuuluu = _closure1_slot11;
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
            entity = 6;
            entity = report[entity];
            report = zuuluu.bind(oscard)(entity);
            zuuluu = report.useIsQuestBarCopySimplificationEnabled;
            entity = {};
            entity['location'] = option;
            entity['autoTrackExposure'] = golfie;
            entity = zuuluu.bind(report)(entity);
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.PLAY;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 266; continue _fun00017 }
 102:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 191; continue _fun00017 }
 116:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.WATCH_VIDEO;
            if(!(zuuluu !== tangon)) { _fun00018_ip = 132; continue _fun00017 }
 130:
            return oscard;
 132:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 2;
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
            zuuluu = 2;
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
            michal = 2;
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
                entity = 4;
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
                entity = 4;
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
            zuuluu = 2;
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