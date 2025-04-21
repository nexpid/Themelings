// app/modules/forwarding/ForwardPreviewUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/ForwardPreviewUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useForwardPreviewContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.message;
            var _closure2_slot0 = yankee;
            zuuluu = michal.channel;
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.forwardOptions;
            michal = undefined;
            var _closure2_slot2 = michal;
            var _closure2_slot3 = michal;
            report = null;
            oscard = report == zuuluu;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 56; continue _fun00001 }
 50:
            tangon = zuuluu.onlyAttachmentIds;
 56:
            _closure2_slot2 = tangon;
            golfie = report == zuuluu;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 75; continue _fun00001 }
 69:
            oscard = zuuluu.onlyEmbedIndices;
 75:
            _closure2_slot3 = oscard;
            zuuluu = yankee.messageSnapshots;
            option = 0;
            golfie = zuuluu[option];
            verify = report == golfie;
            zuuluu = undefined;
            if(verify) { _fun00002_ip = 105; continue _fun00001 }
 100:
            zuuluu = golfie.message;
 105:
            if(!(report != zuuluu)) { _fun00002_ip = 112; continue _fun00001 }
 109:
            yankee = zuuluu;
 112:
            golfie = yankee.attachments;
            if(!(report == tangon)) { _fun00002_ip = 132; continue _fun00001 }
 122:
            if(!(report != oscard)) { _fun00002_ip = 155; continue _fun00001 }
 126:
            golfie = new Array(0);
            _fun00002_ip = 155; continue _fun00001;
 132:
            offset = yankee.attachments;
            verify = offset.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot2;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = verify.bind(offset)(zuuluu);
 155:
            zuuluu = new Array(0);
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            offset = 1;
            offset = foxtra[offset];
            foxtra = romeon.bind(michal)(offset);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot2;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 16:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 2;
                    report = report[tangon];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.canEmbedLinks;
                    tangon = _closure2_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    entity = !zuuluu;
 64:
                    if(!entity) { _fun00004_ip = 107; continue _fun00003 }
 67:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.shouldStripEmbeds;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal);
 107:
                    return entity;
                }
            };
            verify = romeon.bind(foxtra)(offset, verify);
            if(verify) { _fun00002_ip = 261; continue _fun00001 }
 215:
            verify = yankee.embeds;
            if(!(report == oscard)) { _fun00002_ip = 235; continue _fun00001 }
 225:
            if(!(report != tangon)) { _fun00002_ip = 233; continue _fun00001 }
 229:
            verify = new Array(0);
 233:
            _fun00002_ip = 258; continue _fun00001;
 235:
            foxtra = yankee.embeds;
            romeon = foxtra.filter;
            offset = function(argFoo, argBar) {
                zuuluu = _closure2_slot3;
                michal = zuuluu.includes;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = romeon.bind(foxtra)(offset);
 258:
            zuuluu = verify;
 261:
            oscard = report != oscard;
            if(oscard) { _fun00002_ip = 296; continue _fun00001 }
 268:
            offset = yankee.content;
            verify = '';
            verify = verify === offset;
            if(!verify) { _fun00002_ip = 293; continue _fun00001 }
 284:
            offset = zuuluu.length;
            verify = offset > option;
 293:
            oscard = verify;
 296:
            offset = yankee;
            if(!oscard) { _fun00002_ip = 348; continue _fun00001 }
 302:
            verify = yankee.set;
            oscard = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.url;
                return entity;
            };
            romeon = oscard.bind(zuuluu)(entity);
            oscard = romeon.join;
            entity = '\n';
            oscard = oscard.bind(romeon)(entity);
            entity = 'content';
            offset = verify.bind(yankee)(entity, oscard);
 348:
            entity = offset.content;
            oscard = '';
            entity = oscard === entity;
            if(!entity) { _fun00002_ip = 393; continue _fun00001 }
 364:
            verify = offset.embeds;
            verify = verify[option];
            yankee = report == verify;
            michal = undefined;
            if(yankee) { _fun00002_ip = 389; continue _fun00001 }
 383:
            michal = verify.rawDescription;
 389:
            entity = report != michal;
 393:
            michal = offset;
            if(!entity) { _fun00002_ip = 430; continue _fun00001 }
 399:
            verify = offset.set;
            entity = offset.embeds;
            entity = entity[option];
            option = entity.rawDescription;
            entity = 'content';
            michal = verify.bind(offset)(entity, option);
 430:
            entity = {};
            entity['attachments'] = golfie;
            entity['embeds'] = zuuluu;
            zuuluu = michal.content;
            zuuluu = oscard !== zuuluu;
            if(!zuuluu) { _fun00002_ip = 458; continue _fun00001 }
 454:
            zuuluu = report == tangon;
 458:
            entity['hasContent'] = zuuluu;
            entity['contentMessage'] = michal;
            return entity;
        }
    };
    zuuluu['useForwardPreviewContent'] = michal;
    return entity;
})();