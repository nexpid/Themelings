// app/modules/forwarding/ForwardPreviewUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/ForwardPreviewUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useForwardPreviewContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            yankee = mike.message;
            var _closure2_slot0 = yankee;
            zulu = mike.channel;
            var _closure2_slot1 = zulu;
            zulu = mike.forwardOptions;
            mike = undefined;
            var _closure2_slot2 = mike;
            var _closure2_slot3 = mike;
            report = null;
            oscar = report == zulu;
            tango = undefined;
            if(oscar) { _fun00002_ip = 56; continue _fun00001 }
 50:
            tango = zulu.onlyAttachmentIds;
 56:
            _closure2_slot2 = tango;
            golf = report == zulu;
            oscar = undefined;
            if(golf) { _fun00002_ip = 75; continue _fun00001 }
 69:
            oscar = zulu.onlyEmbedIndices;
 75:
            _closure2_slot3 = oscar;
            zulu = yankee.messageSnapshots;
            options = 0;
            golf = zulu[options];
            verify = report == golf;
            zulu = undefined;
            if(verify) { _fun00002_ip = 105; continue _fun00001 }
 100:
            zulu = golf.message;
 105:
            if(!(report != zulu)) { _fun00002_ip = 112; continue _fun00001 }
 109:
            yankee = zulu;
 112:
            golf = yankee.attachments;
            if(!(report == tango)) { _fun00002_ip = 132; continue _fun00001 }
 122:
            if(!(report != oscar)) { _fun00002_ip = 155; continue _fun00001 }
 126:
            golf = new Array(0);
            _fun00002_ip = 155; continue _fun00001;
 132:
            offset = yankee.attachments;
            verify = offset.filter;
            zulu = function(argFoo) {
                zulu = _closure2_slot2;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = verify.bind(offset)(zulu);
 155:
            zulu = new Array(0);
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            offset = 1;
            offset = foxtrot[offset];
            foxtrot = romeo.bind(mike)(offset);
            romeo = foxtrot.useStateFromStores;
            verify = _closure1_slot2;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 16:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 2;
                    report = report[tango];
                    tango = undefined;
                    oscar = oscar.bind(tango)(report);
                    report = oscar.canEmbedLinks;
                    tango = _closure2_slot1;
                    zulu = _closure1_slot2;
                    zulu = report.bind(oscar)(tango, zulu);
                    entity = !zulu;
 64:
                    if(!entity) { _fun00004_ip = 107; continue _fun00003 }
 67:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 2;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.shouldStripEmbeds;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 107:
                    return entity;
                }
            };
            verify = romeo.bind(foxtrot)(offset, verify);
            if(verify) { _fun00002_ip = 261; continue _fun00001 }
 215:
            verify = yankee.embeds;
            if(!(report == oscar)) { _fun00002_ip = 235; continue _fun00001 }
 225:
            if(!(report != tango)) { _fun00002_ip = 233; continue _fun00001 }
 229:
            verify = new Array(0);
 233:
            _fun00002_ip = 258; continue _fun00001;
 235:
            foxtrot = yankee.embeds;
            romeo = foxtrot.filter;
            offset = function(argFoo, argBar) {
                zulu = _closure2_slot3;
                mike = zulu.includes;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = romeo.bind(foxtrot)(offset);
 258:
            zulu = verify;
 261:
            oscar = report != oscar;
            if(oscar) { _fun00002_ip = 296; continue _fun00001 }
 268:
            offset = yankee.content;
            verify = '';
            verify = verify === offset;
            if(!verify) { _fun00002_ip = 293; continue _fun00001 }
 284:
            offset = zulu.length;
            verify = offset > options;
 293:
            oscar = verify;
 296:
            offset = yankee;
            if(!oscar) { _fun00002_ip = 348; continue _fun00001 }
 302:
            verify = yankee.set;
            oscar = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.url;
                return entity;
            };
            romeo = oscar.bind(zulu)(entity);
            oscar = romeo.join;
            entity = '\n';
            oscar = oscar.bind(romeo)(entity);
            entity = 'content';
            offset = verify.bind(yankee)(entity, oscar);
 348:
            entity = offset.content;
            oscar = '';
            entity = oscar === entity;
            if(!entity) { _fun00002_ip = 393; continue _fun00001 }
 364:
            verify = offset.embeds;
            verify = verify[options];
            yankee = report == verify;
            mike = undefined;
            if(yankee) { _fun00002_ip = 389; continue _fun00001 }
 383:
            mike = verify.rawDescription;
 389:
            entity = report != mike;
 393:
            mike = offset;
            if(!entity) { _fun00002_ip = 430; continue _fun00001 }
 399:
            verify = offset.set;
            entity = offset.embeds;
            entity = entity[options];
            options = entity.rawDescription;
            entity = 'content';
            mike = verify.bind(offset)(entity, options);
 430:
            entity = {};
            entity['attachments'] = golf;
            entity['embeds'] = zulu;
            zulu = mike.content;
            zulu = oscar !== zulu;
            if(!zulu) { _fun00002_ip = 458; continue _fun00001 }
 454:
            zulu = report == tango;
 458:
            entity['hasContent'] = zulu;
            entity['contentMessage'] = mike;
            return entity;
        }
    };
    zulu['useForwardPreviewContent'] = mike;
    return entity;
})();