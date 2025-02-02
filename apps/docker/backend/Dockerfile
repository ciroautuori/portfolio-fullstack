FROM python:3.10.12-slim-buster

WORKDIR /apps/backend

COPY ./apps/backend .

RUN python -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r /apps/backend/core/requirements/dev.txt && \
    chmod +x /apps/backend/core/entrypoint.sh

CMD [ "/apps/backend/core/entrypoint.sh" ]